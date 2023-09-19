---
slug: google-analytics-api-and-aspnet-core
title: 'Google Analytics API and ASP.Net Core'
authors: johnnyreilly
tags: [asp.net]
hide_table_of_contents: false
description: 'Accessing Google Analytics API from ASP.Net Core can be tough due to lack of examples. This article provides an example code to get page access stats.'
---

I recently had need to be able to access the API for Google Analytics from ASP.Net Core. Getting this up and running turned out to be surprisingly tough because of an absence of good examples. So here it is; an example of how you can access a simple page access stat using [the API](https://www.nuget.org/packages/Google.Apis.AnalyticsReporting.v4/):

<!--truncate-->

```cs
async Task<SomeKindOfDataStructure[]> GetUsageFromGoogleAnalytics(DateTime startAtThisDate, DateTime endAtThisDate)
{
    // Create the DateRange object. Here we want data from last week.
    var dateRange = new DateRange
    {
        StartDate = startAtThisDate.ToString("yyyy-MM-dd"),
        EndDate = endAtThisDate.ToString("yyyy-MM-dd")
    };
    // Create the Metrics and dimensions object.
    // var metrics = new List<Metric> { new Metric { Expression = "ga:sessions", Alias = "Sessions" } };
    // var dimensions = new List<Dimension> { new Dimension { Name = "ga:pageTitle" } };
    var metrics = new List<Metric> { new Metric { Expression = "ga:uniquePageviews" } };
    var dimensions = new List<Dimension> {
        new Dimension { Name = "ga:date" },
        new Dimension { Name = "ga:dimension1" }
    };

    // Get required View Id from configuration
    var viewId = $"ga:{"[VIEWID]"}";

    // Create the Request object.
    var reportRequest = new ReportRequest
    {
        DateRanges = new List<DateRange> { dateRange },
        Metrics = metrics,
        Dimensions = dimensions,
        FiltersExpression = "ga:pagePath==/index.html",
        ViewId = viewId
    };

    var getReportsRequest = new GetReportsRequest {
        ReportRequests = new List<ReportRequest> { reportRequest }
    };

    //Invoke Google Analytics API call and get report
    var analyticsService = GetAnalyticsReportingServiceInstance();
    var response = await (analyticsService.Reports.BatchGet(getReportsRequest)).ExecuteAsync();

    var logins = response.Reports[0].Data.Rows.Select(row => new SomeKindOfDataStructure {
        Date = new DateTime(
            year: Convert.ToInt32(row.Dimensions[0].Substring(0, 4)),
            month: Convert.ToInt32(row.Dimensions[0].Substring(4, 2)),
            day: Convert.ToInt32(row.Dimensions[0].Substring(6, 2))),
        NumberOfLogins = Convert.ToInt32(row.Metrics[0].Values[0])
    })
    .OrderByDescending(login => login.Date)
    .ToArray();

    return logins;
}

/// <summary>
/// Intializes and returns Analytics Reporting Service Instance
/// </summary>
AnalyticsReportingService GetAnalyticsReportingServiceInstance() {
    var googleAuthFlow = new GoogleAuthorizationCodeFlow(new GoogleAuthorizationCodeFlow.Initializer {
        ClientSecrets = new ClientSecrets {
            ClientId = "[CLIENTID]",
            ClientSecret = "[CLIENTSECRET]"
        }
    });

    var responseToken = new TokenResponse {
        AccessToken = "[ANALYTICSTOKEN]",
        RefreshToken = "[REFRESHTOKEN]",
        Scope = AnalyticsReportingService.Scope.AnalyticsReadonly, //Read-only access to Google Analytics,
        TokenType = "Bearer",
    };

    var credential = new UserCredential(googleAuthFlow, "", responseToken);

    // Create the  Analytics service.
    return new AnalyticsReportingService(new BaseClientService.Initializer {
        HttpClientInitializer = credential,
        ApplicationName = "my-super-applicatio",
    });
}
```

You can see above that you need various credentials to be able to use the API. You can acquire these by logging into GA. Enjoy!
