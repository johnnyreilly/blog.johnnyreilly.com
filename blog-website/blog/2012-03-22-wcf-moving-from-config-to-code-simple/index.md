---
slug: wcf-moving-from-config-to-code-simple
title: 'WCF - moving from Config to Code, a simple WCF service harness (plus implementing your own Authorization)'
authors: johnnyreilly
tags: [auth]
hide_table_of_contents: false
description: 'John describes his approach to developing a Windows Service-hosted WCF service/client harness, including locking down WCF authorization.'
---

Last time I wrote about WCF I was getting up and running with [WCF Transport Windows authentication using NetTcpBinding in an Intranet environment](../2012-02-15-wcf-transport-windows-authentication/index.md). I ended up with a WCF service hosted in a Windows Service which did pretty much what the previous post name implies.

<!--truncate-->

Since writing that I've taken things on a bit further and I thought it worth recording my approach whilst it's still fresh in my mind. There's 3 things I want to go over:

1. I've moved away from the standard config driven WCF approach to a more "code-first" style
2. I've established a basic Windows Service hosted WCF service / client harness which is useful if you're trying to get up and running with a WCF service quickly
3. I've locked down the WCF authorization to a single Windows account through the use of my own [ServiceAuthorizationManager](http://msdn.microsoft.com/en-us/library/ms731774.aspx)

## Moving from Config to Code

So, originally I was doing what all the cool kids are doing and driving the configuration of my WCF service and all its clients through config files. And why not? I'm in good company.

Here's why not: it gets \***very**\* verbose \***very**\* quickly....

Okay - that's not the end of the world. My problem was that I had \~10 Windows Services and 3 Web applications that needed to call into my WCF Service. I didn't want to have to separately tweak 15 or so configs each time I wanted to make one standard change to WCF configuration settings. I wanted everything in one place.

Now there's newer (and probably hipper) ways of achieving this. [Here's one possibility I happened upon on StackOverflow that looks perfectly fine.](http://stackoverflow.com/a/2814286)

Well I didn't use a hip new approach - no I went Old School with my old friend the [appSettings file attribute](http://msdn.microsoft.com/en-us/library/ms228154.aspx). Remember that? It's just a simple way to have all your common appSettings configuration settings in a single file which can be linked to from as many other apps as you like. It's wonderful and I've been using it for a long time now. Unfortunately it's pretty basic in that it's only the appSettings section that can be shared out; no `&lt;system.serviceModel&gt;` or similar.

But that wasn't really a problem from my perspective. I realised that there were actually very few things that needed to be configurable for my WCF service. Really I wanted a basic WCF harness that could be initialised in code which implicitly set all the basic configuration with settings that worked (ie it was set up with defaults like maximum message size which were sufficiently sized). On top of that I would allow myself to configure just those things that I needed to through the use of my own custom WCF config settings in the shared appSettings.config file.

Once done I massively reduced the size of my configs from frankly gazillions of entries to just these appSettings.config entries which were shared across each of my WCF service clients and by my Windows Service harness:

```xml
<appSettings>
  <add key="WcfBaseAddressForClient" value="net.tcp://localhost:9700/"/>
  <add key="WcfWindowsSecurityApplied" value="true" />
  <add key="WcfCredentialsUserName" value="myUserName" />
  <add key="WcfCredentialsPassword" value="myPassword" />
  <add key="WcfCredentialsDomain" value="myDomain" />
  </appSettings>
```

And these config settings used only by my Windows Service harness:

```xml
<appSettings file="../Shared/AppSettings.config">
    <add key="WcfBaseAddressForService" value="net.tcp://localhost:9700/"/>
  </appSettings>
```

## Show me your harness

I ended up with a quite a nice basic "vanilla" framework that allowed me to quickly set up Windows Service hosted WCF services. The framework also provided me with a simple way to consume these WCF services with a minimum of code an configuration. No muss. No fuss. :-) So pleased with it was I that I thought I'd go through it here much in the manner of a chef baking a cake...

To start with I created myself a Windows Service in Visual Studio which I grandly called "WcfWindowsService". The main service class looked like this:

