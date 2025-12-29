---
slug: dotnet-openapi-and-openapi-ts
title: 'Full-stack static typing with OpenAPI TypeScript and Microsoft.AspNetCore.OpenApi'
authors: johnnyreilly
tags: [swagger, c#, azure, typescript]
image: ./use-generated-client.gif
hide_table_of_contents: false
description: 'This post will show you how to write full stack applications with static typing from back to front using OpenAPI, TypeScript and .NET.'
---

I've long believed in the benefits of static typing. Static typing helps you catch errors early, improves code navigation and makes refactoring easier. In recent years I've been using TypeScript on the front end and C# on the back end to get these benefits. I wrote previously about how to do this with [NSwag](../2021-03-06-generate-typescript-and-csharp-clients-with-nswag/index.md) and I thought it was probably worth returning to the topic. How would I do the same thing now?

<!--truncate-->

NSwag is still great, but it produces OpenAPI 3.0 specifications. However, Microsoft have been working on their own OpenAPI tooling for .NET. The [Microsoft.AspNetCore.OpenApi](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/openapi/overview?view=aspnetcore-10.0) package provides functionality to generate OpenAPI specifications from ASP.NET Core Web APIs and it supports OpenAPI 3.1. This difference turns out to be significant when it comes to handling nullability. There was a change to [how nullablity is represented in OpenAPI 3.1](https://www.openapis.org/blog/2021/02/16/migrating-from-openapi-3-0-to-3-1-0).

Whether it's related to that or not, the OpenAPI specifications produced by Microsoft.AspNetCore.OpenApi seem to surface nullability better than I've found with NSwag or Swashbuckle. If something is **not** defined as nullable in the C# model, it is **not** marked as nullable in the OpenAPI spec. This means that when we generate TypeScript clients from the OpenAPI spec, we get better nullability support in TypeScript too. Previously I'd find I'd do a lot of null checks or assertions in TypeScript even when the C# model didn't allow nulls. Now, with OpenAPI 3.1 and `Microsoft.AspNetCore.OpenApi`, I find that much less often.

The client that NSwag generates is also still very useful. But it is somewhat "heavy" in that it creates a lot of code. The alternative I'm going to show you here is to use [OpenAPI TypeScript / `openapi-ts`](https://openapi-ts.dev/). This is a lightweight TypeScript client generator for OpenAPI 3.x specifications. Most of the work it does is in the form of TypeScript type definitions. Given that type definitions are erased at runtime, the resulting client code is very lightweight. It also has good support for OpenAPI 3.1.

## What will we do?

So in this post we're going to do exactly what I did in my 2021 post, but this time using `Microsoft.AspNetCore.OpenApi` to generate the OpenAPI spec and `openapi-ts` to generate the TypeScript client.

We will:

- Create a .NET app which exposes an OpenAPI endpoint with `Microsoft.AspNetCore.OpenApi`.
- Create a script which, when run, creates a TypeScript client with `openapi-ts`.
- Consume the API using the generated client in a simple TypeScript application.

If you're going to do this, you will need both [Node.js](https://nodejs.org/) and the [.NET SDK](https://dotnet.microsoft.com/) installed.

## Create an API

We'll now create an API which exposes a [Swagger / Open API](https://swagger.io/resources/open-api/) endpoint. Whilst we're doing that we'll create a TypeScript React app which we'll use later on. We'll drop to the command line and enter the following commands which use the .NET SDK, node and the `create-react-app` package:

```shell
mkdir src
cd src
npx create-react-app client-app --template typescript
mkdir server-app
cd server-app
dotnet new api -o API
cd API
dotnet add package NSwag.AspNetCore
```

We now have a .NET API with a dependency on NSwag. We'll start to use it by replacing the `Startup.cs` that's been generated with the following:

```cs
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace API
{
    public class Startup
    {
        const string ALLOW_DEVELOPMENT_CORS_ORIGINS_POLICY = "AllowDevelopmentSpecificOrigins";
        const string LOCAL_DEVELOPMENT_URL = "http://localhost:3000";

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddControllers();

            services.AddCors(options => {
                options.AddPolicy(name: ALLOW_DEVELOPMENT_CORS_ORIGINS_POLICY,
                    builder => {
                        builder.WithOrigins(LOCAL_DEVELOPMENT_URL)
                            .AllowAnyMethod()
                            .AllowAnyHeader()
                            .AllowCredentials();
                    });
            });

            // Register the Swagger services
            services.AddSwaggerDocument();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure (IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                app.UseHsts ();
                app.UseHttpsRedirection();
            }

            app.UseDefaultFiles();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthorization();

            // Register the Swagger generator and the Swagger UI middlewares
            app.UseOpenApi();
            app.UseSwaggerUi3();

            if (env.IsDevelopment())
                app.UseCors(ALLOW_DEVELOPMENT_CORS_ORIGINS_POLICY);

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
```

The significant changes in the above `Startup.cs` are:

1. Exposing a Swagger endpoint with `UseOpenApi` and `UseSwaggerUi3`. NSwag will automagically create Swagger endpoints in your application for all your controllers. The .NET template ships with a `WeatherForecastController`.
2. Allowing [Cross-Origin Requests (CORS)](https://docs.microsoft.com/en-us/aspnet/core/security/cors) which is useful during development (and will facilitate a demo later).

Back in the root of our project we're going to initialise an npm project. We're going to use this to put in place a number of handy [`npm scripts`](https://docs.npmjs.com/cli/v6/using-npm/scripts) that will make our project easier to work with. So we'll `npm init` and accept all the defaults.

Now we're going add some dependencies which our scripts will use: `npm install cpx cross-env npm-run-all start-server-and-test`

We'll also add ourselves some `scripts` to our `package.json`:

```json
"scripts": {
    "postinstall": "npm run install:client-app && npm run install:server-app",
    "install:client-app": "cd src/client-app && npm install",
    "install:server-app": "cd src/server-app/API && dotnet restore",
    "build": "npm run build:client-app && npm run build:server-app",
    "build:client-app": "cd src/client-app && npm run build",
    "postbuild:client-app": "cpx \"src/client-app/build/**/*.*\" \"src/server-app/API/wwwroot/\"",
    "build:server-app": "cd src/server-app/API && dotnet build --configuration release",
    "start": "run-p start:client-app start:server-app",
    "start:client-app": "cd src/client-app && npm start",
    "start:server-app": "cross-env ASPNETCORE_URLS=http://*:5000 ASPNETCORE_ENVIRONMENT=Development dotnet watch --project src/server-app/API run --no-launch-profile"
  }
```

Let's walk through what the above scripts provide us with:

- Running `npm install` in the root of our project will not only install dependencies for our root `package.json`, thanks to our `postinstall`, `install:client-app` and `install:server-app` scripts it will install the React app and .NET app dependencies as well.
- Running `npm run build` will build our client and server apps.
- Running `npm run start` will start both our React app and our .NET app. Our React app will be started at [http://localhost:3000](http://localhost:3000). Our .NET app will be started at [http://localhost:5000](http://localhost:5000) (some environment variables are passed to it with [`cross-env`](https://github.com/kentcdodds/cross-env) ).

Once `npm run start` has been run, you will find a Swagger endpoint at [http://localhost:5000/swagger](http://localhost:5000/swagger):

![swagger screenshot](swagger.webp)

## The client generator project

Now we've scaffolded our Swagger-ed API, we want to put together the console app that will generate our typed clients.

```shell
cd src/server-app
dotnet new console -o APIClientGenerator
cd APIClientGenerator
dotnet add package NSwag.CodeGeneration.CSharp
dotnet add package NSwag.CodeGeneration.TypeScript
dotnet add package NSwag.Core
```

We now have a console app with dependencies on the code generation portions of NSwag. Now let's change up `Program.cs` to make use of this:

```cs
using System;
using System.IO;
using System.Threading.Tasks;
using NJsonSchema;
using NJsonSchema.CodeGeneration.TypeScript;
using NJsonSchema.Visitors;
using NSwag;
using NSwag.CodeGeneration.CSharp;
using NSwag.CodeGeneration.TypeScript;

namespace APIClientGenerator
{
    class Program
    {
        static async Task Main(string[] args)
        {
            if (args.Length != 3)
                throw new ArgumentException("Expecting 3 arguments: URL, generatePath, language");

            var url = args[0];
            var generatePath = Path.Combine(Directory.GetCurrentDirectory(), args[1]);
            var language = args[2];

            if (language != "TypeScript" && language != "CSharp")
                throw new ArgumentException("Invalid language parameter; valid values are TypeScript and CSharp");

            if (language == "TypeScript")
                await GenerateTypeScriptClient(url, generatePath);
            else
                await GenerateCSharpClient(url, generatePath);
        }

        async static Task GenerateTypeScriptClient(string url, string generatePath) =>
            await GenerateClient(
                document: await OpenApiDocument.FromUrlAsync(url),
                generatePath: generatePath,
                generateCode: (OpenApiDocument document) =>
                {
                    var settings = new TypeScriptClientGeneratorSettings();

                    settings.TypeScriptGeneratorSettings.TypeStyle = TypeScriptTypeStyle.Interface;
                    settings.TypeScriptGeneratorSettings.TypeScriptVersion = 3.5M;
                    settings.TypeScriptGeneratorSettings.DateTimeType = TypeScriptDateTimeType.String;

                    var generator = new TypeScriptClientGenerator(document, settings);
                    var code = generator.GenerateFile();

                    return code;
                }
            );

        async static Task GenerateCSharpClient(string url, string generatePath) =>
            await GenerateClient(
                document: await OpenApiDocument.FromUrlAsync(url),
                generatePath: generatePath,
                generateCode: (OpenApiDocument document) =>
                {
                    var settings = new CSharpClientGeneratorSettings
                    {
                        UseBaseUrl = false
                    };

                    var generator = new CSharpClientGenerator(document, settings);
                    var code = generator.GenerateFile();
                    return code;
                }
            );

        private async static Task GenerateClient(OpenApiDocument document, string generatePath, Func<OpenApiDocument, string> generateCode)
        {
            Console.WriteLine($"Generating {generatePath}...");

            var code = generateCode(document);

            await System.IO.File.WriteAllTextAsync(generatePath, code);
        }
    }
}
```

We've created ourselves a simple .NET console application that creates TypeScript and CSharp clients for a given Swagger URL. It expects three arguments:

- `url` \- the url of the `swagger.json` file to generate a client for.
- `generatePath` \- the path where the generated client file should be placed, relative to this project.
- `language` \- the language of the client to generate; valid values are "TypeScript" and "CSharp".

To create a TypeScript client with it then we'd use the following command:

```shell
dotnet run --project src/server-app/APIClientGenerator http://localhost:5000/swagger/v1/swagger.json src/client-app/src/clients.ts TypeScript
```

However, for this to run successfully, we'll first have to ensure the API is running. It would be great if we had a single command we could run that would:

- bring up the API
- generate a client
- bring down the API

Let's make that.

## Building a "make a client" script

In the root of the project we're going to add the following `scripts`:

```json
"generate-client:server-app": "start-server-and-test generate-client:server-app:serve http-get://localhost:5000/swagger/v1/swagger.json generate-client:server-app:generate",
"generate-client:server-app:serve": "cross-env ASPNETCORE_URLS=http://*:5000 ASPNETCORE_ENVIRONMENT=Development dotnet run --project src/server-app/API --no-launch-profile",
"generate-client:server-app:generate": "dotnet run --project src/server-app/APIClientGenerator http://localhost:5000/swagger/v1/swagger.json src/client-app/src/clients.ts TypeScript",
```

Let's walk through what's happening here. Running `npm run generate-client:server-app` will:

- Use the [`start-server-and-test`](https://github.com/bahmutov/start-server-and-test) package to spin up our server-app by running the `generate-client:server-app:serve` script.
- `start-server-and-test` waits for the Swagger endpoint to start responding to requests. When it does start responding, `start-server-and-test` runs the `generate-client:server-app:generate` script which runs our APIClientGenerator console app and provides it with the URL where our swagger can be found, the path of the file to generate and the language of "TypeScript"

If you were wanting to generate a C# client (say if you were writing a [Blazor](https://blog.logrocket.com/js-free-frontends-blazor/) app) then you could change the `generate-client:server-app:generate` script as follows:

```json
"generate-client:server-app:generate": "dotnet run --project src/server-app/ApiClientGenerator http://localhost:5000/swagger/v1/swagger.json clients.cs CSharp",
```

## Consume our generated API client

Let's run the `npm run generate-client:server-app` command. It creates a `clients.ts` file which nestles nicely inside our `client-app`. We're going to exercise that in a moment. First of all, let's enable proxying from our `client-app` to our `server-app` following the instructions in the [Create React App docs](https://create-react-app.dev/docs/proxying-api-requests-in-development/) and adding the following to our `client-app/package.json`:

```json
"proxy": "http://localhost:5000"
```

Now let's start our apps with `npm run start`. We'll then replace the contents of `App.tsx` with:

```jsx
import React from "react";
import "./App.css";
import { WeatherForecast, WeatherForecastClient } from "./clients";

function App() {
  const [weather, setWeather] = React.useState<WeatherForecast[] | null>();
  React.useEffect(() => {
    async function loadWeather() {
      const weatherClient = new WeatherForecastClient(/* baseUrl */ "");
      const forecast = await weatherClient.get();
      setWeather(forecast);
    }
    loadWeather();
  }, [setWeather]);

  return (
    <div className="App">
      <header className="App-header">
        {weather ? (
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Summary</th>
                <th>Centigrade</th>
                <th>Fahrenheit</th>
              </tr>
            </thead>
            <tbody>
              {weather.map(({ date, summary, temperatureC, temperatureF }) => (
                <tr key={date}>
                  <td>{new Date(date).toLocaleDateString()}</td>
                  <td>{summary}</td>
                  <td>{temperatureC}</td>
                  <td>{temperatureF}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Loading weather...</p>
        )}
      </header>
    </div>
  );
}

export default App;
```

Inside the `React.useEffect` above you can see we create a new instance of the auto-generated `WeatherForecastClient`. We then call `weatherClient.get()` which sends the `GET` request to the server to acquire the data and provides it in a strongly typed fashion (`get()` returns an array of `WeatherForecast`). This is then displayed on the page like so:

![load data from server](use-generated-client.gif)

As you an see we're loading data from the server using our auto-generated client. We're reducing the amount of code we have to write _and_ we're reducing the likelihood of errors.

This post was originally posted on [LogRocket](https://blog.logrocket.com/generate-typescript-csharp-clients-nswag-api/).

<head>
    <link rel="canonical" href="https://blog.logrocket.com/generate-typescript-csharp-clients-nswag-api/" />
</head>
