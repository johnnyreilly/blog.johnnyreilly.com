---
slug: integration-tests-with-sql-server
title: 'Integration Tests with SQL Server Database Snapshots'
authors: johnnyreilly
tags: [sql server, automated testing]
hide_table_of_contents: false
description: 'Discover the benefits of using database snapshots for integration tests to reduce complexity & errors in this informative article.'
---

## Once More With Feeling

<!--truncate-->

This is a topic that I have written about [before](../2014-01-24-integration-testing-with-entity/index.md).... But not well. I recently had cause to dust down my notes on how to use snapshotting in your integration tests. To my dismay, referring back to my original blog post was less helpful than I'd hoped. Now I've cracked the enigma code that my original scribings turned out to be, it's time to turn my relearnings back into something genuinely useful.

## What's the Scenario?

You have a test database. You want to write integration tests. So what's the problem? Well, these tests will add records, delete records, update records within the tables of the database. They will mutate the data. And that's exactly what they ought to do; they're testing that our code uses the database in the way we would hope and expect.

So how do we handle this? Well, we could handle this by writing code at the end of each test that is responsible for reverting the database back to the state that it was in at the start of the test. So if we had a test that added a record and tested it, we'd need the test to be responsible for removing that record before any subsequent tests run. Now that's a totally legitimate approach but it adds tax. Each test becomes more complicated and requires more code.

So what's another approach? Perhaps we could take a backup of our database before our first test runs. Then, at the end of each test, we could restore our backup to roll the database back to its initial state. Perfect, right? Less code to write, less scope for errors. So what's the downside? Backups are slowwwww. Restores likewise. We could be waiting minutes between each test that runs. That's not acceptable.

There is another way though: [database snapshots](https://msdn.microsoft.com/en-us/library/ms175158.aspx) \- a feature that's been nestling inside SQL Server for a goodly number of years. For our use case, to all intents and purposes, database snapshots offers the same functionality as backups and restores. You can backup a database (take a snapshot of a database at a point in time), you can restore a database (roll back the database to the point of the snapshot). More importantly, you can do either operation in \*_under a second_\*. As it happens, Microsoft advocate using this approach themselves:

> In a testing environment, it can be useful when repeatedly running a test protocol for the database to contain identical data at the start of each round of testing. Before running the first round, an application developer or tester can create a database snapshot on the test database. After each test run, the database can be quickly returned to its prior state by reverting the database snapshot.

Sold!

## Talk is cheap, show me the code

In the end it comes down to 3 classes; `DatabaseSnapshot.cs` which does the actual snapshotting work and 2 classes that make use of it.

### DatabaseSnapshot.cs

This is our `DatabaseSnapshot` class. Isn't it pretty?

```cs
using System.Data;
using System.Data.SqlClient;

namespace Testing.Shared
{
    public class DatabaseSnapshot
    {
        private readonly string _dbName;
        private readonly string _dbSnapShotPath;
        private readonly string _dbSnapShotName;
        private readonly string _dbConnectionString;

        public DatabaseSnapshot(string dbName, string dbSnapshotPath, string dbSnapshotName, string dbConnectionString)
        {
            _dbName = dbName;
            _dbSnapshotPath = dbSnapshotPath;
            _dbSnapshotName = dbSnapshotName;
            _dbConnectionString = dbConnectionString;
        }

        public void CreateSnapshot()
        {
            if (!System.IO.Directory.Exists(_dbSnapshotPath))
                System.IO.Directory.CreateDirectory(_dbSnapshotPath);

            var sql = $"CREATE DATABASE { _dbSnapshotName } ON (NAME=[{ _dbName }], FILENAME='{ _dbSnapshotPath }{ _dbSnapshotName }') AS SNAPSHOT OF [{_dbName }]";

            ExecuteSqlAgainstMaster(sql);
        }

        public void DeleteSnapshot()
        {
            var sql = $"DROP DATABASE { _dbSnapshotName }";

            ExecuteSqlAgainstMaster(sql);
        }

        public void RestoreSnapshot()
        {
            var sql = "USE master;\r\n" +

                $"ALTER DATABASE {_dbName} SET SINGLE_USER WITH ROLLBACK IMMEDIATE;\r\n" +

                $"RESTORE DATABASE {_dbName}\r\n" +
                $"FROM DATABASE_SNAPSHOT = '{ _dbSnapshotName }';\r\n" +

                $"ALTER DATABASE {_dbName} SET MULTI_USER;\r\n";

            ExecuteSqlAgainstMaster(sql);
        }

        private void ExecuteSqlAgainstMaster(string sql, params SqlParameter[] parameters)
        {
            using (var conn = new SqlConnection(_dbConnectionString))
            {
                conn.Open();
                var cmd = new SqlCommand(sql, conn) { CommandType = CommandType.Text };
                cmd.Parameters.AddRange(parameters);
                cmd.ExecuteNonQuery();
                conn.Close();
            }
        }
    }
}
```

It exposes 3 methods:

<dl><dt>CreateSnapshot</dt><dd>This method creates the snapshot of the database. We will run this right at the start, before any of our tests run.</dd><dt>DeleteSnapshot</dt><dd>Deletes the snapshot we created. We will run this at the end, after all our tests have finished running.</dd><dt>RestoreSnapshot</dt><dd>Restores the database back to the snapshot we took earlier. We run this after each test has completed. This method relies on a connection to the database (perhaps unsurprisingly). It switches the database in use away from the database that is being restored prior to actually running the restore. It happens to shift to the master database (I believe that's entirely incidental; although I haven't tested).</dd></dl>

### SetupAndTeardown.cs

This class is responsible for setting up the snapshot we're going to use in our tests right before any of the tests have run (in the `FixtureSetup` method). It's also responsible for deleting the snapshot once all the tests have finished running (in the `FixtureTearDown` method). It should be noted that in this example I'm using NUnit and this class is written to depend on the hooks NUnit exposes for running code at the very beginning and end of the test cycle. All test frameworks have these hooks; if you're using something other than NUnit then it's just a case of swapping in the relevant attribute (everything tends to attribute driven in the test framework world).

```cs
using NUnit.Framework;

namespace Testing.Shared
{
   [SetUpFixture]
   public class SetupAndTeardown
   {
      public static DatabaseSnapshot DatabaseSnapshot;

      [SetUp]
      public void FixtureSetup()
      {
         DatabaseSnapshot = new DatabaseSnapshot("MyDbName", "C:\\", "MySnapshot", "Data Source=.;initial catalog=MyDbName;integrated security=True;");

         try
         {
            // Try to delete the snapshot in case it was left over from aborted test runs
            DatabaseSnapshot.DeleteSnapShot();
         }
         catch { /* this should fail with snapshot does not exist */ }

         DatabaseSnapshot.CreateSnapShot();
      }

      [TearDown]
      public void FixtureTearDown()
      {
         DatabaseSnapshot.DeleteSnapShot();
      }
   }
}
```

### TestBase.cs

All of our test classes are made to inherit from this class:

```cs
using NUnit.Framework;

namespace Testing.Shared
{
   public class TestBase
   {
      [TearDown]
      public void TearDown()
      {
         SetupAndTeardown.DatabaseSnapshot.RestoreSnapShot();
      }
   }
}
```

Which restores the database back to the snapshot position at the end of each test. And that... Is that!