```cs
public class WcfWindowsService: ServiceBase
  {
    public static string WindowsServiceName = "WCF Windows Service";
    public static string WindowsServiceDescription = "Windows service that hosts a WCF service.";

    private static readonly log4net.ILog _logger = log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);

    public List<ServiceHost> _serviceHosts = null;

    public WcfWindowsService()
    {
      ServiceName = WindowsServiceName;
    }

    public static void Main()
    {
      ServiceBase.Run(new WcfWindowsService());
    }

    /// <summary>
    /// The Windows Service is starting
    /// </summary>
    /// <param name="args"></param>
    protected override void OnStart(string[] args)
    {
      try
      {
        CloseAndClearServiceHosts();

        //Make log4net startup
        XmlConfigurator.Configure();
        _logger.Warn("WCF Windows Service starting...");
        _logger.Info("Global.WcfWindowsSecurityApplied = " + Global.WcfWindowsSecurityApplied.ToString().ToLower());

        if (Global.WcfWindowsSecurityApplied)
        {
          _logger.Info("Global.WcfOnlyAuthorizedForWcfCredentials = " + Global.WcfOnlyAuthorizedForWcfCredentials.ToString().ToLower());

          if (Global.WcfOnlyAuthorizedForWcfCredentials)
          {
            _logger.Info("Global.WcfCredentialsDomain = " + Global.WcfCredentialsDomain);
            _logger.Info("Global.WcfCredentialsUserName = " + Global.WcfCredentialsUserName);
          }
        }

        //Create binding
        var wcfBinding = WcfHelper.CreateBinding(Global.WcfWindowsSecurityApplied);

        // Create a servicehost and endpoints for each service and open each
        _serviceHosts = new List<ServiceHost>();
        _serviceHosts.Add(WcfServiceFactory<IHello>.CreateAndOpenServiceHost(typeof(HelloService), wcfBinding));
        _serviceHosts.Add(WcfServiceFactory<IGoodbye>.CreateAndOpenServiceHost(typeof(GoodbyeService), wcfBinding));

        _logger.Warn("WCF Windows Service started.");
      }
      catch (Exception exc)
      {
        _logger.Error("Problem starting up", exc);

        throw exc;
      }
    }

    /// <summary>
    /// The Windows Service is stopping
    /// </summary>
    protected override void OnStop()
    {
      CloseAndClearServiceHosts();

      _logger.Warn("WCF Windows Service stopped");
    }

    /// <summary>
    /// Close and clear service hosts in list and clear it down
    /// </summary>
    private void CloseAndClearServiceHosts()
    {
      if (_serviceHosts != null)
      {
        foreach (var serviceHost in _serviceHosts)
        {
          CloseAndClearServiceHost(serviceHost);
        }

        _serviceHosts.Clear();
      }
    }

    /// <summary>
    /// Close and clear the passed service host
    /// </summary>
    /// <param name="serviceHost"></param>
    private void CloseAndClearServiceHost(ServiceHost serviceHost)
    {
      if (serviceHost != null)
      {
        _logger.Info(string.Join(", ", serviceHost.BaseAddresses) + " is closing...");

        serviceHost.Close();

        _logger.Info(string.Join(", ", serviceHost.BaseAddresses) + " is closed");
      }
    }
  }
```

As you've no doubt noticed this makes use of [Log4Net](http://logging.apache.org/log4net/) for logging purposes (I'll assume you're aware of it). My Windows Service implements such fantastic WCF services as HelloService and GoodbyeService. Each revolutionary in their own little way. To give you a taste of the joie de vivre that these services exemplify take a look at this:

```cs
// Implement the IHello service contract in a service class.
  public class HelloService : WcfServiceAuthorizationManager, IHello
  {
    // Implement the IHello methods.
    public string GreetMe(string thePersonToGreet)
    {
      return "well hello there " + thePersonToGreet;
    }
  }
```

Exciting! WcfWindowsService also references another class called "Global" which is a helper class - to be honest not much more than a wrapper for my config settings. It looks like this:

```cs
static public class Global
  {
    #region Properties

    // eg "net.tcp://localhost:9700/"
    public static string WcfBaseAddressForService { get { return ConfigurationManager.AppSettings["WcfBaseAddressForService"]; } }

    // eg true
    public static bool WcfWindowsSecurityApplied { get { return bool.Parse(ConfigurationManager.AppSettings["WcfWindowsSecurityApplied"]); } }

    // eg true
    public static bool WcfOnlyAuthorizedForWcfCredentials { get { return bool.Parse(ConfigurationManager.AppSettings["WcfOnlyAuthorizedForWcfCredentials"]); } }

    // eg "myDomain"
    public static string WcfCredentialsDomain { get { return ConfigurationManager.AppSettings["WcfCredentialsDomain"]; } }

    // eg "myUserName"
    public static string WcfCredentialsUserName { get { return ConfigurationManager.AppSettings["WcfCredentialsUserName"]; } }

    // eg "myPassword" - this should *never* be stored unencrypted and is only ever used by clients that are not already running with the approved Windows credentials
    public static string WcfCredentialsPassword { get { return ConfigurationManager.AppSettings["WcfCredentialsPassword"]; } }

    #endregion
  }
```

