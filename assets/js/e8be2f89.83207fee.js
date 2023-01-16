"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[17178],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(n),m=r,d=h["".concat(l,".").concat(m)]||h[m]||u[m]||i;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},79408:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});n(67294);var a=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const o={title:"Swashbuckle & inheritance: Give. Me. The. Types",authors:"johnnyreilly",tags:["Swashbuckle",".NET","inheritance","UseOneOfForPolymorphism","multiple return types","discriminated unions"],image:"./title-image.png",hide_table_of_contents:!1},s=void 0,l={permalink:"/2022/03/06/swashbuckle-inheritance-multiple-return-types",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2022-03-06-swashbuckle-inheritance-multiple-return-types/index.md",source:"@site/blog/2022-03-06-swashbuckle-inheritance-multiple-return-types/index.md",title:"Swashbuckle & inheritance: Give. Me. The. Types",description:"For API endpoints that return multiple types, you can use inheritance with Swashbuckle to get create a Swagger / Open API definition featuring the variety of available types. Serving all these types is not the default behaviour. This post shows you how to opt in.",date:"2022-03-06T00:00:00.000Z",formattedDate:"March 6, 2022",tags:[{label:"Swashbuckle",permalink:"/tags/swashbuckle"},{label:".NET",permalink:"/tags/net"},{label:"inheritance",permalink:"/tags/inheritance"},{label:"UseOneOfForPolymorphism",permalink:"/tags/use-one-of-for-polymorphism"},{label:"multiple return types",permalink:"/tags/multiple-return-types"},{label:"discriminated unions",permalink:"/tags/discriminated-unions"}],readingTime:5.555,hasTruncateMarker:!1,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Swashbuckle & inheritance: Give. Me. The. Types",authors:"johnnyreilly",tags:["Swashbuckle",".NET","inheritance","UseOneOfForPolymorphism","multiple return types","discriminated unions"],image:"./title-image.png",hide_table_of_contents:!1},prevItem:{title:"Lighthouse meet GitHub Actions",permalink:"/2022/03/20/lighthouse-meet-github-actions"},nextItem:{title:"Azure Static Web Apps - a Netlify alternative",permalink:"/2022/02/08/azure-static-web-apps-a-netlify-alternative"}},p={image:n(19251).Z,authorsImageUrls:[void 0]},c=[{value:"Making a simple API",id:"making-a-simple-api",level:2},{value:"Multiple return types",id:"multiple-return-types",level:2},{value:"Serving up subtypes",id:"serving-up-subtypes",level:2}],h={toc:c};function u(e){var{components:t}=e,o=i(e,["components"]);return(0,a.kt)("wrapper",r({},h,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"For API endpoints that return multiple types, you can use inheritance with Swashbuckle to get create a Swagger / Open API definition featuring the variety of available types. Serving all these types is not the default behaviour. This post shows you how to opt in."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"title image reading &quot;Swashbuckle and inheritance: Give. Me. The. Types&quot; with Sid Swashbuckle the Pirate and Open API logos",src:n(19251).Z,width:"1600",height:"900"})),(0,a.kt)("h2",r({},{id:"making-a-simple-api"}),"Making a simple API"),(0,a.kt)("p",null,"The first thing we're going to need is an API, which we'll build with the .NET 6 SDK:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"dotnet new webapi\ndotnet add package Swashbuckle.AspNetCore\n")),(0,a.kt)("p",null,"When we run this with ",(0,a.kt)("inlineCode",{parentName:"p"},"dotnet run")," we find Swashbuckle living at http://localhost:5000/swagger/index.html defining our web api that serves up a WeatherForecast:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"screenshot of swagger UI including `WeatherForecast`",src:n(81410).Z,width:"1289",height:"1232"})),(0,a.kt)("p",null,"If we look at the ",(0,a.kt)("inlineCode",{parentName:"p"},"swagger.json")," created at our ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:5000/swagger/v1/swagger.json")," endpoint we see the following definition:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-json"}),'{\n  "openapi": "3.0.1",\n  "info": {\n    "title": "SwashbuckleInheritance",\n    "version": "1.0"\n  },\n  "paths": {\n    "/WeatherForecast": {\n      "get": {\n        "tags": ["WeatherForecast"],\n        "operationId": "GetWeatherForecast",\n        "responses": {\n          "200": {\n            "description": "Success",\n            "content": {\n              "text/plain": {\n                "schema": {\n                  "type": "array",\n                  "items": {\n                    "$ref": "#/components/schemas/WeatherForecast"\n                  }\n                }\n              },\n              "application/json": {\n                "schema": {\n                  "type": "array",\n                  "items": {\n                    "$ref": "#/components/schemas/WeatherForecast"\n                  }\n                }\n              },\n              "text/json": {\n                "schema": {\n                  "type": "array",\n                  "items": {\n                    "$ref": "#/components/schemas/WeatherForecast"\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  },\n  "components": {\n    "schemas": {\n      "WeatherForecast": {\n        "type": "object",\n        "properties": {\n          "date": {\n            "type": "string",\n            "format": "date-time"\n          },\n          "temperatureC": {\n            "type": "integer",\n            "format": "int32"\n          },\n          "temperatureF": {\n            "type": "integer",\n            "format": "int32",\n            "readOnly": true\n          },\n          "summary": {\n            "type": "string",\n            "nullable": true\n          }\n        },\n        "additionalProperties": false\n      }\n    }\n  }\n}\n')),(0,a.kt)("p",null,"Only a single return type is defined: ",(0,a.kt)("inlineCode",{parentName:"p"},"WeatherForecast"),"."),(0,a.kt)("h2",r({},{id:"multiple-return-types"}),"Multiple return types"),(0,a.kt)("p",null,"Now we've got our simple API, let's evolve it to serve up multiple types. We're going to do this by updating our ",(0,a.kt)("inlineCode",{parentName:"p"},"WeatherForecast.cs")," as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-cs"}),"public class WeatherForecast\n{\n    public DateTime Date { get; set; }\n\n    public int TemperatureC { get; set; }\n\n    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);\n\n    public string? Summary { get; set; }\n}\n\npublic class WeatherForecastWithLocation : WeatherForecast\n{\n    public string? Location { get; set; }\n}\n")),(0,a.kt)("p",null,"We now have both a ",(0,a.kt)("inlineCode",{parentName:"p"},"WeatherForecast")," and a ",(0,a.kt)("inlineCode",{parentName:"p"},"WeatherForecastWithLocation")," that inherits from ",(0,a.kt)("inlineCode",{parentName:"p"},"WeatherForecast")," and adds in a ",(0,a.kt)("inlineCode",{parentName:"p"},"Location")," property."),(0,a.kt)("p",null,"We'll also update the ",(0,a.kt)("inlineCode",{parentName:"p"},"GetWeatherForecast")," endpoint to surface both these types:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-cs"}),'[HttpGet(Name = "GetWeatherForecast")]\npublic IEnumerable<WeatherForecast> Get() =>\n    DateTime.Now.Minute < 30\n        ? Enumerable.Range(1, 5).Select(index => new WeatherForecast\n        {\n            Date = DateTime.Now.AddDays(index),\n            TemperatureC = Random.Shared.Next(-20, 55),\n            Summary = Summaries[Random.Shared.Next(Summaries.Length)]\n        })\n        : Enumerable.Range(1, 5).Select(index => new WeatherForecastWithLocation\n        {\n            Date = DateTime.Now.AddDays(index),\n            TemperatureC = Random.Shared.Next(-20, 55),\n            Summary = Summaries[Random.Shared.Next(Summaries.Length)],\n            Location = "London"\n        })\n        .ToArray();\n')),(0,a.kt)("p",null,"We've amended the endpoint to return ",(0,a.kt)("inlineCode",{parentName:"p"},"WeatherForecast"),"s for the first thirty minutes of each hour, and ",(0,a.kt)("inlineCode",{parentName:"p"},"WeatherForecastWithLocation"),"s for the second thirty minutes. This is plainly a contrived example, but it demonstrates what it looks like to have an API endpoint with multiple return types."),(0,a.kt)("p",null,"Incidentally, the reason we're able to achieve this without the compiler shouting at us is because our endpoint is saying it returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"WeatherForecast")," and that is the base type of ",(0,a.kt)("inlineCode",{parentName:"p"},"WeatherForecastWithLocation")," as well."),(0,a.kt)("p",null,"To prove that it works, we wait for half past the hour and enter:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"curl -X 'GET' 'http://localhost:5000/WeatherForecast'\n")),(0,a.kt)("p",null,"We see back JSON that includes the ",(0,a.kt)("inlineCode",{parentName:"p"},"Location")," property. Huzzah!"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "location": "London",\n    "date": "2022-03-07T08:51:02.0932353+00:00",\n    "temperatureC": -4,\n    "temperatureF": 25,\n    "summary": "Bracing"\n  },\n  {\n    "location": "London",\n    "date": "2022-03-08T08:51:02.0938418+00:00",\n    "temperatureC": -5,\n    "temperatureF": 24,\n    "summary": "Balmy"\n  },\n  {\n    "location": "London",\n    "date": "2022-03-09T08:51:02.0938513+00:00",\n    "temperatureC": 51,\n    "temperatureF": 123,\n    "summary": "Warm"\n  },\n  {\n    "location": "London",\n    "date": "2022-03-10T08:51:02.0938518+00:00",\n    "temperatureC": 35,\n    "temperatureF": 94,\n    "summary": "Warm"\n  },\n  {\n    "location": "London",\n    "date": "2022-03-11T08:51:02.0938537+00:00",\n    "temperatureC": 2,\n    "temperatureF": 35,\n    "summary": "Cool"\n  }\n]\n')),(0,a.kt)("p",null,"Whilst we've got behaviour that handles multiple return types, what we don't have is Swagger / Open API that represents that. Despite our tweaks, our Swagger / Open API definition remains unchanged."),(0,a.kt)("h2",r({},{id:"serving-up-subtypes"}),"Serving up subtypes"),(0,a.kt)("p",null,"In a perfect world, C# would have support for discriminated unions, and we'd be using ",(0,a.kt)("a",r({parentName:"p"},{href:"https://swagger.io/docs/specification/data-models/oneof-anyof-allof-not/"}),(0,a.kt)("inlineCode",{parentName:"a"},"oneOf"))," to represent the multiple types being surfaced. ",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/dotnet/csharplang/issues/113"}),"The day may come where C# supports discriminated unions"),", but until that time we'll be achieving this behaviour with inheritance. We do this by having an endpoint that surfaces up a base type, and all our possible return types must either subclass that base type, or be that base type."),(0,a.kt)("p",null,"To be clearer: we want our served up Swagger / Open API definition to serve up the definitions of our subclasses. It needs to shout about ",(0,a.kt)("inlineCode",{parentName:"p"},"WeatherForecastWithLocation")," in the same way it shouts about ",(0,a.kt)("inlineCode",{parentName:"p"},"WeatherForecast"),"."),(0,a.kt)("p",null,"It turns out that this is eminently achievable with Swashbuckle, but you do need to know where to look. ",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/domaindrivendev/Swashbuckle.AspNetCore#describing-discriminators"}),"Look here"),"."),(0,a.kt)("p",null,"To apply this tweak to our own ",(0,a.kt)("inlineCode",{parentName:"p"},"Program.cs")," we simply update the ",(0,a.kt)("inlineCode",{parentName:"p"},"AddSwaggerGen")," as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-cs"}),"builder.Services.AddSwaggerGen(swaggerGenOptions =>\n{\n    swaggerGenOptions.UseAllOfForInheritance();\n    swaggerGenOptions.UseOneOfForPolymorphism();\n\n    swaggerGenOptions.SelectSubTypesUsing(baseType =>\n        typeof(Program).Assembly.GetTypes().Where(type => type.IsSubclassOf(baseType))\n    );\n});\n")),(0,a.kt)("p",null,"There's three things we're doing here:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"With ",(0,a.kt)("a",r({parentName:"li"},{href:"https://github.com/domaindrivendev/Swashbuckle.AspNetCore#enabling-inheritance"}),(0,a.kt)("inlineCode",{parentName:"a"},"UseAllOfForInheritance"))," we're enabling inheritance - this allows us to maintain the inheritance hierarchy in any generated client models."),(0,a.kt)("li",{parentName:"ol"},"With ",(0,a.kt)("a",r({parentName:"li"},{href:"https://github.com/domaindrivendev/Swashbuckle.AspNetCore#enabling-polymorphism"}),(0,a.kt)("inlineCode",{parentName:"a"},"UseOneOfForPolymorphism"))," we're listing the possible subtypes for an action that accepts/returns base types."),(0,a.kt)("li",{parentName:"ol"},"With ",(0,a.kt)("a",r({parentName:"li"},{href:"https://github.com/domaindrivendev/Swashbuckle.AspNetCore#detecting-subtypes"}),(0,a.kt)("inlineCode",{parentName:"a"},"SelectSubTypesUsing"))," we're pointing Swashbuckle at the type hierarchies it exposes in the generated Swagger.")),(0,a.kt)("p",null,"Then next time we ",(0,a.kt)("inlineCode",{parentName:"p"},"dotnet run")," we see that we're serving up both ",(0,a.kt)("inlineCode",{parentName:"p"},"WeatherForecast")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"WeatherForecastWithLocation"),":"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"screenshot of swagger UI including `WeatherForecast` and `WeatherForecastWithLocation`",src:n(45752).Z,width:"1282",height:"1184"})),(0,a.kt)("p",null,"We can also see this directly in the ",(0,a.kt)("inlineCode",{parentName:"p"},"swagger.json")," created at our ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:5000/swagger/v1/swagger.json")," endpoint:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-json"}),'{\n  "openapi": "3.0.1",\n  "info": {\n    "title": "SwashbuckleInheritance",\n    "version": "1.0"\n  },\n  "paths": {\n    "/WeatherForecast": {\n      "get": {\n        "tags": ["WeatherForecast"],\n        "operationId": "GetWeatherForecast",\n        "responses": {\n          "200": {\n            "description": "Success",\n            "content": {\n              "text/plain": {\n                "schema": {\n                  "type": "array",\n                  "items": {\n                    "oneOf": [\n                      {\n                        "$ref": "#/components/schemas/WeatherForecast"\n                      },\n                      {\n                        "$ref": "#/components/schemas/WeatherForecastWithLocation"\n                      }\n                    ]\n                  }\n                }\n              },\n              "application/json": {\n                "schema": {\n                  "type": "array",\n                  "items": {\n                    "oneOf": [\n                      {\n                        "$ref": "#/components/schemas/WeatherForecast"\n                      },\n                      {\n                        "$ref": "#/components/schemas/WeatherForecastWithLocation"\n                      }\n                    ]\n                  }\n                }\n              },\n              "text/json": {\n                "schema": {\n                  "type": "array",\n                  "items": {\n                    "oneOf": [\n                      {\n                        "$ref": "#/components/schemas/WeatherForecast"\n                      },\n                      {\n                        "$ref": "#/components/schemas/WeatherForecastWithLocation"\n                      }\n                    ]\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  },\n  "components": {\n    "schemas": {\n      "WeatherForecast": {\n        "type": "object",\n        "properties": {\n          "date": {\n            "type": "string",\n            "format": "date-time"\n          },\n          "temperatureC": {\n            "type": "integer",\n            "format": "int32"\n          },\n          "temperatureF": {\n            "type": "integer",\n            "format": "int32",\n            "readOnly": true\n          },\n          "summary": {\n            "type": "string",\n            "nullable": true\n          }\n        },\n        "additionalProperties": false\n      },\n      "WeatherForecastWithLocation": {\n        "type": "object",\n        "allOf": [\n          {\n            "$ref": "#/components/schemas/WeatherForecast"\n          }\n        ],\n        "properties": {\n          "location": {\n            "type": "string",\n            "nullable": true\n          }\n        },\n        "additionalProperties": false\n      }\n    }\n  }\n}\n')),(0,a.kt)("p",null,"There's two things to note about the new definition:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"WeatherForecastWithLocation")," type is included in the ",(0,a.kt)("inlineCode",{parentName:"p"},"schemas"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The return type has widened to include ",(0,a.kt)("inlineCode",{parentName:"p"},"WeatherForecastWithLocation")," as well using ",(0,a.kt)("inlineCode",{parentName:"p"},"oneOf")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",r({parentName:"pre"},{className:"language-json"}),'"oneOf": [\n    {\n        "$ref": "#/components/schemas/WeatherForecast"\n    },\n    {\n        "$ref": "#/components/schemas/WeatherForecastWithLocation"\n    }\n]\n')))),(0,a.kt)("p",null,"Success!"))}u.isMDXComponent=!0},81410:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screenshot-initial-swagger-ui-bd6fdb1604bb88f69a25f6419618eaf4.png"},45752:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screenshot-swagger-ui-with-location-47ddbace31520c3ec84fc570bbde9aa6.png"},19251:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/title-image-cb268ba4b2458174c1b6f43e85ea82a3.png"}}]);