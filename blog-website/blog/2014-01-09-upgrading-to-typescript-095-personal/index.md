---
slug: upgrading-to-typescript-095-personal
title: 'Upgrading to TypeScript 0.9.5 - A Personal Memoir'
authors: johnnyreilly
tags: [typescript]
hide_table_of_contents: false
description: 'Upgrade to TypeScript 0.9.5 worth it despite Visual Studio issues. Declaration merging glitches resolved by interface-driven approach.'
---

I recently made the step to upgrade from TypeScript 0.9.1.1 to 0.9.5. To my surprise this process was rather painful and certainly not an unalloyed pleasure. Since I'm now on the other side, so to speak, I thought I'd share my experience and cast back a rope bridge to those about to journey over the abyss.

<!--truncate-->

## TL;DR

TypeScript 0.9.5 is worth making the jump to. However, if you are using Visual Studio (as I would guess many are) then you should be aware of a number of problems with the TypeScript Visual Studio tooling for TS 0.9.5. These problems can be worked around if you follow the instructions in this post.

## Upgrading the Plugin

At home I upgraded the moment TS 0.9.5 was released. This allowed me to help with migrating the [Definitely Typed typings](https://github.com/borisyankov/DefinitelyTyped) over from 0.9.1.1. And allowed me to give TS 0.9.5 a little test drive. However, I deliberately held off performing the upgrade at work until I knew that all the Definitely Typed typings had been upgraded. This was completed [by the end of 2013](https://github.com/borisyankov/DefinitelyTyped/pull/1385). So in the new year it seemed a good time to make the move.

If, like me, you are using TypeScript inside Visual Studio then you'd imagine it's as simple as closing down VS, uninstalling TypeScript 0.9.1.1 from Programs and Features and then installing the [new plugin](http://www.typescriptlang.org/#Download). And it is if you are running IE 10 or IE 11 on your Windows machine. If you are running a lower IE version then there is a problem.

Regrettably, the TypeScript 0.9.5 plugin installer has a dependency on IE 10. Fortunately TypeScript itself has no dependency on IE 10 at all (and why would it?). This dependency appears to have been a mistake. I [raised it as an issue](https://typescript.codeplex.com/workitem/1975) and the TS team have said that this will be resolved in the next major release.

Happily there is a workaround if you're running IE 9 or lower which has been noted in the [comments underneath the TS 0.9.5 release blog post](https://blogs.msdn.com/b/typescript/archive/2013/12/05/announcing-typescript-0-9-5.aspx). All you do is set the `HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Microsoft\Internet Explorer\svcVersion` registry key value to `10.0.9200.16384` for the duration of the install.

First hurdle jumped, the upgrade continues simple enough. Then the fun starts...

## Declaration Merging is dead... Sort of

Having upgraded my plugin I opened up the project I'm working on in Visual Studio. I used NuGet to upgrade all the Definitely Typed packages to the latest (TS 0.9.5) versions. Then I tried, and failed, to compile. It was the the most obscure error I've seen in a while:

```ts
VSTSC : tsc.js(37574, 25) Microsoft JScript runtime error : Unable to get value of the property 'wrapsSomeTypeParameter': object is null or undefined
```

As you can see there was no indication where in my code the problem was being caused. Fortunately someone had already suffered this particular problem and logged an issue [here](https://typescript.codeplex.com/workitem/1995). Digging through the comments I found a common theme; everyone experiencing the problem was using the [Q typings](https://github.com/borisyankov/DefinitelyTyped/blob/master/q/Q.d.ts). So what's up with that?

Strangely, if you directly referenced the Q typings everything was okay - which is how the Definitely Typed tests came to pass in the first place. But if you wanted to make use of these typings with implicit referencing (in Visual Studio since TS 0.9.1, all TypeScript files in a project are considered to be referencing each other) - well it doesn't work.

I decided to take a look at the Q typings at this point to see what was so upsetting about them. The one thing that was obvious was that these typings make use of [Declaration Merging](https://blogs.msdn.com/b/typescript/archive/2013/06/18/announcing-typescript-0-9.aspx). And this made them slightly different to most of the other typing libraries that I was using. So I decided to refactor the Q typings to use the more interface driven approach the other typing libraries used in the hope that might resolve the issue.

Roughly speaking I went from:

```ts
declare function Q<T>(promise: Q.IPromise<T>): Q.Promise<T>;
declare function Q<T>(promise: JQueryPromise<T>): Q.Promise<T>;
declare function Q<T>(value: T): Q.Promise<T>;

declare module Q {
  //… functions etc in here
}

declare module 'q' {
  export = Q;
}
```

To:

```ts
interface QIPromise<T> {
    //… functions etc in here
}

interface QDeferred<T> {
    //… functions etc in here
}

interface QPromise<T> {
    //… functions etc in here
}

interface QPromiseState<T> {
    //… functions etc in here
}

interface QStatic {

    <t>(promise: QIPromise<T>): QPromise<T>;
    <t>(promise: JQueryPromise<T>): QPromise<T>;
    <t>(value: T): QPromise<T>;

    //… other functions etc continue here
}

declare module "q" {
    export = Q;
}
declare var Q: QStatic;
</t></t></t>
```

And that fixed the obscure 'wrapsSomeTypeParameter' error. The full source code of these amended typings can be found as a GitHub Repo [here](https://github.com/johnnyreilly/Q-TS-0.9.5-WorkAround) in case you want to use it yourself. (I did originally consider adding this to Definitely Typed but opted not to in the end - [see discussion on GitHub](https://github.com/borisyankov/DefinitelyTyped/pull/1497).)

<!-- <h4>TypeScript Language Service</h4> <p>At this point I could compile - which was fantastic.  However, the strangest thing: all the typings from other files were undetected.  Despite having the jQuery, Q, Knockout etc typings within my project the TypeScript Language Service was not detecting them.  The TypeScript Language Service (if you're not aware of it) is the supplier of Intellisense and all that good stuff which Visual Studio uses to give you a rich IDE.  This lead to the odd experience of being able to compile my TypeScript successfully (the compiler could detect my typings) but having a code editor that was a sea of red squiggly lines.</p> <p>There's a happy ending here - for although TypeScript 0.9.5 had delivered the problem it had also delivered a solution.  <a href="https://blogs.msdn.com/b/typescript/archive/2013/12/05/announcing-typescript-0-9-5.aspx" target="_blank">With TypeScript 0.9.5 you can now make use of a <code>_references.ts</code> file</a>:</p> <blockquote cite="https://blogs.msdn.com/b/typescript/archive/2013/12/05/announcing-typescript-0-9-5.aspx"><em><p>"With the previous improvements to the Visual Studio experience, we've moved to projects implicitly referencing the .ts files contained in the project.  This cut down on having to explicitly reference your files in the project, bringing the experience much closer to C#.  Unfortunately, it also did not work well when using the option to concatenate your output .js file.</p> <p>We're continuing to improve this experience.  Starting with 0.9.5, you can now add an <code>_references.ts</code> file to your project.  This file will be the first passed to the compiler, allowing you more control over the order the generated .js file when used in combination with the Combine JavaScript output into file option (the equivalent of using the --out commandline option)."</p></em></blockquote> <p>By adding an <code>_references.ts</code> file to our project we able to get the TypeScript Language Service functioning once more.  There were a couple of "gotchas" that you should be aware of:</p> <ul><li>You may already have a <code>_references.<strong>js</strong></code> file in your project.  It drives the JavaScript Intellisense Visual Studio provides.  So if you have parts of your application that are just straight JavaScript (we do) and you still want your Intellisense to persist then be certain to place your <code>_references.ts</code> file where it doesn't compile and delete your a <code>_references.<strong>js</strong></code> file.</li><li>Make sure your <code>_references.ts</code> contains <em>all</em> TypeScript files in your project.  Without this you don't have a functioning TypeScript Language Service.</li><li>Occasionally the problem will re-occur; the TypeScript Language Service will stop working again.  This can generally be righted by opening your <code>_references.ts</code> inside Visual Studio.  A little flaky I know.</li></ul> <p>In the end <a href="https://typescript.codeplex.com/workitem/2071" target="_blank">I logged the issue on CodePlex</a> and I'm hopeful it will be resolved in subsequent versions of TypeScript.</p>-->

## The Promised Land

You're there. You've upgraded to the new plugin and the new typings. All is compiling as it should and the language service is working as well. Was it worth it? I think yes, for the following reasons:

1. TS 0.9.5 compiles faster, and hogs less memory.
2. When we compiled with TS 0.9.5 we found there were a couple of bugs in our codebase which the tightened up compiler was now detecting. Essentially where we'd assumed types were flowing through to functions there were a couple of occasions with TS 0.9.1.1 where they weren't. Where we'd assumed we had a type of `T` available in a function whereas it was actually a type of `any`. I was really surprised that this was the case since we were already making use of `noImplicitAny` compiler flag in our project. So where a type had changed and a retired property was being referenced TS 0.9.5 picked up an error that TS 0.9.1.1 had not. Good catch!
3. And finally (and I know these are really minor), the compiled JS is a little different now. Firstly, the compiled JS features all of TypeScript comments in the positions that you might hope for. Previously it seemed that about 75% came along for the ride and ended up in some strange locations sometimes. Secondly, enums are treated differently during compilation now - where it makes sense the actual backing value of an enum is used rather than going through the JavaScript construct. So it's a bit like a `const` I guess - presumably this allows JavaScript engines to optimise a little more.

I hope I haven't put you off with this post. I think TypeScript 0.9.5 is well worth making the leap for - and hopefully by reading this you'll have saved yourself from a few of the rough edges.