WcfWindowsService creates and hosts a HelloService and a GoodbyeService when it starts up. It does this using my handy WcfServiceFactory:

```cs
public class WcfServiceFactory<TInterface>
  {
    private static readonly log4net.ILog _logger = log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);

    public static ServiceHost CreateAndOpenServiceHost(Type serviceType, NetTcpBinding wcfBinding)
    {
      var serviceHost = new ServiceHost(serviceType, new Uri(Global.WcfBaseAddressForService + ServiceHelper<TInterface>.GetServiceName()));
      serviceHost.AddServiceEndpoint(typeof(TInterface), wcfBinding, "");
      serviceHost.Authorization.ServiceAuthorizationManager = new WcfServiceAuthorizationManager(); // This allows us to control authorisation within WcfServiceAuthorizationManager
      serviceHost.Open();

      _logger.Info(string.Join(", ", serviceHost.BaseAddresses) + " is now listening.");

      return serviceHost;
    }
  }
```

To do this it also uses my equally handy WcfHelper class:

```cs
static public class WcfHelper
  {
    /// <summary>
    /// Create a NetTcpBinding
    /// </summary>
    /// <param name="useWindowsSecurity"></param>
    /// <returns></returns>
    public static NetTcpBinding CreateBinding(bool useWindowsSecurity)
    {
      var wcfBinding = new NetTcpBinding();
      if (useWindowsSecurity)
      {
        wcfBinding.Security.Mode = SecurityMode.Transport;
        wcfBinding.Security.Transport.ClientCredentialType = TcpClientCredentialType.Windows;
      }
      else
        wcfBinding.Security.Mode = SecurityMode.None;

      wcfBinding.MaxBufferSize = int.MaxValue;
      wcfBinding.MaxReceivedMessageSize = int.MaxValue;
      wcfBinding.ReaderQuotas.MaxArrayLength = int.MaxValue;
      wcfBinding.ReaderQuotas.MaxDepth = int.MaxValue;
      wcfBinding.ReaderQuotas.MaxStringContentLength = int.MaxValue;
      wcfBinding.ReaderQuotas.MaxBytesPerRead = int.MaxValue;

      return wcfBinding;
    }
  }

  /// <summary>
  /// Create a WCF Client for use anywhere (be it Windows Service or ASP.Net web application)
  /// nb Credential fields are optional and only likely to be needed by web applications
  /// </summary>
  /// <typeparam name="TInterface"></typeparam>
  public class WcfClientFactory<TInterface>
  {
    public static TInterface CreateChannel(bool useWindowsSecurity, string wcfBaseAddress, string wcfCredentialsUserName = null, string wcfCredentialsPassword = null, string wcfCredentialsDomain = null)
    {
      //Create NetTcpBinding using universally
      var wcfBinding = WcfHelper.CreateBinding(useWindowsSecurity);

      //Get Service name from examining the ServiceNameAttribute decorating the interface
      var serviceName = ServiceHelper<TInterface>.GetServiceName();

      //Create the factory for creating your channel
      var factory = new ChannelFactory<TInterface>(
        wcfBinding,
        new EndpointAddress(wcfBaseAddress + serviceName)
        );

      //if credentials have been supplied then use them
      if (!string.IsNullOrEmpty(wcfCredentialsUserName))
      {
        factory.Credentials.Windows.ClientCredential = new System.Net.NetworkCredential(wcfCredentialsUserName, wcfCredentialsPassword, wcfCredentialsDomain);
      }

      //Create the channel
      var channel = factory.CreateChannel();

      return channel;
    }
  }
```

Now the above WcfHelper class and it's comrade-in-arms the WcfClientFactory don't live in the WcfWindowsService project with the other classes. No. They live in a separate project called the WcfWindowsServiceContracts project with their old mucker the ServiceHelper:

```cs
public class ServiceHelper<T>
  {
    public static string GetServiceName()
    {
      var customAttributes = typeof(T).GetCustomAttributes(false);
      if (customAttributes.Length > 0)
      {
        foreach (var customAttribute in customAttributes)
        {
          if (customAttribute is ServiceNameAttribute)
          {
            return ((ServiceNameAttribute)customAttribute).ServiceName;
          }
        }
      }

      throw new ArgumentException("Interface is missing ServiceNameAttribute");
    }
  }

  [AttributeUsage(AttributeTargets.Interface, AllowMultiple = false)]
  public class ServiceNameAttribute : System.Attribute
  {
    public ServiceNameAttribute(string serviceName)
    {
      this.ServiceName = serviceName;
    }

    public string ServiceName { get; set; }
  }
```

