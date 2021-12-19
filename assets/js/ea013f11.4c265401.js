"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[10287],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<r;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},24007:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return p},toc:function(){return c},default:function(){return m}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),s=["components"],i={title:"Integration Testing with Entity Framework and Snapshot Backups",authors:"johnnyreilly",tags:["Database Snapshot Backups","Integration Testing","SQL Server"],hide_table_of_contents:!1},l=void 0,u={permalink:"/2014/01/24/integration-testing-with-entity",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2014-01-24-integration-testing-with-entity/index.md",source:"@site/blog/2014-01-24-integration-testing-with-entity/index.md",title:"Integration Testing with Entity Framework and Snapshot Backups",description:"I've written before about how unit testing Entity Framework is a contentious and sometimes pointless activity. The TL;DR is that LINQ-to-Objects != Linq-to-Entities and so if you want some useful tests around your data tier then integration tests that actually hit a database are what you want.",date:"2014-01-24T00:00:00.000Z",formattedDate:"January 24, 2014",tags:[{label:"Database Snapshot Backups",permalink:"/tags/database-snapshot-backups"},{label:"Integration Testing",permalink:"/tags/integration-testing"},{label:"SQL Server",permalink:"/tags/sql-server"}],readingTime:14.395,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],prevItem:{title:"WPF and Mystic Meg or Playing Futurologist",permalink:"/2014/02/12/wpf-and-mystic-meg-or-playing"},nextItem:{title:"Upgrading to TypeScript 0.9.5 - A Personal Memoir",permalink:"/2014/01/09/upgrading-to-typescript-095-personal"}},p={authorsImageUrls:[void 0]},c=[{value:"Our Mission",id:"our-mission",children:[],level:2},{value:"We need a database",id:"we-need-a-database",children:[],level:2},{value:"Assemble me your finest DbContext",id:"assemble-me-your-finest-dbcontext",children:[],level:2},{value:"Let There be Repositories!",id:"let-there-be-repositories",children:[],level:2},{value:"And Now Let&#39;s Start Integration Testing!",id:"and-now-lets-start-integration-testing",children:[],level:2},{value:"Database Snapshotting Time",id:"database-snapshotting-time",children:[],level:2},{value:"Prove it!",id:"prove-it",children:[],level:2},{value:"Rounding off",id:"rounding-off",children:[],level:2}],d={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"I've written before about how unit testing ",(0,r.kt)("a",{parentName:"p",href:"http://icanmakethiswork.blogspot.co.uk/2012/10/unit-testing-and-entity-framework-filth.html"},"Entity Framework is a contentious and sometimes pointless activity"),". The TL;DR is that LINQ-to-Objects != Linq-to-Entities and so if you want some useful tests around your data tier then integration tests that actually hit a database are what you want."),(0,r.kt)("p",null,"However hitting an actual database is has serious implications. For a start you need a database server and you need a database. But the real issue lies around cleanup. When you write a test that amends data in the database you need the test to clean up after itself. If it doesn't then the next test that runs may trip over the amended data and that's your test pack instantly useless."),(0,r.kt)("p",null,"What you want is a way to wipe the slate clean - to return the database back to the state that it was in before your test ran. Kind of like a database restore - except that would be slow. And this is where ",(0,r.kt)("a",{parentName:"p",href:"http://technet.microsoft.com/en-us/library/ms189548(v=sql.105).aspx"},"SQL Server's snapshot backups")," have got your back. To quote MSDN:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"*","Snapshot backups have the following primary benefits:"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"A backup can be created quickly, typically measured in seconds, with little or no effect on the server."),(0,r.kt)("li",{parentName:"ul"},"A restore operation can be accomplished from a disk backup just as quickly."),(0,r.kt)("li",{parentName:"ul"},"Backup to tape can be accomplished by another host without an effect on the production system."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"A copy of a production database can be created instantly for reporting or testing."))),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"}))),(0,r.kt)("p",null,"Just the ticket."),(0,r.kt)("h2",{id:"our-mission"},"Our Mission"),(0,r.kt)("p",null,"In this post I want to go through the process of taking an existing database, pointing Entity Framework at it, setting up some repositories and then creating an integration test pack that uses snapshot backups to cleanup after each test runs. The code detailed in this post is available in this ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/johnnyreilly/SnapshotBackupsIntegrationTesting"},"GitHub repo")," if you want to have a go yourself."),(0,r.kt)("h2",{id:"we-need-a-database"},"We need a database"),(0,r.kt)("p",null,"You can find a whole assortment of databases ",(0,r.kt)("a",{parentName:"p",href:"https://msftdbprodsamples.codeplex.com/releases"},"here"),". I'm going to use ",(0,r.kt)("a",{parentName:"p",href:"https://msftdbprodsamples.codeplex.com/wikipage?title=AWLTDocs"},"AdventureWorksLT")," as it's small and simple. So I'll download ",(0,r.kt)("a",{parentName:"p",href:"https://msftdbprodsamples.codeplex.com/downloads/get/478217"},"this")," and unzip it. I'll drop ",(0,r.kt)("inlineCode",{parentName:"p"},"AdventureWorksLT2008R2_Data/index.mdf")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"AdventureWorksLT2008R2_log.LDF")," in my data folder and attach AdventureWorksLT2008R2 to my database server. And now I have a database:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://1.bp.blogspot.com/-Nke8F6wYI4A/UuEeJ6C0XqI/AAAAAAAAAgg/tbuhu2TuOpg/s320/Database2.png",alt:null})),(0,r.kt)("h2",{id:"assemble-me-your-finest-dbcontext"},"Assemble me your finest DbContext"),(0,r.kt)("p",null,"Or in English: we want to point Entity Framework at our new shiny database. So let's fire up Visual Studio (I'm using 2013) and create a new solution called \"AdventureWorks\"."),(0,r.kt)("p",null,'To our solution let\'s add a new class library project called "AdventureWorks.EntityFramework". And to that we\'ll add an ADO.NET Entity Data Model which we\'ll call "AdventureWorks.edmx". When the wizard fires up we\'ll use the "Generate from database" option, click Next and select "New Connection". In the dialog we\'ll select our newly attached AdventureWorksLT2008R2 database. We\'ll leave the "save entity connection settings in App.Config" option selected and click Next. I\'m going to use Entity Framework 6.0 - though I think that any version would do. I\'m going to pull in all tables / store procs and views. And now Entity Framework is pointing at my database:'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://3.bp.blogspot.com/-Sv_GPsqilao/UuElIcLCYaI/AAAAAAAAAgw/7ui-xpml8dk/s400/EDMX.png",alt:null})),(0,r.kt)("h2",{id:"let-there-be-repositories"},"Let There be Repositories!"),(0,r.kt)("p",null,"In the name of testability let's create a new project to house repositories called \"AdventureWorks.Repositories\". I'm going to use ",(0,r.kt)("a",{parentName:"p",href:"http://odetocode.com/about/scott-allen"},"K. Scott Allen"),"'s fine ",(0,r.kt)("a",{parentName:"p",href:"http://msdn.microsoft.com/en-us/library/ff714955.aspx"},"article on MSDN")," to create a very basic set of repositories wrapped in a unit of work."),(0,r.kt)("p",null,"In my new project I'll add a reference to the ",(0,r.kt)("inlineCode",{parentName:"p"},"AdventureWorks.EntityFramework")," project and create a new ",(0,r.kt)("inlineCode",{parentName:"p"},"IRepository")," interface that looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"using System;\nusing System.Linq;\nusing System.Linq.Expressions;\n\nnamespace AdventureWorks.Repositories\n{\n    public interface IRepository<T> where T : class\n    {\n        IQueryable<T> FindAll();\n        IQueryable<T> FindWhere(Expression<Func<T, bool>> predicate);\n        T Add(T newEntity);\n        T Remove(T entity);\n    }\n}\n")),(0,r.kt)("p",null,"And a new ",(0,r.kt)("inlineCode",{parentName:"p"},"IUnitOfWork")," interface that looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"using AdventureWorks.EntityFramework;\n\nnamespace AdventureWorks.Repositories\n{\n    public interface IUnitOfWork\n    {\n        public IRepository<ErrorLog> ErrorLogs { get; }\n        public IRepository<Address> Addresses { get; }\n        public IRepository<Customer> Customers { get; }\n        public IRepository<CustomerAddress> CustomerAddresses { get; }\n        public IRepository<Product> Products { get; }\n        public IRepository<ProductCategory> ProductCategories { get; }\n        public IRepository<ProductDescription> ProductDescriptions { get; }\n        public IRepository<ProductModel> ProductModels { get; }\n        public IRepository<ProductModelProductDescription> ProductModelProductDescriptions { get; }\n        public IRepository<SalesOrderDetail> SalesOrderDetails { get; }\n        public IRepository<SalesOrderHeader> SalesOrderHeaders { get; }\n        public IRepository<BuildVersion> BuildVersions { get; }\n\n        void Commit();\n    }\n}\n")),(0,r.kt)("p",null,"Now for the implementation of ",(0,r.kt)("inlineCode",{parentName:"p"},"IRepository"),". For this we'll need a reference to Entity Framework in our project. Then we'll create a class called ",(0,r.kt)("inlineCode",{parentName:"p"},"SqlRepository"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"using System;\nusing System.Data.Entity;\nusing System.Linq;\nusing System.Linq.Expressions;\n\nnamespace AdventureWorks.Repositories\n{\n    public class SqlRepository<T> : IRepository<T> where T : class\n    {\n        public SqlRepository(DbContext context)\n        {\n            _dbSet = context.Set<T>();\n        }\n\n        public IQueryable<T> FindAll()\n        {\n            return _dbSet;\n        }\n\n        public IQueryable<T> FindWhere(Expression<Func<T, bool>> predicate)\n        {\n            return _dbSet.Where(predicate);\n        }\n\n        public T Add(T newEntity)\n        {\n            return _dbSet.Add(newEntity);\n        }\n\n        public T Remove(T entity)\n        {\n            return _dbSet.Remove(entity);\n        }\n\n        protected DbSet<T> _dbSet;\n    }\n}\n")),(0,r.kt)("p",null,"And we also need the implementation of ",(0,r.kt)("inlineCode",{parentName:"p"},"IUnitOfWork"),". So we'll create a class called ",(0,r.kt)("inlineCode",{parentName:"p"},"SqlUnitOfWork"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"using System;\nusing System.Linq;\nusing System.Data.Entity;\nusing AdventureWorks.EntityFramework;\n\nnamespace AdventureWorks.Repositories\n{\n    public class SqlUnitOfWork : IUnitOfWork\n    {\n        public SqlUnitOfWork()\n        {\n            _context = new AdventureWorksLT2008R2Entities();\n        }\n\n        public IRepository<ErrorLog> ErrorLogs\n        {\n            get\n            {\n                if (_errorLogs == null) _errorLogs = new SqlRepository<ErrorLog>(_context);\n                return _errorLogs;\n            }\n        }\n\n        public IRepository<Address> Addresses\n        {\n            get\n            {\n                if (_addresses == null) _addresses = new SqlRepository<Address>(_context);\n                return _addresses;\n            }\n        }\n\n        public IRepository<Customer> Customers\n        {\n            get\n            {\n                if (_customers == null) _customers = new SqlRepository<Customer>(_context);\n                return _customers;\n            }\n        }\n\n        public IRepository<CustomerAddress> CustomerAddresses\n        {\n            get\n            {\n                if (_customerAddresses == null) _customerAddresses = new SqlRepository<CustomerAddress>(_context);\n                return _customerAddresses;\n            }\n        }\n\n        public IRepository<Product> Products\n        {\n            get\n            {\n                if (_products == null) _products = new SqlRepository<Product>(_context);\n                return _products;\n            }\n        }\n\n        public IRepository<ProductCategory> ProductCategories\n        {\n            get\n            {\n                if (_productCategories == null) _productCategories = new SqlRepository<ProductCategory>(_context);\n                return _productCategories;\n            }\n        }\n\n        public IRepository<ProductDescription> ProductDescriptions\n        {\n            get\n            {\n                if (_productDescriptions == null) _productDescriptions = new SqlRepository<ProductDescription>(_context);\n                return _productDescriptions;\n            }\n        }\n\n        public IRepository<ProductModel> ProductModels\n        {\n            get\n            {\n                if (_productModels == null) _productModels = new SqlRepository<ProductModel>(_context);\n                return _productModels;\n            }\n        }\n\n        public IRepository<ProductModelProductDescription> ProductModelProductDescriptions\n        {\n            get\n            {\n                if (_productModelProductDescriptions == null) _productModelProductDescriptions = new SqlRepository<ProductModelProductDescription>(_context);\n                return _productModelProductDescriptions;\n            }\n        }\n\n        public IRepository<SalesOrderDetail> SalesOrderDetails\n        {\n            get\n            {\n                if (_salesOrderDetails == null) _salesOrderDetails = new SqlRepository<SalesOrderDetail>(_context);\n                return _salesOrderDetails;\n            }\n        }\n\n        public IRepository<SalesOrderHeader> SalesOrderHeaders\n        {\n            get\n            {\n                if (_salesOrderHeaders == null) _salesOrderHeaders = new SqlRepository<SalesOrderHeader>(_context);\n                return _salesOrderHeaders;\n            }\n        }\n\n        public IRepository<BuildVersion> BuildVersions\n        {\n            get\n            {\n                if (_buildVersions == null) _buildVersions = new SqlRepository<BuildVersion>(_context);\n                return _buildVersions;\n            }\n        }\n\n        public void Commit()\n        {\n            _context.SaveChanges();\n        }\n\n        SqlRepository<ErrorLog> _errorLogs = null;\n        SqlRepository<Address> _addresses = null;\n        SqlRepository<Customer> _customers = null;\n        SqlRepository<CustomerAddress> _customerAddresses = null;\n        SqlRepository<Product> _products = null;\n        SqlRepository<ProductCategory> _productCategories = null;\n        SqlRepository<ProductDescription> _productDescriptions = null;\n        SqlRepository<ProductModel> _productModels = null;\n        SqlRepository<ProductModelProductDescription> _productModelProductDescriptions = null;\n        SqlRepository<SalesOrderDetail> _salesOrderDetails = null;\n        SqlRepository<SalesOrderHeader> _salesOrderHeaders = null;\n        SqlRepository<BuildVersion> _buildVersions = null;\n\n        readonly DbContext _context;\n    }\n}\n")),(0,r.kt)("h2",{id:"and-now-lets-start-integration-testing"},"And Now Let's Start Integration Testing!"),(0,r.kt)("p",null,'Let\'s create a new Unit Test project called "AdventureWorks.Repositories.IntegrationTests". (And just to be clear: this is ',"*","not","*"," a unit test project - it is an ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"integration"))," test project.) We'll add a reference back to our ",(0,r.kt)("inlineCode",{parentName:"p"},"AdventureWorks.Repositories")," project for the repositories and one back to ",(0,r.kt)("inlineCode",{parentName:"p"},"AdventureWorks.EntityFramework")," for our domain models. And finally you'll need a reference to Entity Framework in your IntegrationTest project as well as well."),(0,r.kt)("p",null,"We'll copy across the ",(0,r.kt)("inlineCode",{parentName:"p"},"app.config")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"AdventureWorks.EntityFramework")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"AdventureWorks.Repositories.IntegrationTests")," as it contains the database connection details. It'll look something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8"?>\n<configuration>\n    <configSections>\n        <section name="entityFramework" type="System.Data.Entity.Internal.ConfigFile.EntityFrameworkSection, EntityFramework, Version=6.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089" requirePermission="false" />\n        \x3c!-- For more information on Entity Framework configuration, visit http://go.microsoft.com/fwlink/?LinkID=237468 --\x3e\n    </configSections>\n    <connectionStrings>\n        <add name="AdventureWorksLT2008R2Entities"\n             connectionString="metadata=res://*/AdventureWorks.csdl|res://*/AdventureWorks.ssdl|res://*/AdventureWorks.msl;provider=System.Data.SqlClient;provider connection string=&quot;data source=.;initial catalog=AdventureWorksLT2008R2;integrated security=True;MultipleActiveResultSets=True;App=EntityFramework&quot;"\n             providerName="System.Data.EntityClient" />\n    </connectionStrings>\n    <entityFramework>\n        <defaultConnectionFactory type="System.Data.Entity.Infrastructure.SqlConnectionFactory, EntityFramework" />\n        <providers>\n            <provider invariantName="System.Data.SqlClient" type="System.Data.Entity.SqlServer.SqlProviderServices, EntityFramework.SqlServer" />\n        </providers>\n    </entityFramework>\n</configuration>\n')),(0,r.kt)("p",null,"Now we're ready for a test. We'll add ourselves a class called ",(0,r.kt)("inlineCode",{parentName:"p"},"BuildVersionTests"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'using System;\nusing System.Linq;\nusing System.Linq.Expressions;\nusing Microsoft.VisualStudio.TestTools.UnitTesting;\n\nnamespace AdventureWorks.Repositories.IntegrationTests\n{\n    [TestClass]\n    public class BuildVersionTests\n    {\n        [TestMethod]\n        public void BuildVersions_should_return_the_correct_version_information()\n        {\n            // Arrange\n            var uow = new SqlUnitOfWork();\n\n            // Act\n            var buildVersions = uow.BuildVersions.FindAll().ToList();\n\n            // Assert\n            Assert.AreEqual(1, buildVersions.Count);\n            Assert.AreEqual("10.00.80404.00", buildVersions[0].Database_Version);\n            Assert.AreEqual(new DateTime(2008, 4, 4), buildVersions[0].ModifiedDate);\n            Assert.AreEqual(1, buildVersions[0].SystemInformationID);\n            Assert.AreEqual(new DateTime(2008, 4, 4), buildVersions[0].VersionDate);\n        }\n    }\n}\n')),(0,r.kt)("p",null,"This is as simple as it gets - our test creates a new unit of work and queries the ",(0,r.kt)("inlineCode",{parentName:"p"},"BuildVersions")," table to see what we can see. All it's really doing is demonstrating that we can now hit our database through our repositories. As a side note, we could have the exact same test operating directly on the ",(0,r.kt)("inlineCode",{parentName:"p"},"DbContext")," like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'[TestMethod]\n        public void DbContext_BuildVersions_should_return_the_correct_version_information()\n        {\n            // Arrange\n            var dbContext = new AdventureWorks.EntityFramework.AdventureWorksLT2008R2Entities();\n\n            // Act\n            var buildVersions = dbContext.BuildVersions.ToList();\n\n            // Assert\n            Assert.AreEqual(1, buildVersions.Count);\n            Assert.AreEqual("10.00.80404.00", buildVersions[0].Database_Version);\n            Assert.AreEqual(new DateTime(2008, 4, 4), buildVersions[0].ModifiedDate);\n            Assert.AreEqual(1, buildVersions[0].SystemInformationID);\n            Assert.AreEqual(new DateTime(2008, 4, 4), buildVersions[0].VersionDate);\n        }\n')),(0,r.kt)("p",null,"For the most part we won't be doing this but I wanted to be clear that full power of Entity Framework is available to you as you're putting together your integration tests."),(0,r.kt)("h2",{id:"database-snapshotting-time"},"Database Snapshotting Time"),(0,r.kt)("p",null,"Up until this point we've essentially been laying our infrastructure and doing our plumbing. We now have a database, domain models and data access courtesy of Entity Framework, a testable repository layer and finally an integration test pack. What we want now is to get our database snapshot / backup and restore mechanism set up and integrated into the test pack."),(0,r.kt)("p",null,"Let's add references to the ",(0,r.kt)("inlineCode",{parentName:"p"},"System.Data")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"System.Configuration")," assemblies to our integration testing project and then add a new class called ",(0,r.kt)("inlineCode",{parentName:"p"},"DatabaseSnapshot"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'using System.Configuration;\nusing System.Data;\nusing System.Data.SqlClient;\n\nnamespace AdventureWorks.Repositories.IntegrationTests\n{\n    public static class DatabaseSnapshot\n    {\n        private const string SpCreateSnapShotName = "SnapshotBackup_Create";\n        private const string SpCreateSnapShot =\n@"CREATE PROCEDURE [dbo].[" + SpCreateSnapShotName + @"]\n    @databaseName        varchar(512),\n    @databaseLogicalName varchar(512),\n    @snapshotBackupPath  varchar(512),\n    @snapshotBackupName  varchar(512)\nAS\nBEGIN\n    SET NOCOUNT ON;\n\n    DECLARE @sql varchar(500)\n    SELECT @sql = \'CREATE DATABASE \' + @snapshotBackupName +\n                  \' ON (NAME=[\' + @databaseLogicalName +\n                  \'], FILENAME=\'\'\' + @snapshotBackupPath + @snapshotBackupName +\n                  \'\'\') AS SNAPSHOT OF [\' + @databaseName + \']\'\n    EXEC(@sql)\nEND";\n\n        private const string SpRestoreSnapShotName = "SnapshotBackup_Restore";\n        private const string SpRestoreSnapShot =\n@"CREATE PROCEDURE [dbo].[" + SpRestoreSnapShotName + @"]\n    @databaseName varchar(512),\n    @snapshotBackupName varchar(512)\nAS\nBEGIN\n    SET NOCOUNT ON;\n\n    DECLARE @sql varchar(500)\n    SET @sql  = \'ALTER DATABASE [\' + @databaseName + \'] SET SINGLE_USER WITH ROLLBACK IMMEDIATE\'\n    EXEC (@sql)\n\n    RESTORE DATABASE @databaseName\n    FROM DATABASE_SNAPSHOT = @snapshotBackupName\n\n    SET @sql = \'ALTER DATABASE [\' + @databaseName + \'] SET MULTI_USER\'\n    EXEC (@sql)\nEND";\n\n        private const string SpDeleteSnapShotName = "SnapshotBackup_Delete";\n        private const string SpDeleteSnapShot =\n@"CREATE PROCEDURE [dbo].[" + SpDeleteSnapShotName + @"]\n    @snapshotBackupName varchar(512)\nAS\nBEGIN\n    SET NOCOUNT ON;\n\n    DECLARE @sql varchar(500)\n\n    SELECT @sql = \'DROP DATABASE \' + @snapshotBackupName\n    EXEC(@sql)\nEND";\n\n        private static string _masterDbConnectionString;\n        private static string _dbName;\n        private static ConnectionStringSettings _dbConnectionStringSettings;\n\n        private static ConnectionStringSettings DbConnectionStringSettings\n        {\n            get\n            {\n                if (_dbConnectionStringSettings == null)\n                    _dbConnectionStringSettings = ConfigurationManager.ConnectionStrings["SnapshotBackup"];\n\n                return _dbConnectionStringSettings;\n            }\n        }\n\n        /// <summary>\n        /// Stored procedures should be executed against master database\n        /// </summary>\n        private static string MasterDbConnectionString\n        {\n            get\n            {\n                if (string.IsNullOrEmpty(_masterDbConnectionString))\n                {\n                    var sqlConnection = new SqlConnection(DbConnectionStringSettings.ConnectionString);\n                    _masterDbConnectionString = DbConnectionStringSettings.ConnectionString.Replace(sqlConnection.Database, "master");\n                }\n                return _masterDbConnectionString;\n            }\n        }\n\n        private static string DbName\n        {\n            get\n            {\n                if (string.IsNullOrEmpty(_dbName))\n                    _dbName = new SqlConnection(DbConnectionStringSettings.ConnectionString).Database.TrimStart(\'[\').TrimEnd(\']\');\n\n                return _dbName;\n            }\n        }\n\n        public static void SetupStoredProcedures()\n        {\n            using (var conn = new SqlConnection(MasterDbConnectionString))\n            {\n                conn.Open();\n\n                // Drop the existing stored procedures\n                SqlCommand cmd;\n                const string dropProcSql = "IF EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N\'[dbo].[{0}]\') AND type in (N\'P\', N\'PC\')) DROP PROCEDURE [dbo].[{0}]";\n                foreach (var spName in new[] { SpCreateSnapShotName, SpDeleteSnapShotName, SpRestoreSnapShotName })\n                {\n                    cmd = new SqlCommand(string.Format(dropProcSql, spName), conn);\n                    cmd.ExecuteNonQuery();\n                }\n\n                // Create the stored procedures anew\n                foreach (var createProcSql in new[] { SpCreateSnapShot, SpDeleteSnapShot, SpRestoreSnapShot })\n                {\n                    cmd = new SqlCommand(createProcSql, conn);\n                    cmd.ExecuteNonQuery();\n                }\n\n                conn.Close();\n            }\n        }\n\n        public static void CreateSnapShot()\n        {\n            var databaseName = new SqlParameter { ParameterName = "@databaseName", SqlValue = SqlDbType.VarChar, Value = DbName };\n            var databaseLogicalName = new SqlParameter { ParameterName = "@databaseLogicalName", SqlValue = SqlDbType.VarChar, Value = ConfigurationManager.AppSettings["DatabaseLogicalName"] };\n            var snapshotBackupPath = new SqlParameter { ParameterName = "@snapshotBackupPath", SqlValue = SqlDbType.VarChar, Value = ConfigurationManager.AppSettings["SnapshotBackupPath"] };\n            var snapshotBackupName = new SqlParameter { ParameterName = "@snapshotBackupName", SqlValue = SqlDbType.VarChar, Value = ConfigurationManager.AppSettings["SnapshotBackupName"] };\n\n            ExecuteStoredProcAgainstMaster(SpCreateSnapShotName, new[] { databaseName, databaseLogicalName, snapshotBackupPath, snapshotBackupName });\n        }\n\n        public static void DeleteSnapShot()\n        {\n            var snapshotBackupName = new SqlParameter { ParameterName = "@snapshotBackupName", SqlValue = SqlDbType.VarChar, Value = ConfigurationManager.AppSettings["SnapshotBackupName"] };\n\n            ExecuteStoredProcAgainstMaster(SpDeleteSnapShotName, new[] { snapshotBackupName });\n        }\n\n        public static void RestoreSnapShot()\n        {\n            var databaseName = new SqlParameter { ParameterName = "@databaseName", SqlValue = SqlDbType.VarChar, Value = DbName };\n            var snapshotBackupName = new SqlParameter { ParameterName = "@snapshotBackupName", SqlValue = SqlDbType.VarChar, Value = ConfigurationManager.AppSettings["SnapshotBackupName"] };\n\n            ExecuteStoredProcAgainstMaster(SpRestoreSnapShotName, new[] { databaseName, snapshotBackupName });\n        }\n\n        private static void ExecuteStoredProcAgainstMaster(string storedProc, SqlParameter[] parameters)\n        {\n            using (var conn = new SqlConnection(MasterDbConnectionString))\n            {\n                conn.Open();\n                var cmd = new SqlCommand(storedProc, conn) { CommandType = CommandType.StoredProcedure };\n                cmd.Parameters.AddRange(parameters);\n                cmd.ExecuteNonQuery();\n                conn.Close();\n            }\n        }\n    }\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"DatabaseSnapshot")," class exposes 4 methods:"),(0,r.kt)("dl",null,(0,r.kt)("dt",null,"SetupStoredProcedures"),(0,r.kt)("dd",null,"This method creates 3 stored procedures on the master database: ",(0,r.kt)("code",null,"SnapshotBackup_Create"),", ",(0,r.kt)("code",null,"SnapshotBackup_Restore")," and ",(0,r.kt)("code",null,"SnapshotBackup_Delete"),". These procs do pretty much what their names suggest and the other 3 methods call these stored procedures when creating, restoring and deleting snapshot backups respectively. You can see the (fairly minimal) SQL for these stored procs at the top of the",(0,r.kt)("code",null,"DatabaseSnapshot")," class."),(0,r.kt)("dt",null,"CreateSnapShot"),(0,r.kt)("dd",null,"This method creates a snapshot backup of the database at this point in time."),(0,r.kt)("dt",null,"RestoreSnapShot"),(0,r.kt)("dd",null,"This method restores the database back to state it was in when the snapshot backup was created."),(0,r.kt)("dt",null,"DeleteSnapShot"),(0,r.kt)("dd",null,"This method attempts to delete the existing snapshot backup.")),(0,r.kt)("p",null,"In order that we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"DatabaseSnapshot")," class we need to add the following entries to our ",(0,r.kt)("inlineCode",{parentName:"p"},"app.config"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<configuration>\n\n    <connectionStrings>\n\n        <add name="SnapshotBackup"\n             connectionString="data source=.;initial catalog=AdventureWorksLT2008R2;Trusted_Connection=true;Connection Timeout=200" />\n\n    </connectionStrings>\n\n    <appSettings>\n        <add key="DatabaseLogicalName" value="AdventureWorksLT2008_Data" />\n        <add key="SnapshotBackupPath" value="C:\\DbSnapshots\\" />\n        <add key="SnapshotBackupName" value="AdventureWorksLT2008R2_Snapshot" />\n    </appSettings>\n</configuration>\n')),(0,r.kt)("p",null,"These settings allow have the following purposes:"),(0,r.kt)("dl",null,(0,r.kt)("dt",null,"SnapshotBackup"),(0,r.kt)("dd",null,"A connection string that allows ",(0,r.kt)("code",null,"DatabaseSnapshot")," to connect to the database."),(0,r.kt)("dt",null,"DatabaseLogicalName"),(0,r.kt)("dd",null,"The logical name of the database you want to backup. (This can be found on the Files tab of the Database Properties in SSMS)"),(0,r.kt)("dt",null,"SnapshotBackupPath"),(0,r.kt)("dd",null,"The location where the snapshot backup is to be stored. You need to make sure that this exists on your machine."),(0,r.kt)("dt",null,"SnapshotBackupName"),(0,r.kt)("dd",null,"The name of the snapshot backup that will be created.")),(0,r.kt)("p",null,"Now to make use of ",(0,r.kt)("inlineCode",{parentName:"p"},"DatabaseSnapshot"),". Let's add a new class called ",(0,r.kt)("inlineCode",{parentName:"p"},"SetUpTearDown"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"using Microsoft.VisualStudio.TestTools.UnitTesting;\n\nnamespace AdventureWorks.Repositories.IntegrationTests\n{\n    [TestClass]\n    public static class SetUpTearDown\n    {\n        [AssemblyInitialize]\n        public static void TestRunInitialize(TestContext context)\n        {\n            try\n            {\n                // Try to delete the snapshot in case it was left over from aborted test runs\n                DatabaseSnapshot.DeleteSnapShot();\n            }\n            catch { /* this should fail with snapshot does not exist */ }\n\n            DatabaseSnapshot.SetupStoredProcedures();\n            DatabaseSnapshot.CreateSnapShot();\n        }\n\n\n        [AssemblyCleanup]\n        public static void TestRunCleanup()\n        {\n            DatabaseSnapshot.DeleteSnapShot();\n        }\n    }\n}\n")),(0,r.kt)("p",null,"At the start of the test run this will create a snapshot in case one doesn't exist already. And at the end of the test run it will be a good citizen and delete the snapshot. We'll also add an extra method to our ",(0,r.kt)("inlineCode",{parentName:"p"},"BuildVersionTests")," class:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"namespace AdventureWorks.Repositories.IntegrationTests\n{\n    [TestClass]\n    public class BuildVersionTests\n    {\n        // ...\n\n        [TestCleanup]\n        public void TestCleanup()\n        {\n            DatabaseSnapshot.RestoreSnapShot();\n        }\n    }\n}\n")),(0,r.kt)("p",null,"This will ensure that after each test runs the database will be restored back to the snapshot created in ",(0,r.kt)("inlineCode",{parentName:"p"},"SetUpTearDown"),". Now if you re-run your tests, in between each test the restore back to the snapshot is taking place."),(0,r.kt)("h2",{id:"prove-it"},"Prove it!"),(0,r.kt)("p",null,"Of course the tests we have in place at present don't actually change the data at all. So I could be lying. I'm not. Let's prove it by adding one more class called ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomerTests"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'using System;\nusing System.Linq;\nusing System.Linq.Expressions;\nusing Microsoft.VisualStudio.TestTools.UnitTesting;\nusing AdventureWorks.EntityFramework;\n\nnamespace AdventureWorks.Repositories.IntegrationTests\n{\n    [TestClass]\n    public class CustomerTests\n    {\n        [TestMethod]\n        public void Should_change_a_customers_first_and_last_name()\n        {\n            // Arrange\n            var uow = new SqlUnitOfWork();\n\n            // Act\n            var customer = uow.Customers.FindWhere(x => x.FirstName == "Jay" && x.LastName == "Adams").First();\n            var customerId = customer.CustomerID;\n            customer.FirstName = "John";\n            customer.LastName = "Reilly";\n            uow.Commit();\n\n            // Assert\n            Assert.IsNotNull(uow.Customers.FindWhere(x => x.FirstName == "John" && x.LastName == "Reilly" && x.CustomerID == customerId).SingleOrDefault());\n        }\n\n        [TestCleanup]\n        public void TestCleanup()\n        {\n            DatabaseSnapshot.RestoreSnapShot();\n        }\n    }\n}\n')),(0,r.kt)("p",null,"The above test checks that you can look up an existing customer, Mr Jay Adams, and change his name to my name - to John Reilly. If I execute the test above and there was no restore in place then subsequently when I came to exercise this test it should start to fail as it no longer has a Mr Jay Adams to lookup. But with this restore mechanism in place I can execute this test repeatedly without worrying."),(0,r.kt)("h2",{id:"rounding-off"},"Rounding off"),(0,r.kt)("p",null,"And that's us finished - we now have a database snapshot restore mechanism in place. With this we can develop integration tests that thoroughly change the data in our database secure in the knowledge that once the test is complete our database will be restored back to it's initial state."),(0,r.kt)("p",null,"Obviously there are other alternative approaches for integration testing available to that which I've laid out in this post. But I can imagine that this approach is very useful for applying to legacy applications that you might inherit and need to continue supporting. Also, this approach should fit in well with a continuous integration setup. It would be pretty straightforward to have database that existed purely for testing purposes against which all the integration tests could be set to run at the point of each check in."),(0,r.kt)("p",null,"Thanks to Marc Talary, Sandeep Deo and Tishul Vadher who all contributed to ",(0,r.kt)("inlineCode",{parentName:"p"},"DatabaseSnapshot"),". Credit is also due to Google due to the hundreds of articles the team ended up reading on snapshot backups."))}m.isMDXComponent=!0}}]);