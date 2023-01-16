"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[17843],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(n),m=o,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||l;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:o,r[1]=i;for(var d=2;d<l;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65876:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});n(67294);var a=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const r={title:"Unit testing ModelState",authors:"johnnyreilly",tags:["asp.net mvc","Marc Talary","DataAnnotations","Controller","ModelState"],hide_table_of_contents:!1},i=void 0,s={permalink:"/2013/03/03/unit-testing-modelstate",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2013-03-03-unit-testing-modelstate/index.md",source:"@site/blog/2013-03-03-unit-testing-modelstate/index.md",title:"Unit testing ModelState",description:'- Me: "It can\'t be done"',date:"2013-03-03T00:00:00.000Z",formattedDate:"March 3, 2013",tags:[{label:"asp.net mvc",permalink:"/tags/asp-net-mvc"},{label:"Marc Talary",permalink:"/tags/marc-talary"},{label:"DataAnnotations",permalink:"/tags/data-annotations"},{label:"Controller",permalink:"/tags/controller"},{label:"ModelState",permalink:"/tags/model-state"}],readingTime:5.265,hasTruncateMarker:!1,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Unit testing ModelState",authors:"johnnyreilly",tags:["asp.net mvc","Marc Talary","DataAnnotations","Controller","ModelState"],hide_table_of_contents:!1},prevItem:{title:"DecimalModelBinder for nullable Decimals",permalink:"/2013/03/11/decimalmodelbinder-for-nullable-decimals"},nextItem:{title:"Unit testing MVC controllers / Mocking UrlHelper",permalink:"/2013/02/18/unit-testing-mvc-controllers-mocking"}},d={authorsImageUrls:[void 0]},p=[{value:"Simple scenario",id:"simple-scenario",level:2},{value:"Back to the dispute",id:"back-to-the-dispute",level:2},{value:"Now I get to learn something",id:"now-i-get-to-learn-something",level:2},{value:"An example",id:"an-example",level:2},{value:"Wrapping up",id:"wrapping-up",level:2}],c={toc:p};function u(e){var{components:t}=e,n=l(e,["components"]);return(0,a.kt)("wrapper",o({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Me: "It can\'t be done"'),(0,a.kt)("li",{parentName:"ul"},'Him: "Yes it can"'),(0,a.kt)("li",{parentName:"ul"},'Me: "No it can\'t"'),(0,a.kt)("li",{parentName:"ul"},'Him: "Yes it can, I\'ve just done it"'),(0,a.kt)("li",{parentName:"ul"},'Me: "Ooooh! Show me ..."')),(0,a.kt)("p",null,"The above conversation (or one much like it) took place between my colleague Marc Talary and myself a couple of weeks ago. It was one of those faintly embarrassing situations where you state your case with absolute certainty only to subsequently discover that you were ","*",(0,a.kt)("strong",{parentName:"p"},"completely"),"*"," wrong. Ah arrogance, thy name is Reilly..."),(0,a.kt)("p",null,"The disputed situation in this case was ModelState validation in ASP.Net MVC. How can you unit test a models validation driven by ",(0,a.kt)("inlineCode",{parentName:"p"},"DataAnnotations"),"? If at all. Well it can be done, and here's how."),(0,a.kt)("h2",o({},{id:"simple-scenario"}),"Simple scenario"),(0,a.kt)("p",null,"Let's start with a simple model:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-cs"}),'using System;\nusing System.ComponentModel.DataAnnotations;\n\nnamespace MyNamespace.Model\n{\n    public class CarModel\n    {\n        [Required,\n         Display(Name = "Purchased"),\n         DisplayFormat(DataFormatString = "{0:d}", ApplyFormatInEditMode = true)]\n        public DateTime Purchased { get; set; }\n\n        [Required,\n         Display(Name = "Colour")]\n        public string Colour{ get; set; }\n    }\n}\n')),(0,a.kt)("p",null,"And let's have a controller which makes use of that model:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-cs"}),'using System.Web.Mvc;\n\nnamespace MyApp\n{\n    public class CarController : Controller\n    {\n        //...\n\n        public ActionResult Edit(CarModel model)\n        {\n            if (ModelState.IsValid) {\n              //Save the model\n              return View("Details", model);\n            }\n\n            return View(model);\n        }\n\n        //...\n    }\n}\n')),(0,a.kt)("p",null,"When I was first looking at unit testing this I was slightly baffled by the behaviour I witnessed. I took an invalid model (where the properties set on the model were violating the model's validation ",(0,a.kt)("inlineCode",{parentName:"p"},"DataAnnotations"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-cs"}),"var car = new CarModel\n{\n    Puchased = null, //This is a required property and so this value is invalid\n    Colour = null //This is a required property and so this value is invalid\n};\n")),(0,a.kt)("p",null,"I passed the invalid model to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Edit")," controller action inside a unit test. My expectation was that the ",(0,a.kt)("inlineCode",{parentName:"p"},"ModelState.IsValid")," code path would ","*",(0,a.kt)("strong",{parentName:"p"},"not"),"*"," be followed as this was ","*",(0,a.kt)("strong",{parentName:"p"},"not"),"*"," a valid model. So ",(0,a.kt)("inlineCode",{parentName:"p"},"ModelState.IsValid")," should evaluate to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),", right? Wrong!"),(0,a.kt)("p",null,"Contrary to my expectation the validity of ",(0,a.kt)("inlineCode",{parentName:"p"},"ModelState")," is not evaluated on the fly inside the controller. Rather it is determined during the model binding that takes place ","*",(0,a.kt)("strong",{parentName:"p"},"before"),"*"," the actual controller action method is called. And that completely explains why during my unit test with an invalid model we find we're following the ",(0,a.kt)("inlineCode",{parentName:"p"},"ModelState.IsValid")," code path."),(0,a.kt)("h2",o({},{id:"back-to-the-dispute"}),"Back to the dispute"),(0,a.kt)("p",null,"As this blog post started off I was slightly missing Marc's point. I thought he was saying we should be testing the ",(0,a.kt)("inlineCode",{parentName:"p"},"ModelState.IsValid == false")," code path. And given that ",(0,a.kt)("inlineCode",{parentName:"p"},"ModelState")," is determined before we reach the controller my view was that the only way to achieve this was through making use of ",(0,a.kt)("inlineCode",{parentName:"p"},"ModelState.AddModelError")," in our unit test (you can read a good explanation of that ",(0,a.kt)("a",o({parentName:"p"},{href:"http://stackoverflow.com/a/3816143/761388"}),"here"),"). And indeed we were already testing for this; we were surfacing errors via a ",(0,a.kt)("inlineCode",{parentName:"p"},"JsonResult")," and so had a test in place to ensure that ",(0,a.kt)("inlineCode",{parentName:"p"},"ModelState")," errors were transformed in the manner we would expect."),(0,a.kt)("p",null,"However, Marc's point was actually that we should have unit tests that enforced our design. That is to say, if we'd decided a certain property on a model was mandatory we should have a test that checked that this was indeed the case. If someone came along later and removed the ",(0,a.kt)("inlineCode",{parentName:"p"},"Required")," data annotation then we wanted that test to fail."),(0,a.kt)("p",null,"It's worth saying, we didn't want a unit test to ensure that ASP.Net MVC worked as expected. Rather, where we had used DataAnnotations against our models to drive validation, we wanted to ensure the validation didn't disappear further down the track. Just to be clear: we wanted to test our code, not Microsoft's."),(0,a.kt)("h2",o({},{id:"now-i-get-to-learn-something"}),"Now I get to learn something"),(0,a.kt)("p",null,"When I grasped Marc's point I thought that the the only way to write these tests would be to make use of reflection. And whilst we could certainly do that I wasn't entirely happy with that as a solution. To my mind it was kind of testing \"at one remove\", if you see what I mean. What I really wanted was to see that MVC was surfacing validations in the manner I might have hoped. And you can!"),(0,a.kt)("p",null,".... Drum roll... Ladies and gents may I present Marc's ",(0,a.kt)("inlineCode",{parentName:"p"},"ModelStateTestController"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-cs"}),"using System.Web.Mvc;\nusing Moq;\n\nnamespace UnitTests.TestUtilities\n{\n    /// <summary>\n    /// Instance of a controller for testing things that use controller methods i.e. controller.TryValidateModel(model)\n    /// </summary>\n    public class ModelStateTestController : Controller\n    {\n        public ModelStateTestController()\n        {\n            ControllerContext = (new Mock<ControllerContext>()).Object;\n        }\n\n        public bool TestTryValidateModel(object model)\n        {\n            return TryValidateModel(model);\n        }\n    }\n}\n")),(0,a.kt)("p",null,"This class is, as you can see, incredibly simple. It is a controller, it inherits from ",(0,a.kt)("inlineCode",{parentName:"p"},"System.Web.Mvc.Controller")," and establishes a mock context in the constructor using MOQ. This controller exposes a single method: ",(0,a.kt)("inlineCode",{parentName:"p"},"TestTryValidateModel"),". This method internally determines the controller's ",(0,a.kt)("inlineCode",{parentName:"p"},"ModelState")," given the supplied object by calling off to Mvc's (protected) ",(0,a.kt)("inlineCode",{parentName:"p"},"TryValidateModel")," method (",(0,a.kt)("inlineCode",{parentName:"p"},"TryValidateModel")," evaluates ",(0,a.kt)("inlineCode",{parentName:"p"},"ModelState"),")."),(0,a.kt)("p",null,"This simple class allows us to test the validations on a model in a simple fashion that stays close to the way our models will actually be used in the wild. It's pragmatic and it's useful."),(0,a.kt)("h2",o({},{id:"an-example"}),"An example"),(0,a.kt)("p",null,"Let me wrap up with an example unit test. The test below makes use of the ",(0,a.kt)("inlineCode",{parentName:"p"},"ModelStateTestController")," to check the application of the DataAnnotations on our model:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-cs"}),'[TestMethod]\npublic void Unit_Test_CarModel_ModelState_validations_are_thrown()\n{\n    // Arrange\n    var controller = new ModelStateTestController();\n    var car = new CarModel\n    {\n        Puchased = null, //This is a required property and so this value is invalid\n        Colour = null //This is a required property and so this value is invalid\n    };\n\n    // Act\n    var result = controller.TestTryValidateModel(company);\n\n    // Assert\n    Assert.IsFalse(result);\n\n    var modelState = controller.ModelState;\n\n    Assert.AreEqual(2, modelState.Keys.Count);\n\n    Assert.IsTrue(modelState.Keys.Contains("Purchased"));\n    Assert.IsTrue(modelState["Purchased"].Errors.Count == 1);\n    Assert.AreEqual("The Purchased field is required.", modelState["Purchased"].Errors[0].ErrorMessage);\n\n    Assert.IsTrue(modelState.Keys.Contains("Colour"));\n    Assert.IsTrue(modelState["Colour"].Errors.Count == 1);\n    Assert.AreEqual("The Colour field is required.", modelState["Colour"].Errors[0].ErrorMessage);\n}\n')),(0,a.kt)("h2",o({},{id:"wrapping-up"}),"Wrapping up"),(0,a.kt)("p",null,"In a way I think it's a shame that ",(0,a.kt)("inlineCode",{parentName:"p"},"TryValidateModel")," is a protected method. If it weren't it would be simplicity to write a unit test which tested the ModelState directly in context of the action method. It would be possible to get round this by establishing a base controller class which all our controllers would inherit from which implemented the ",(0,a.kt)("inlineCode",{parentName:"p"},"TestTryValidateModel")," method from above. On the other hand maybe it's good to have clarity of the difference between testing model validations and testing controller actions. Something to ponder..."))}u.isMDXComponent=!0}}]);