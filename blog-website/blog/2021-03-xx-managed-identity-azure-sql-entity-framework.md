---
title: "Managed Identity, Azure SQL and Entity Framework"
author: John Reilly
author_url: https://github.com/johnnyreilly
author_image_url: https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4
tags: []
hide_table_of_contents: false
---
Everyone is deploying to the cloud. Few are the organisations that view deployment to data centers they manage as the future. This is generally a good thing, however in the excitement of the new, it's possible to forget some of the good properties that "on premise" deployment afforded.

I speak of course, of our old friend `Integrated Security=true`. When you seek to connect a web application to a database, you'll typically use some kind of database connection string. And back in the day, it may have looked something like this:

```
Data Source=myServer;Initial Catalog=myDB;Integrated Security=true;
```

The above provides a database server, a database and also `Integrated Security=true`. When you see `Integrated Security=true`, what you're essentially looking at is an instruction to use the identity that an application is running under (typically called a "service account") as the authentication credential to secure access to the database. Under the covers, this amounts to [Windows Authentication](https://docs.microsoft.com/en-us/dotnet/framework/data/adonet/sql/authentication-in-sql-server).

The significant thing about this approach is that it is more secure than using usernames and passwords in the connection string instead. If you have to use username and password to authenticate, then you need to persist that somewhere - so you need to make sure that's secure. Also, if someone manages to acquire that username and password somehow, they're free to do malicious things with it.

Bottom line: the less you are sharing authentication credentials, the better your security. Integrated Security is a harder nut to crack than username and password.

However,

On premise service account
SQL server cloud
Connection string
Username and password - risky
Access token
Microsoft.data.sql
Entity Framework core 5
Principal I'd
Screenshot in Azure

