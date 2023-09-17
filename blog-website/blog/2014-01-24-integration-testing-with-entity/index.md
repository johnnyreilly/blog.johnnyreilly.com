---
slug: integration-testing-with-entity
title: 'Integration Testing with Entity Framework and Snapshot Backups'
authors: johnnyreilly
tags: [sql server, automated testing]
hide_table_of_contents: false
description: 'The article shows how to use SQL Servers snapshot backups for creating effective integration tests that dont affect production data.'
---

I've written before about how unit testing [Entity Framework is a contentious and sometimes pointless activity](../2012-10-03-unit-testing-and-entity-framework-filth/index.md). The TL;DR is that LINQ-to-Objects != Linq-to-Entities and so if you want some useful tests around your data tier then integration tests that actually hit a database are what you want.

<!--truncate-->

However hitting an actual database is has serious implications. For a start you need a database server and you need a database. But the real issue lies around cleanup. When you write a test that amends data in the database you need the test to clean up after itself. If it doesn't then the next test that runs may trip over the amended data and that's your test pack instantly useless.

What you want is a way to wipe the slate clean - to return the database back to the state that it was in before your test ran. Kind of like a database restore - except that would be slow. And this is where [SQL Server's snapshot backups](<http://technet.microsoft.com/en-us/library/ms189548(v=sql.105).aspx>) have got your back. To quote MSDN:

> \*Snapshot backups have the following primary benefits:
>
> - A backup can be created quickly, typically measured in seconds, with little or no effect on the server.
> - A restore operation can be accomplished from a disk backup just as quickly.
> - Backup to tape can be accomplished by another host without an effect on the production system.
> - **A copy of a production database can be created instantly for reporting or testing.**
>
> *

Just the ticket.

## Our Mission

In this post I want to go through the process of taking an existing database, pointing Entity Framework at it, setting up some repositories and then creating an integration test pack that uses snapshot backups to cleanup after each test runs. The code detailed in this post is available in this [GitHub repo](https://github.com/johnnyreilly/SnapshotBackupsIntegrationTesting) if you want to have a go yourself.

## We need a database

You can find a whole assortment of databases [here](https://msftdbprodsamples.codeplex.com/releases). I'm going to use [AdventureWorksLT](https://msftdbprodsamples.codeplex.com/wikipage?title=AWLTDocs) as it's small and simple. So I'll download [this](https://msftdbprodsamples.codeplex.com/downloads/get/478217) and unzip it. I'll drop `AdventureWorksLT2008R2_Data/index.mdf` and `AdventureWorksLT2008R2_log.LDF` in my data folder and attach AdventureWorksLT2008R2 to my database server. And now I have a database.

## Assemble me your finest DbContext

Or in English: we want to point Entity Framework at our new shiny database. So let's fire up Visual Studio (I'm using 2013) and create a new solution called "AdventureWorks".

To our solution let's add a new class library project called "AdventureWorks.EntityFramework". And to that we'll add an ADO.NET Entity Data Model which we'll call "AdventureWorks.edmx". When the wizard fires up we'll use the "Generate from database" option, click Next and select "New Connection". In the dialog we'll select our newly attached AdventureWorksLT2008R2 database. We'll leave the "save entity connection settings in App.Config" option selected and click Next. I'm going to use Entity Framework 6.0 - though I think that any version would do. I'm going to pull in all tables / store procs and views. And now Entity Framework is pointing at my database.

## Let There be Repositories!

In the name of testability let's create a new project to house repositories called "AdventureWorks.Repositories". I'm going to use [K. Scott Allen](http://odetocode.com/about/scott-allen)'s fine [article on MSDN](http://msdn.microsoft.com/en-us/library/ff714955.aspx) to create a very basic set of repositories wrapped in a unit of work.

In my new project I'll add a reference to the `AdventureWorks.EntityFramework` project and create a new `IRepository` interface that looks like this:

```cs
using System;
using System.Linq;
using System.Linq.Expressions;

namespace AdventureWorks.Repositories
{
    public interface IRepository<T> where T : class
    {
        IQueryable<T> FindAll();
        IQueryable<T> FindWhere(Expression<Func<T, bool>> predicate);
        T Add(T newEntity);
        T Remove(T entity);
    }
}
```

And a new `IUnitOfWork` interface that looks like this:

```cs
using AdventureWorks.EntityFramework;

namespace AdventureWorks.Repositories
{
    public interface IUnitOfWork
    {
        public IRepository<ErrorLog> ErrorLogs { get; }
        public IRepository<Address> Addresses { get; }
        public IRepository<Customer> Customers { get; }
        public IRepository<CustomerAddress> CustomerAddresses { get; }
        public IRepository<Product> Products { get; }
        public IRepository<ProductCategory> ProductCategories { get; }
        public IRepository<ProductDescription> ProductDescriptions { get; }
        public IRepository<ProductModel> ProductModels { get; }
        public IRepository<ProductModelProductDescription> ProductModelProductDescriptions { get; }
        public IRepository<SalesOrderDetail> SalesOrderDetails { get; }
        public IRepository<SalesOrderHeader> SalesOrderHeaders { get; }
        public IRepository<BuildVersion> BuildVersions { get; }

        void Commit();
    }
}
```

Now for the implementation of `IRepository`. For this we'll need a reference to Entity Framework in our project. Then we'll create a class called `SqlRepository`:

```cs
using System;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;

namespace AdventureWorks.Repositories
{
    public class SqlRepository<T> : IRepository<T> where T : class
    {
        public SqlRepository(DbContext context)
        {
            _dbSet = context.Set<T>();
        }

        public IQueryable<T> FindAll()
        {
            return _dbSet;
        }

        public IQueryable<T> FindWhere(Expression<Func<T, bool>> predicate)
        {
            return _dbSet.Where(predicate);
        }

        public T Add(T newEntity)
        {
            return _dbSet.Add(newEntity);
        }

        public T Remove(T entity)
        {
            return _dbSet.Remove(entity);
        }

        protected DbSet<T> _dbSet;
    }
}
```

And we also need the implementation of `IUnitOfWork`. So we'll create a class called `SqlUnitOfWork`:

```cs
using System;
using System.Linq;
using System.Data.Entity;
using AdventureWorks.EntityFramework;

namespace AdventureWorks.Repositories
{
    public class SqlUnitOfWork : IUnitOfWork
    {
        public SqlUnitOfWork()
        {
            _context = new AdventureWorksLT2008R2Entities();
        }

        public IRepository<ErrorLog> ErrorLogs
        {
            get
            {
                if (_errorLogs == null) _errorLogs = new SqlRepository<ErrorLog>(_context);
                return _errorLogs;
            }
        }

        public IRepository<Address> Addresses
        {
            get
            {
                if (_addresses == null) _addresses = new SqlRepository<Address>(_context);
                return _addresses;
            }
        }

        public IRepository<Customer> Customers
        {
            get
            {
                if (_customers == null) _customers = new SqlRepository<Customer>(_context);
                return _customers;
            }
        }

        public IRepository<CustomerAddress> CustomerAddresses
        {
            get
            {
                if (_customerAddresses == null) _customerAddresses = new SqlRepository<CustomerAddress>(_context);
                return _customerAddresses;
            }
        }

        public IRepository<Product> Products
        {
            get
            {
                if (_products == null) _products = new SqlRepository<Product>(_context);
                return _products;
            }
        }

        public IRepository<ProductCategory> ProductCategories
        {
            get
            {
                if (_productCategories == null) _productCategories = new SqlRepository<ProductCategory>(_context);
                return _productCategories;
            }
        }

        public IRepository<ProductDescription> ProductDescriptions
        {
            get
            {
                if (_productDescriptions == null) _productDescriptions = new SqlRepository<ProductDescription>(_context);
                return _productDescriptions;
            }
        }

        public IRepository<ProductModel> ProductModels
        {
            get
            {
                if (_productModels == null) _productModels = new SqlRepository<ProductModel>(_context);
                return _productModels;
            }
        }

        public IRepository<ProductModelProductDescription> ProductModelProductDescriptions
        {
            get
            {
                if (_productModelProductDescriptions == null) _productModelProductDescriptions = new SqlRepository<ProductModelProductDescription>(_context);
                return _productModelProductDescriptions;
            }
        }

        public IRepository<SalesOrderDetail> SalesOrderDetails
        {
            get
            {
                if (_salesOrderDetails == null) _salesOrderDetails = new SqlRepository<SalesOrderDetail>(_context);
                return _salesOrderDetails;
            }
        }

        public IRepository<SalesOrderHeader> SalesOrderHeaders
        {
            get
            {
                if (_salesOrderHeaders == null) _salesOrderHeaders = new SqlRepository<SalesOrderHeader>(_context);
                return _salesOrderHeaders;
            }
        }

        public IRepository<BuildVersion> BuildVersions
        {
            get
            {
                if (_buildVersions == null) _buildVersions = new SqlRepository<BuildVersion>(_context);
                return _buildVersions;
            }
        }

        public void Commit()
        {
            _context.SaveChanges();
        }

        SqlRepository<ErrorLog> _errorLogs = null;
        SqlRepository<Address> _addresses = null;
        SqlRepository<Customer> _customers = null;
        SqlRepository<CustomerAddress> _customerAddresses = null;
        SqlRepository<Product> _products = null;
        SqlRepository<ProductCategory> _productCategories = null;
        SqlRepository<ProductDescription> _productDescriptions = null;
        SqlRepository<ProductModel> _productModels = null;
        SqlRepository<ProductModelProductDescription> _productModelProductDescriptions = null;
        SqlRepository<SalesOrderDetail> _salesOrderDetails = null;
        SqlRepository<SalesOrderHeader> _salesOrderHeaders = null;
        SqlRepository<BuildVersion> _buildVersions = null;

        readonly DbContext _context;
    }
}
```

## And Now Let's Start Integration Testing!

Let's create a new Unit Test project called "AdventureWorks.Repositories.IntegrationTests". (And just to be clear: this is \*not\* a unit test project - it is an **_integration_** test project.) We'll add a reference back to our `AdventureWorks.Repositories` project for the repositories and one back to `AdventureWorks.EntityFramework` for our domain models. And finally you'll need a reference to Entity Framework in your IntegrationTest project as well as well.

We'll copy across the `app.config` from `AdventureWorks.EntityFramework` to `AdventureWorks.Repositories.IntegrationTests` as it contains the database connection details. It'll look something like this:

```xml
<?xml version="1.0" encoding="utf-8"?>
<configuration>
    <configSections>
        <section name="entityFramework" type="System.Data.Entity.Internal.ConfigFile.EntityFrameworkSection, EntityFramework, Version=6.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089" requirePermission="false" />
        <!-- For more information on Entity Framework configuration, visit http://go.microsoft.com/fwlink/?LinkID=237468 -->
    </configSections>
    <connectionStrings>
        <add name="AdventureWorksLT2008R2Entities"
             connectionString="metadata=res://*/AdventureWorks.csdl|res://*/AdventureWorks.ssdl|res://*/AdventureWorks.msl;provider=System.Data.SqlClient;provider connection string=&quot;data source=.;initial catalog=AdventureWorksLT2008R2;integrated security=True;MultipleActiveResultSets=True;App=EntityFramework&quot;"
             providerName="System.Data.EntityClient" />
    </connectionStrings>
    <entityFramework>
        <defaultConnectionFactory type="System.Data.Entity.Infrastructure.SqlConnectionFactory, EntityFramework" />
        <providers>
            <provider invariantName="System.Data.SqlClient" type="System.Data.Entity.SqlServer.SqlProviderServices, EntityFramework.SqlServer" />
        </providers>
    </entityFramework>
</configuration>
```

Now we're ready for a test. We'll add ourselves a class called `BuildVersionTests`:

```cs
using System;
using System.Linq;
using System.Linq.Expressions;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace AdventureWorks.Repositories.IntegrationTests
{
    [TestClass]
    public class BuildVersionTests
    {
        [TestMethod]
        public void BuildVersions_should_return_the_correct_version_information()
        {
            // Arrange
            var uow = new SqlUnitOfWork();

            // Act
            var buildVersions = uow.BuildVersions.FindAll().ToList();

            // Assert
            Assert.AreEqual(1, buildVersions.Count);
            Assert.AreEqual("10.00.80404.00", buildVersions[0].Database_Version);
            Assert.AreEqual(new DateTime(2008, 4, 4), buildVersions[0].ModifiedDate);
            Assert.AreEqual(1, buildVersions[0].SystemInformationID);
            Assert.AreEqual(new DateTime(2008, 4, 4), buildVersions[0].VersionDate);
        }
    }
}
```

This is as simple as it gets - our test creates a new unit of work and queries the `BuildVersions` table to see what we can see. All it's really doing is demonstrating that we can now hit our database through our repositories. As a side note, we could have the exact same test operating directly on the `DbContext` like this:

```cs
[TestMethod]
        public void DbContext_BuildVersions_should_return_the_correct_version_information()
        {
            // Arrange
            var dbContext = new AdventureWorks.EntityFramework.AdventureWorksLT2008R2Entities();

            // Act
            var buildVersions = dbContext.BuildVersions.ToList();

            // Assert
            Assert.AreEqual(1, buildVersions.Count);
            Assert.AreEqual("10.00.80404.00", buildVersions[0].Database_Version);
            Assert.AreEqual(new DateTime(2008, 4, 4), buildVersions[0].ModifiedDate);
            Assert.AreEqual(1, buildVersions[0].SystemInformationID);
            Assert.AreEqual(new DateTime(2008, 4, 4), buildVersions[0].VersionDate);
        }
```

For the most part we won't be doing this but I wanted to be clear that full power of Entity Framework is available to you as you're putting together your integration tests.

## Database Snapshotting Time

Up until this point we've essentially been laying our infrastructure and doing our plumbing. We now have a database, domain models and data access courtesy of Entity Framework, a testable repository layer and finally an integration test pack. What we want now is to get our database snapshot / backup and restore mechanism set up and integrated into the test pack.

Let's add references to the `System.Data` and `System.Configuration` assemblies to our integration testing project and then add a new class called `DatabaseSnapshot`:

```cs
using System.Configuration;
using System.Data;
using System.Data.SqlClient;

namespace AdventureWorks.Repositories.IntegrationTests
{
    public static class DatabaseSnapshot
    {
        private const string SpCreateSnapShotName = "SnapshotBackup_Create";
        private const string SpCreateSnapShot =
@"CREATE PROCEDURE [dbo].[" + SpCreateSnapShotName + @"]
    @databaseName        varchar(512),
    @databaseLogicalName varchar(512),
    @snapshotBackupPath  varchar(512),
    @snapshotBackupName  varchar(512)
AS
BEGIN
    SET NOCOUNT ON;

    DECLARE @sql varchar(500)
    SELECT @sql = 'CREATE DATABASE ' + @snapshotBackupName +
                  ' ON (NAME=[' + @databaseLogicalName +
                  '], FILENAME=''' + @snapshotBackupPath + @snapshotBackupName +
                  ''') AS SNAPSHOT OF [' + @databaseName + ']'
    EXEC(@sql)
END";

        private const string SpRestoreSnapShotName = "SnapshotBackup_Restore";
        private const string SpRestoreSnapShot =
@"CREATE PROCEDURE [dbo].[" + SpRestoreSnapShotName + @"]
    @databaseName varchar(512),
    @snapshotBackupName varchar(512)
AS
BEGIN
    SET NOCOUNT ON;

    DECLARE @sql varchar(500)
    SET @sql  = 'ALTER DATABASE [' + @databaseName + '] SET SINGLE_USER WITH ROLLBACK IMMEDIATE'
    EXEC (@sql)

    RESTORE DATABASE @databaseName
    FROM DATABASE_SNAPSHOT = @snapshotBackupName

    SET @sql = 'ALTER DATABASE [' + @databaseName + '] SET MULTI_USER'
    EXEC (@sql)
END";

        private const string SpDeleteSnapShotName = "SnapshotBackup_Delete";
        private const string SpDeleteSnapShot =
@"CREATE PROCEDURE [dbo].[" + SpDeleteSnapShotName + @"]
    @snapshotBackupName varchar(512)
AS
BEGIN
    SET NOCOUNT ON;

    DECLARE @sql varchar(500)

    SELECT @sql = 'DROP DATABASE ' + @snapshotBackupName
    EXEC(@sql)
END";

        private static string _masterDbConnectionString;
        private static string _dbName;
        private static ConnectionStringSettings _dbConnectionStringSettings;

        private static ConnectionStringSettings DbConnectionStringSettings
        {
            get
            {
                if (_dbConnectionStringSettings == null)
                    _dbConnectionStringSettings = ConfigurationManager.ConnectionStrings["SnapshotBackup"];

                return _dbConnectionStringSettings;
            }
        }

        /// <summary>
        /// Stored procedures should be executed against master database
        /// </summary>
        private static string MasterDbConnectionString
        {
            get
            {
                if (string.IsNullOrEmpty(_masterDbConnectionString))
                {
                    var sqlConnection = new SqlConnection(DbConnectionStringSettings.ConnectionString);
                    _masterDbConnectionString = DbConnectionStringSettings.ConnectionString.Replace(sqlConnection.Database, "master");
                }
                return _masterDbConnectionString;
            }
        }

        private static string DbName
        {
            get
            {
                if (string.IsNullOrEmpty(_dbName))
                    _dbName = new SqlConnection(DbConnectionStringSettings.ConnectionString).Database.TrimStart('[').TrimEnd(']');

                return _dbName;
            }
        }

        public static void SetupStoredProcedures()
        {
            using (var conn = new SqlConnection(MasterDbConnectionString))
            {
                conn.Open();

                // Drop the existing stored procedures
                SqlCommand cmd;
                const string dropProcSql = "IF EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[{0}]') AND type in (N'P', N'PC')) DROP PROCEDURE [dbo].[{0}]";
                foreach (var spName in new[] { SpCreateSnapShotName, SpDeleteSnapShotName, SpRestoreSnapShotName })
                {
                    cmd = new SqlCommand(string.Format(dropProcSql, spName), conn);
                    cmd.ExecuteNonQuery();
                }

                // Create the stored procedures anew
                foreach (var createProcSql in new[] { SpCreateSnapShot, SpDeleteSnapShot, SpRestoreSnapShot })
                {
                    cmd = new SqlCommand(createProcSql, conn);
                    cmd.ExecuteNonQuery();
                }

                conn.Close();
            }
        }

        public static void CreateSnapShot()
        {
            var databaseName = new SqlParameter { ParameterName = "@databaseName", SqlValue = SqlDbType.VarChar, Value = DbName };
            var databaseLogicalName = new SqlParameter { ParameterName = "@databaseLogicalName", SqlValue = SqlDbType.VarChar, Value = ConfigurationManager.AppSettings["DatabaseLogicalName"] };
            var snapshotBackupPath = new SqlParameter { ParameterName = "@snapshotBackupPath", SqlValue = SqlDbType.VarChar, Value = ConfigurationManager.AppSettings["SnapshotBackupPath"] };
            var snapshotBackupName = new SqlParameter { ParameterName = "@snapshotBackupName", SqlValue = SqlDbType.VarChar, Value = ConfigurationManager.AppSettings["SnapshotBackupName"] };

            ExecuteStoredProcAgainstMaster(SpCreateSnapShotName, new[] { databaseName, databaseLogicalName, snapshotBackupPath, snapshotBackupName });
        }

        public static void DeleteSnapShot()
        {
            var snapshotBackupName = new SqlParameter { ParameterName = "@snapshotBackupName", SqlValue = SqlDbType.VarChar, Value = ConfigurationManager.AppSettings["SnapshotBackupName"] };

            ExecuteStoredProcAgainstMaster(SpDeleteSnapShotName, new[] { snapshotBackupName });
        }

        public static void RestoreSnapShot()
        {
            var databaseName = new SqlParameter { ParameterName = "@databaseName", SqlValue = SqlDbType.VarChar, Value = DbName };
            var snapshotBackupName = new SqlParameter { ParameterName = "@snapshotBackupName", SqlValue = SqlDbType.VarChar, Value = ConfigurationManager.AppSettings["SnapshotBackupName"] };

            ExecuteStoredProcAgainstMaster(SpRestoreSnapShotName, new[] { databaseName, snapshotBackupName });
        }

        private static void ExecuteStoredProcAgainstMaster(string storedProc, SqlParameter[] parameters)
        {
            using (var conn = new SqlConnection(MasterDbConnectionString))
            {
                conn.Open();
                var cmd = new SqlCommand(storedProc, conn) { CommandType = CommandType.StoredProcedure };
                cmd.Parameters.AddRange(parameters);
                cmd.ExecuteNonQuery();
                conn.Close();
            }
        }
    }
}
```

The `DatabaseSnapshot` class exposes 4 methods:

<dl><dt>SetupStoredProcedures</dt><dd>This method creates 3 stored procedures on the master database: <code>SnapshotBackup_Create</code>, <code>SnapshotBackup_Restore</code> and <code>SnapshotBackup_Delete</code>. These procs do pretty much what their names suggest and the other 3 methods call these stored procedures when creating, restoring and deleting snapshot backups respectively. You can see the (fairly minimal) SQL for these stored procs at the top of the<code>DatabaseSnapshot</code> class.</dd><dt>CreateSnapShot</dt><dd>This method creates a snapshot backup of the database at this point in time.</dd><dt>RestoreSnapShot</dt><dd>This method restores the database back to state it was in when the snapshot backup was created.</dd><dt>DeleteSnapShot</dt><dd>This method attempts to delete the existing snapshot backup.</dd></dl>

In order that we can use the `DatabaseSnapshot` class we need to add the following entries to our `app.config`:

```xml
<configuration>

    <connectionStrings>

        <add name="SnapshotBackup"
             connectionString="data source=.;initial catalog=AdventureWorksLT2008R2;Trusted_Connection=true;Connection Timeout=200" />

    </connectionStrings>

    <appSettings>
        <add key="DatabaseLogicalName" value="AdventureWorksLT2008_Data" />
        <add key="SnapshotBackupPath" value="C:\DbSnapshots\" />
        <add key="SnapshotBackupName" value="AdventureWorksLT2008R2_Snapshot" />
    </appSettings>
</configuration>
```

These settings allow have the following purposes:

<dl><dt>SnapshotBackup</dt><dd>A connection string that allows <code>DatabaseSnapshot</code> to connect to the database.</dd><dt>DatabaseLogicalName</dt><dd>The logical name of the database you want to backup. (This can be found on the Files tab of the Database Properties in SSMS)</dd><dt>SnapshotBackupPath</dt><dd>The location where the snapshot backup is to be stored. You need to make sure that this exists on your machine.</dd><dt>SnapshotBackupName</dt><dd>The name of the snapshot backup that will be created.</dd></dl>

Now to make use of `DatabaseSnapshot`. Let's add a new class called `SetUpTearDown`:

```cs
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace AdventureWorks.Repositories.IntegrationTests
{
    [TestClass]
    public static class SetUpTearDown
    {
        [AssemblyInitialize]
        public static void TestRunInitialize(TestContext context)
        {
            try
            {
                // Try to delete the snapshot in case it was left over from aborted test runs
                DatabaseSnapshot.DeleteSnapShot();
            }
            catch { /* this should fail with snapshot does not exist */ }

            DatabaseSnapshot.SetupStoredProcedures();
            DatabaseSnapshot.CreateSnapShot();
        }


        [AssemblyCleanup]
        public static void TestRunCleanup()
        {
            DatabaseSnapshot.DeleteSnapShot();
        }
    }
}
```

At the start of the test run this will create a snapshot in case one doesn't exist already. And at the end of the test run it will be a good citizen and delete the snapshot. We'll also add an extra method to our `BuildVersionTests` class:

```cs
namespace AdventureWorks.Repositories.IntegrationTests
{
    [TestClass]
    public class BuildVersionTests
    {
        // ...

        [TestCleanup]
        public void TestCleanup()
        {
            DatabaseSnapshot.RestoreSnapShot();
        }
    }
}
```

This will ensure that after each test runs the database will be restored back to the snapshot created in `SetUpTearDown`. Now if you re-run your tests, in between each test the restore back to the snapshot is taking place.

## Prove it!

Of course the tests we have in place at present don't actually change the data at all. So I could be lying. I'm not. Let's prove it by adding one more class called `CustomerTests`:

```cs
using System;
using System.Linq;
using System.Linq.Expressions;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using AdventureWorks.EntityFramework;

namespace AdventureWorks.Repositories.IntegrationTests
{
    [TestClass]
    public class CustomerTests
    {
        [TestMethod]
        public void Should_change_a_customers_first_and_last_name()
        {
            // Arrange
            var uow = new SqlUnitOfWork();

            // Act
            var customer = uow.Customers.FindWhere(x => x.FirstName == "Jay" && x.LastName == "Adams").First();
            var customerId = customer.CustomerID;
            customer.FirstName = "John";
            customer.LastName = "Reilly";
            uow.Commit();

            // Assert
            Assert.IsNotNull(uow.Customers.FindWhere(x => x.FirstName == "John" && x.LastName == "Reilly" && x.CustomerID == customerId).SingleOrDefault());
        }

        [TestCleanup]
        public void TestCleanup()
        {
            DatabaseSnapshot.RestoreSnapShot();
        }
    }
}
```

The above test checks that you can look up an existing customer, Mr Jay Adams, and change his name to my name - to John Reilly. If I execute the test above and there was no restore in place then subsequently when I came to exercise this test it should start to fail as it no longer has a Mr Jay Adams to lookup. But with this restore mechanism in place I can execute this test repeatedly without worrying.

## Rounding off

And that's us finished - we now have a database snapshot restore mechanism in place. With this we can develop integration tests that thoroughly change the data in our database secure in the knowledge that once the test is complete our database will be restored back to it's initial state.

Obviously there are other alternative approaches for integration testing available to that which I've laid out in this post. But I can imagine that this approach is very useful for applying to legacy applications that you might inherit and need to continue supporting. Also, this approach should fit in well with a continuous integration setup. It would be pretty straightforward to have database that existed purely for testing purposes against which all the integration tests could be set to run at the point of each check in.

Thanks to Marc Talary, Sandeep Deo and Tishul Vadher who all contributed to `DatabaseSnapshot`. Credit is also due to Google due to the hundreds of articles the team ended up reading on snapshot backups.