Now can you guess what the WcfWindowsServiceContracts project might contain? Yes; contracts for your services (oh the excitement)! What might one of these contracts look like I hear you ask... Well, like this:

```cs
[ServiceContract()]
  [ServiceName("HelloService")]
  public interface IHello
  {
    [OperationContract]
    string GreetMe(string thePersonToGreet);
  }
```

The WcfWindowsServiceContracts project is included in \***any**\* WCF client solution that wants to call your WCF services. It is also included in the WCF service solution. It facilitates the calling of services. What you're no doubt wondering is how this might be achieved. Well here's how, it uses our old friend the `WcfClientFactory`:

```cs
var helloClient = WcfClientFactory<IHello>
    .CreateChannel(
      useWindowsSecurity:     Global.WcfWindowsSecurityApplied,  // eg true
      wcfBaseAddress:         Global.WcfBaseAddressForClient,    // eg "net.tcp://localhost:9700/"
      wcfCredentialsUserName: Global.WcfCredentialsUserName,     // eg "myUserName" - Optional parameter - only passed by web applications that need to impersonate the valid user
      wcfCredentialsPassword: Global.WcfCredentialsPassword,     // eg "myPassword" - Optional parameter - only passed by web applications that need to impersonate the valid user
      wcfCredentialsDomain:   Global.WcfCredentialsDomain        // eg "myDomain" - Optional parameter - only passed by web applications that need to impersonate the valid user
    );
  var greeting = helloClient.GreetMe("John"); //"well hello there John"
```

See? Simple as simple. The eagle eyed amongst you will have noticed that client example above is using "`Global`" which is essentially a copy of the `Global` class mentioned above that is part of the WcfWindowsService project.

## Locking down Authorization to a single Windows account

I can tell you think i've forgotten something. "Tell me about this locking down to the single Windows account / what is this mysterious `WcfServiceAuthorizationManager` class that all your WCF services inherit from? Don't you fob me off now.... etc"

Well ensuring that only a single Windows account is authorised (yes dammit the original English spelling) to access our WCF services is achieved by implementing our own `ServiceAuthorizationManager` class. This implementation is used for authorisation by your `ServiceHost` and the logic sits in the overridden `CheckAccessCore` method. All of our WCF service classes will inherit from our `ServiceAuthorizationManager` class and so trigger the `CheckAccessCore` authorisation each time they are called.

As you can see from the code below, depending on our configuration, we lock down access to all our WCF services to a specific Windows account. This is far from the only approach that you might want to take to authorisation; it's simply the one that we've been using. However the power of being able to implement your own authorisation in the `CheckAccessCore` method allows you the flexibility to do pretty much anything you want:

```cs
public class WcfServiceAuthorizationManager : ServiceAuthorizationManager
  {
    protected static readonly log4net.ILog _logger = log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);

    protected override bool CheckAccessCore(OperationContext operationContext)
    {
      if (Global.WcfWindowsSecurityApplied)
      {
        if ((operationContext.ServiceSecurityContext.IsAnonymous) ||
          (operationContext.ServiceSecurityContext.PrimaryIdentity == null))
        {
          _logger.Error("WcfWindowsSecurityApplied = true but no credentials have been supplied");
          return false;
        }

        if (Global.WcfOnlyAuthorizedForWcfCredentials)
        {
          if (operationContext.ServiceSecurityContext.PrimaryIdentity.Name.ToLower() == Global.WcfCredentialsDomain.ToLower() + "\\" + Global.WcfCredentialsUserName.ToLower())
          {
            _logger.Debug("WcfOnlyAuthorizedForWcfCredentials = true and the valid user (" + operationContext.ServiceSecurityContext.PrimaryIdentity.Name + ") has been supplied and access allowed");
            return true;
          }
          else
          {
            _logger.Error("WcfOnlyAuthorizedForWcfCredentials = true and an invalid user (" + operationContext.ServiceSecurityContext.PrimaryIdentity.Name + ") has been supplied and access denied");
            return false;
          }
        }
        else
        {
          _logger.Debug("WcfOnlyAuthorizedForWcfCredentials = false, credentials were supplied (" + operationContext.ServiceSecurityContext.PrimaryIdentity.Name + ") so access allowed");
          return true;
        }
      }
      else
      {
        _logger.Info("WcfWindowsSecurityApplied = false so we are allowing unfettered access");
        return true;
      }
    }
  }
```

Phewwww... I know this has ended up as a bit of a brain dump but hopefully people will find it useful. At some point I'll try to put up the above solution on GitHub so people can grab it easily for themselves.
