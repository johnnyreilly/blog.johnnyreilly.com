"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[85319],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return t?a.createElement(h,i(i({ref:n},c),{},{components:t})):a.createElement(h,i({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9330:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var a=t(83117),r=t(80102),o=(t(67294),t(3905)),i=["components"],s={title:"NSwag generated C# client: Open API property name clashes and decimal types rather than double",authors:"johnnyreilly",tags:["nswag","CSharp"],image:"./title-image.png",hide_table_of_contents:!1},l=void 0,p={permalink:"/2021/10/31/nswag-generated-c-sharp-client-property-name-clash",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2021-10-31-nswag-generated-c-sharp-client-property-name-clash/index.md",source:"@site/blog/2021-10-31-nswag-generated-c-sharp-client-property-name-clash/index.md",title:"NSwag generated C# client: Open API property name clashes and decimal types rather than double",description:"NSwag is a great tool for generating client libraries in C# and TypeScript from Open API / Swagger definitions. You can face issues where Open API property names collide due to the nature of the C# language, and when you want to use decimal for your floating point numeric type over double. This post demonstrates how to get over both issues.",date:"2021-10-31T00:00:00.000Z",formattedDate:"October 31, 2021",tags:[{label:"nswag",permalink:"/tags/nswag"},{label:"CSharp",permalink:"/tags/c-sharp"}],readingTime:10.575,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"NSwag generated C# client: Open API property name clashes and decimal types rather than double",authors:"johnnyreilly",tags:["nswag","CSharp"],image:"./title-image.png",hide_table_of_contents:!1},prevItem:{title:"Azure standard availability tests with Bicep",permalink:"/2021/11/18/azure-standard-tests-with-bicep"},nextItem:{title:"Docusaurus, meta tags and Google Discover",permalink:"/2021/10/18/docusaurus-meta-tags-and-google-discover"}},c={image:t(22179).Z,authorsImageUrls:[void 0]},m=[{value:"Make a C# Client Generator",id:"make-a-c-client-generator",level:2},{value:"When properties collide",id:"when-properties-collide",level:2},{value:"Use <code>decimal</code> not <code>double</code> for floating point numbers",id:"use-decimal-not-double-for-floating-point-numbers",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:m};function d(e){var n=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,s,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"NSwag is a great tool for generating client libraries in C# and TypeScript from Open API / Swagger definitions. You can face issues where Open API property names collide due to the nature of the C# language, and when you want to use ",(0,o.kt)("inlineCode",{parentName:"p"},"decimal")," for your floating point numeric type over ",(0,o.kt)("inlineCode",{parentName:"p"},"double"),". This post demonstrates how to get over both issues."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"title image reading &quot;NSwag generated C# client: Open API property name clashes and decimal types rather than double&quot; with a C# logo and Open API logos",src:t(22179).Z,width:"1600",height:"900"})),(0,o.kt)("h2",{id:"make-a-c-client-generator"},"Make a C# Client Generator"),(0,o.kt)("p",null,"Let's get a console app set up that will allow us to generate a C# client using an Open API file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"dotnet new console -o NSwag\ncd NSwag\ndotnet add package NSwag.CodeGeneration.CSharp\n")),(0,o.kt)("p",null,"We'll also add a ",(0,o.kt)("inlineCode",{parentName:"p"},"petstore-simple.json")," file to our project which we'll borrow from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OAI/OpenAPI-Specification/blob/main/examples/v2.0/json/petstore-simple.json"},"https://github.com/OAI/OpenAPI-Specification/blob/main/examples/v2.0/json/petstore-simple.json")," (home of the Open API specification):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "swagger": "2.0",\n  "info": {\n    "version": "1.0.0",\n    "title": "Swagger Petstore",\n    "description": "A sample API that uses a petstore as an example to demonstrate features in the swagger-2.0 specification",\n    "termsOfService": "http://swagger.io/terms/",\n    "contact": {\n      "name": "Swagger API Team"\n    },\n    "license": {\n      "name": "MIT"\n    }\n  },\n  "host": "petstore.swagger.io",\n  "basePath": "/api",\n  "schemes": ["http"],\n  "consumes": ["application/json"],\n  "produces": ["application/json"],\n  "paths": {\n    "/pets": {\n      "get": {\n        "description": "Returns all pets from the system that the user has access to",\n        "operationId": "findPets",\n        "produces": [\n          "application/json",\n          "application/xml",\n          "text/xml",\n          "text/html"\n        ],\n        "parameters": [\n          {\n            "name": "tags",\n            "in": "query",\n            "description": "tags to filter by",\n            "required": false,\n            "type": "array",\n            "items": {\n              "type": "string"\n            },\n            "collectionFormat": "csv"\n          },\n          {\n            "name": "limit",\n            "in": "query",\n            "description": "maximum number of results to return",\n            "required": false,\n            "type": "integer",\n            "format": "int32"\n          }\n        ],\n        "responses": {\n          "200": {\n            "description": "pet response",\n            "schema": {\n              "type": "array",\n              "items": {\n                "$ref": "#/definitions/Pet"\n              }\n            }\n          },\n          "default": {\n            "description": "unexpected error",\n            "schema": {\n              "$ref": "#/definitions/ErrorModel"\n            }\n          }\n        }\n      },\n      "post": {\n        "description": "Creates a new pet in the store.  Duplicates are allowed",\n        "operationId": "addPet",\n        "produces": ["application/json"],\n        "parameters": [\n          {\n            "name": "pet",\n            "in": "body",\n            "description": "Pet to add to the store",\n            "required": true,\n            "schema": {\n              "$ref": "#/definitions/NewPet"\n            }\n          }\n        ],\n        "responses": {\n          "200": {\n            "description": "pet response",\n            "schema": {\n              "$ref": "#/definitions/Pet"\n            }\n          },\n          "default": {\n            "description": "unexpected error",\n            "schema": {\n              "$ref": "#/definitions/ErrorModel"\n            }\n          }\n        }\n      }\n    },\n    "/pets/{id}": {\n      "get": {\n        "description": "Returns a user based on a single ID, if the user does not have access to the pet",\n        "operationId": "findPetById",\n        "produces": [\n          "application/json",\n          "application/xml",\n          "text/xml",\n          "text/html"\n        ],\n        "parameters": [\n          {\n            "name": "id",\n            "in": "path",\n            "description": "ID of pet to fetch",\n            "required": true,\n            "type": "integer",\n            "format": "int64"\n          }\n        ],\n        "responses": {\n          "200": {\n            "description": "pet response",\n            "schema": {\n              "$ref": "#/definitions/Pet"\n            }\n          },\n          "default": {\n            "description": "unexpected error",\n            "schema": {\n              "$ref": "#/definitions/ErrorModel"\n            }\n          }\n        }\n      },\n      "delete": {\n        "description": "deletes a single pet based on the ID supplied",\n        "operationId": "deletePet",\n        "parameters": [\n          {\n            "name": "id",\n            "in": "path",\n            "description": "ID of pet to delete",\n            "required": true,\n            "type": "integer",\n            "format": "int64"\n          }\n        ],\n        "responses": {\n          "204": {\n            "description": "pet deleted"\n          },\n          "default": {\n            "description": "unexpected error",\n            "schema": {\n              "$ref": "#/definitions/ErrorModel"\n            }\n          }\n        }\n      }\n    }\n  },\n  "definitions": {\n    "Pet": {\n      "type": "object",\n      "allOf": [\n        {\n          "$ref": "#/definitions/NewPet"\n        },\n        {\n          "required": ["id"],\n          "properties": {\n            "id": {\n              "type": "integer",\n              "format": "int64"\n            }\n          }\n        }\n      ]\n    },\n    "NewPet": {\n      "type": "object",\n      "required": ["name"],\n      "properties": {\n        "name": {\n          "type": "string"\n        },\n        "tag": {\n          "type": "string"\n        }\n      }\n    },\n    "ErrorModel": {\n      "type": "object",\n      "required": ["code", "message"],\n      "properties": {\n        "code": {\n          "type": "integer",\n          "format": "int32"\n        },\n        "message": {\n          "type": "string"\n        }\n      }\n    }\n  }\n}\n')),(0,o.kt)("p",null,"We'll tweak our ",(0,o.kt)("inlineCode",{parentName:"p"},"NSwag.csproj")," file to ensure that the ",(0,o.kt)("inlineCode",{parentName:"p"},"json")," file is included in our build output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<Project Sdk="Microsoft.NET.Sdk">\n  \x3c!-- ... ---\x3e\n  <ItemGroup>\n    <Content Include="**\\*.json">\n      <CopyToOutputDirectory>PreserveNewest</CopyToOutputDirectory>\n    </Content>\n  </ItemGroup>\n</Project>\n')),(0,o.kt)("p",null,"This will give us a console app with a reference to NSwag. Now we'll flesh out the ",(0,o.kt)("inlineCode",{parentName:"p"},"Program.cs")," file thusly:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'using System;\nusing System.IO;\nusing System.Reflection;\nusing System.Threading.Tasks;\nusing NJsonSchema;\nusing NJsonSchema.Visitors;\nusing NSwag.CodeGeneration.CSharp;\n\nnamespace NSwag {\n    class Program {\n        static async Task Main(string[] args) {\n            Console.WriteLine("Generating client...");\n            await ClientGenerator.GenerateCSharpClient();\n            Console.WriteLine("Generated client.");\n        }\n    }\n\n    public static class ClientGenerator {\n\n        public async static Task GenerateCSharpClient() =>\n            GenerateClient(\n                // https://github.com/OAI/OpenAPI-Specification/blob/main/examples/v2.0/json/petstore-simple.json\n                document: await GetDocumentFromFile("petstore-simple.json"),\n                generatedLocation: "GeneratedClient.cs",\n                generateCode: (OpenApiDocument document) => {\n                    var settings = new CSharpClientGeneratorSettings();\n\n                    var generator = new CSharpClientGenerator(document, settings);\n                    var code = generator.GenerateFile();\n                    return code;\n                }\n            );\n\n        private static void GenerateClient(OpenApiDocument document, string generatedLocation, Func<OpenApiDocument, string> generateCode) {\n            var root = Path.GetDirectoryName(Assembly.GetEntryAssembly().Location);\n            var location = Path.GetFullPath(Path.Join(root, @"../../../", generatedLocation));\n\n            Console.WriteLine($"Generating {location}...");\n\n            var code = generateCode(document);\n\n            System.IO.File.WriteAllText(location, code);\n        }\n\n        private static async Task<OpenApiDocument> GetDocumentFromFile(string swaggerJsonFilePath) {\n            var root = Path.GetDirectoryName(Assembly.GetEntryAssembly().Location);\n            var swaggerJson = await File.ReadAllTextAsync(Path.GetFullPath(Path.Join(root, swaggerJsonFilePath)));\n            var document = await OpenApiDocument.FromJsonAsync(swaggerJson);\n\n            return document;\n        }\n    }\n}\n')),(0,o.kt)("p",null,"If we perform a ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet run")," we now pump out a ",(0,o.kt)("inlineCode",{parentName:"p"},"GeneratedClient.cs")," file which is a C# client library for the pet store. Fabulous."),(0,o.kt)("p",null,"So far so dandy. We're taking an Open API ",(0,o.kt)("inlineCode",{parentName:"p"},"json")," file and generating a C# client library from it."),(0,o.kt)("h2",{id:"when-properties-collide"},"When properties collide"),(0,o.kt)("p",null,"It's time to break things. We're presently generating a ",(0,o.kt)("inlineCode",{parentName:"p"},"Pet")," class that looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'[System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "10.5.2.0 (Newtonsoft.Json v13.0.0.0)")]\npublic partial class Pet : NewPet\n{\n    [Newtonsoft.Json.JsonProperty("id", Required = Newtonsoft.Json.Required.Always)]\n    public long Id { get; set; }\n}\n')),(0,o.kt)("p",null,"We're going to take our ",(0,o.kt)("inlineCode",{parentName:"p"},"Pet")," definition in the ",(0,o.kt)("inlineCode",{parentName:"p"},"petstore-simple.json")," file, and add a new ",(0,o.kt)("inlineCode",{parentName:"p"},"@id")," property alongside the ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," property:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"Pet": {\n    "type": "object",\n    "allOf": [\n        {\n            "$ref": "#/definitions/NewPet"\n        },\n        {\n            "required": [\n                "id"\n            ],\n            "properties": {\n                "id": {\n                    "type": "integer",\n                    "format": "int64"\n                },\n                "@id": {\n                    "type": "integer",\n                    "format": "int64"\n                }\n            }\n        }\n    ]\n},\n')),(0,o.kt)("p",null,"For why? Whilst this may seem esoteric, this is a scenario that can present. It's not unknown to encounter properties which are identical, save for an ",(0,o.kt)("inlineCode",{parentName:"p"},"@")," prefix. This is often the case for meta-properties."),(0,o.kt)("p",null,"What do we get if we run our generator over that?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'[System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "10.5.2.0 (Newtonsoft.Json v13.0.0.0)")]\npublic partial class Pet : NewPet\n{\n    [Newtonsoft.Json.JsonProperty("id", Required = Newtonsoft.Json.Required.Always)]\n    public long Id { get; set; }\n\n    [Newtonsoft.Json.JsonProperty("@id", Required = Newtonsoft.Json.Required.Always)]\n    public long Id { get; set; }\n}\n')),(0,o.kt)("p",null,"We get code that doesn't compile. You can't have two properties in a C# class with the same name. You also cannot have ",(0,o.kt)("inlineCode",{parentName:"p"},"@")," as a character in a C# property or variable name. To quote the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/tokens/verbatim"},"docs"),":"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The @ special character serves as a verbatim identifier.")),(0,o.kt)("p",null,"It so happens that, by default, NSwag purges ",(0,o.kt)("inlineCode",{parentName:"p"},"@")," characters from property names. If there isn't another property which is named the same save for an ",(0,o.kt)("inlineCode",{parentName:"p"},"@")," prefix, this is a fine strategy. If there is, as for us now, you're toast."),(0,o.kt)("p",null,"There's a workaround. We'll create a new ",(0,o.kt)("inlineCode",{parentName:"p"},"HandleAtCSharpPropertyNameGenerator")," class:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'/// <summary>\n/// Replace characters which will not comply with C# syntax with something that will\n/// </summary>\npublic class HandleAtCSharpPropertyNameGenerator : NJsonSchema.CodeGeneration.IPropertyNameGenerator {\n    /// <summary>Generates the property name.</summary>\n    /// <param name="property">The property.</param>\n    /// <returns>The new name.</returns>\n    public virtual string Generate(JsonSchemaProperty property) =>\n        ConversionUtilities.ConvertToUpperCamelCase(property.Name\n            .Replace("\\"", string.Empty)\n            .Replace("@", "__") // make "@" => "__", so "@type" => "__type"\n            .Replace("?", string.Empty)\n            .Replace("$", string.Empty)\n            .Replace("[", string.Empty)\n            .Replace("]", string.Empty)\n            .Replace("(", "_")\n            .Replace(")", string.Empty)\n            .Replace(".", "-")\n            .Replace("=", "-")\n            .Replace("+", "plus"), true)\n            .Replace("*", "Star")\n            .Replace(":", "_")\n            .Replace("-", "_")\n            .Replace("#", "_");\n}\n')),(0,o.kt)("p",null,"This is a replacement for the ",(0,o.kt)("inlineCode",{parentName:"p"},"CSharpPropertyNameGenerator")," that NSwag ships with. Rather than purging the ",(0,o.kt)("inlineCode",{parentName:"p"},"@")," character, it replaces usage with a double underscore: ",(0,o.kt)("inlineCode",{parentName:"p"},"__"),"."),(0,o.kt)("p",null,"We'll make use of our new ",(0,o.kt)("inlineCode",{parentName:"p"},"PropertyNameGenerator"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'public async static Task GenerateCSharpClient() =>\n    GenerateClient(\n        // https://github.com/OAI/OpenAPI-Specification/blob/main/examples/v2.0/json/petstore-simple.json\n        document: await GetDocumentFromFile("petstore-simple.json"),\n        generatedLocation: "GeneratedClient.cs",\n        generateCode: (OpenApiDocument document) => {\n            var settings = new CSharpClientGeneratorSettings {\n                CSharpGeneratorSettings = {\n                    PropertyNameGenerator = new HandleAtCSharpPropertyNameGenerator() // @ shouldn\'t cause us problems\n                }\n            };\n\n            var generator = new CSharpClientGenerator(document, settings);\n            var code = generator.GenerateFile();\n            return code;\n        }\n    );\n')),(0,o.kt)("p",null,"With this in place, when we ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet run")," we create a class that looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'[System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "10.5.2.0 (Newtonsoft.Json v13.0.0.0)")]\npublic partial class Pet : NewPet\n{\n    [Newtonsoft.Json.JsonProperty("id", Required = Newtonsoft.Json.Required.Always)]\n    public long Id { get; set; }\n\n    [Newtonsoft.Json.JsonProperty("@id", Required = Newtonsoft.Json.Required.Always)]\n    public long __id { get; set; }\n}\n')),(0,o.kt)("p",null,"So the newly generated property name is ",(0,o.kt)("inlineCode",{parentName:"p"},"__id")," rather than the clashing ",(0,o.kt)("inlineCode",{parentName:"p"},"Id"),". Rather wonderfully, this works. It resolves the issue we faced. We've chosen to use ",(0,o.kt)("inlineCode",{parentName:"p"},"__")," as our prefix - we could choose something else if that worked better for us."),(0,o.kt)("p",null,"Knowing that this hook exists is super useful."),(0,o.kt)("h2",{id:"use-decimal-not-double-for-floating-point-numbers"},"Use ",(0,o.kt)("inlineCode",{parentName:"h2"},"decimal")," not ",(0,o.kt)("inlineCode",{parentName:"h2"},"double")," for floating point numbers"),(0,o.kt)("p",null,"Another common problem with generated C# clients is the number type used to represent floating point numbers. The default for C# is ",(0,o.kt)("inlineCode",{parentName:"p"},"double"),"."),(0,o.kt)("p",null,"This is a reasonable choice when you consider the ",(0,o.kt)("a",{parentName:"p",href:"https://swagger.io/docs/specification/data-models/data-types/#numbers"},"official format")," for highly precise floating point numbers is ",(0,o.kt)("inlineCode",{parentName:"p"},"double"),":"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"OpenAPI has two numeric types, ",(0,o.kt)("inlineCode",{parentName:"p"},"number")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"integer"),", where ",(0,o.kt)("inlineCode",{parentName:"p"},"number")," includes both integer and floating-point numbers. An optional ",(0,o.kt)("inlineCode",{parentName:"p"},"format")," keyword serves as a hint for the tools to use a specific numeric type:"),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"float")," - Floating-point numbers.\n",(0,o.kt)("inlineCode",{parentName:"p"},"double")," - Floating-point numbers with double precision.")),(0,o.kt)("p",null,"Let's tweak our pet definition to reflect this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"Pet": {\n    "type": "object",\n    "allOf": [\n        {\n            "$ref": "#/definitions/NewPet"\n        },\n        {\n            "required": [\n                "id"\n            ],\n            "properties": {\n                "id": {\n                    "type": "number",\n                    "format": "double"\n                },\n                "@id": {\n                    "type": "number",\n                    "format": "double"\n                }\n            }\n        }\n    ]\n},\n')),(0,o.kt)("p",null,"With this in place, when we ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet run")," we create a class that looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'[System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "10.5.2.0 (Newtonsoft.Json v13.0.0.0)")]\npublic partial class Pet : NewPet\n{\n    [Newtonsoft.Json.JsonProperty("id", Required = Newtonsoft.Json.Required.Always)]\n    public double Id { get; set; }\n\n    [Newtonsoft.Json.JsonProperty("@id", Required = Newtonsoft.Json.Required.Always)]\n    public double __id { get; set; }\n}\n')),(0,o.kt)("p",null,"C# developers may well rather work with a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/system.decimal?view=net-5.0"},(0,o.kt)("inlineCode",{parentName:"a"},"decimal")),' type which can handle "financial calculations that require large numbers of significant integral and fractional digits and no round-off errors".'),(0,o.kt)("p",null,"There is a way to switch from using ",(0,o.kt)("inlineCode",{parentName:"p"},"double")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"decimal")," in your generated clients. I've been using the approach for some years, and I suspect I first adapted it from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/RicoSuter/NSwag/issues/1814#issuecomment-448752684"},"a comment on GitHub"),"."),(0,o.kt)("p",null,"It uses the ",(0,o.kt)("a",{parentName:"p",href:"https://en.m.wikipedia.org/wiki/Visitor_pattern"},"visitor pattern")," and looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"/// <summary>\n/// By default the C# decimal number type used is double; this makes it decimal\n/// </summary>\npublic class DoubleToDecimalVisitor : JsonSchemaVisitorBase {\n    protected override JsonSchema VisitSchema(JsonSchema schema, string path, string typeNameHint) {\n        if (schema.Type == JsonObjectType.Number)\n            schema.Format = JsonFormatStrings.Decimal;\n\n        return schema;\n    }\n}\n")),(0,o.kt)("p",null,"The code above, when invoked upon our ",(0,o.kt)("inlineCode",{parentName:"p"},"OpenApiDocument"),", changes the format of all number types to be ",(0,o.kt)("inlineCode",{parentName:"p"},"decimal"),". Which results in code along these lines:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'[System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "10.5.2.0 (Newtonsoft.Json v13.0.0.0)")]\npublic partial class Pet : NewPet\n{\n    [Newtonsoft.Json.JsonProperty("id", Required = Newtonsoft.Json.Required.Always)]\n    public decimal Id { get; set; }\n\n    [Newtonsoft.Json.JsonProperty("@id", Required = Newtonsoft.Json.Required.Always)]\n    public decimal __id { get; set; }\n}\n')),(0,o.kt)("p",null,"If we take all the code, and put it together, we end up with this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'using System;\nusing System.IO;\nusing System.Reflection;\nusing System.Threading.Tasks;\nusing NJsonSchema;\nusing NJsonSchema.Visitors;\nusing NSwag.CodeGeneration.CSharp;\n\nnamespace NSwag {\n    class Program {\n        static async Task Main(string[] args) {\n            Console.WriteLine("Generating client...");\n            await ClientGenerator.GenerateCSharpClient();\n            Console.WriteLine("Generated client.");\n        }\n    }\n\n    public static class ClientGenerator {\n\n        public async static Task GenerateCSharpClient() =>\n            GenerateClient(\n                // https://github.com/OAI/OpenAPI-Specification/blob/main/examples/v2.0/json/petstore-simple.json\n                document: await GetDocumentFromFile("petstore-simple.json"),\n                generatedLocation: "GeneratedClient.cs",\n                generateCode: (OpenApiDocument document) => {\n                    new DoubleToDecimalVisitor().Visit(document); // we want decimals not doubles\n\n                    var settings = new CSharpClientGeneratorSettings {\n                        CSharpGeneratorSettings = {\n                            PropertyNameGenerator = new HandleAtCSharpPropertyNameGenerator() // @ shouldn\'t cause us problems\n                        }\n                    };\n\n                    var generator = new CSharpClientGenerator(document, settings);\n                    var code = generator.GenerateFile();\n                    return code;\n                }\n            );\n\n        private static void GenerateClient(OpenApiDocument document, string generatedLocation, Func<OpenApiDocument, string> generateCode) {\n            var root = Path.GetDirectoryName(Assembly.GetEntryAssembly().Location);\n            var location = Path.GetFullPath(Path.Join(root, @"../../../", generatedLocation));\n\n            Console.WriteLine($"Generating {location}...");\n\n            var code = generateCode(document);\n\n            System.IO.File.WriteAllText(location, code);\n        }\n\n        private static async Task<OpenApiDocument> GetDocumentFromFile(string swaggerJsonFilePath) {\n            var root = Path.GetDirectoryName(Assembly.GetEntryAssembly().Location);\n            var swaggerJson = await File.ReadAllTextAsync(Path.GetFullPath(Path.Join(root, swaggerJsonFilePath)));\n            var document = await OpenApiDocument.FromJsonAsync(swaggerJson);\n\n            return document;\n        }\n    }\n\n    /// <summary>\n    /// By default the C# decimal number type used is double; this makes it decimal\n    /// </summary>\n    public class DoubleToDecimalVisitor : JsonSchemaVisitorBase {\n        protected override JsonSchema VisitSchema(JsonSchema schema, string path, string typeNameHint) {\n            if (schema.Type == JsonObjectType.Number)\n                schema.Format = JsonFormatStrings.Decimal;\n\n            return schema;\n        }\n    }\n\n    /// <summary>\n    /// Replace characters which will not comply with C# syntax with something that will\n    /// </summary>\n    public class HandleAtCSharpPropertyNameGenerator : NJsonSchema.CodeGeneration.IPropertyNameGenerator {\n        /// <summary>Generates the property name.</summary>\n        /// <param name="property">The property.</param>\n        /// <returns>The new name.</returns>\n        public virtual string Generate(JsonSchemaProperty property) =>\n            ConversionUtilities.ConvertToUpperCamelCase(property.Name\n                .Replace("\\"", string.Empty)\n                .Replace("@", "__") // make "@" => "__", so "@type" => "__type"\n                .Replace("?", string.Empty)\n                .Replace("$", string.Empty)\n                .Replace("[", string.Empty)\n                .Replace("]", string.Empty)\n                .Replace("(", "_")\n                .Replace(")", string.Empty)\n                .Replace(".", "-")\n                .Replace("=", "-")\n                .Replace("+", "plus"), true)\n                .Replace("*", "Star")\n                .Replace(":", "_")\n                .Replace("-", "_")\n                .Replace("#", "_");\n    }\n}\n')),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"This post takes the tremendous NSwag, and demonstrates a mechanism for using it to create C# clients from an Open API / Swagger documents which:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"can handle property names with an ",(0,o.kt)("inlineCode",{parentName:"li"},"@")," prefix which might collide with the same property without the prefix"),(0,o.kt)("li",{parentName:"ul"},"use ",(0,o.kt)("inlineCode",{parentName:"li"},"decimal")," as the preferred number type for floating point numbers")))}d.isMDXComponent=!0},22179:function(e,n,t){n.Z=t.p+"assets/images/title-image-4b0e4deb23234c57e718797c6edf94d8.png"}}]);