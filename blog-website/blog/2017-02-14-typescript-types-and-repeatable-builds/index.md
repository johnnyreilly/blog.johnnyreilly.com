---
slug: typescript-types-and-repeatable-builds
title: '@types is rogue'
authors: johnnyreilly
tags: []
hide_table_of_contents: false
description: 'Type definitions from Definitely Typed under @types namespace on npm cannot be trusted to follow semantic versioning, leading to breakages.'
---

Or perhaps I should call this "@types and repeatable builds"....

<!--truncate-->

The other day, on a React / TypeScript project I work on, the nightly CI build started failing. But nothing had changed in the project... What gives? After digging I discovered the reason; spome of the type definitions which my project depends upon had changed. Why did this break my build? Let’s learn some more...

We acquire type definitions via npm. Type definitions from Definitely Typed are published to npm by an [automated process](https://github.com/Microsoft/types-publisher) and they are all published under the @types namespace on npm. So, the [react type definition](https://www.npmjs.com/package/react) is published as the [@types/react](https://www.npmjs.com/package/@types/react) package, the node type definition is published as the [@types/node](https://www.npmjs.com/package/@types/node) package. The hip bone's connected to the thigh bone. You get the picture.

The npm ecosystem is essentially built on top of [semantic versioning](http://semver.org/) and they [take it seriously](https://docs.npmjs.com/getting-started/semantic-versioning). Essentially, when a package is published it should be categorised as a major release (breaking changes), a minor release (extra functionality which is backwards compatible) or a patch release (backwards compatible bug fixes).

Now we get to the meat of the matter: @types is rogue. You cannot trust the version numbers on @types packages to respect semantic versioning. They don't.

The main reason for this is that when it comes to versioning, the @types type definition essentially looks to mirror the version of the package they are seeking to type. _THIS MEANS THE TYPE DEFINITION CANNOT DO ITS OWN SEMANTIC VERSIONING._ A simple change in a type definition can lead to breakages in consuming code. That's what happened to me. Let's say an exported interface name changes; all code that relies upon the old name will now break. You see? Pain.

## How do we respond to this?

My own take has been to pin the version numbers of @types packages; fixing to specific definitions. No `"~"` or `"^"` for my `@types devDependencies`.

No respect semantic versioning? No problem. You can go much further with repeatable builds and made use of [facebook's new npm client yarn](https://code.facebook.com/posts/1840075619545360) and [lockfiles](https://yarnpkg.com/blog/2016/11/24/lockfiles-for-all/) (very popular BTW) but I haven't felt the need yet. This should be ample for now.

The other question that may be nagging at your subconscious is this: what’s an easy way to know when new packages are available for my project dependencies? Well, the `Get-Package -Updates` (nuget hat tip) for npm that I’d recommend is this: [npm-check-updates](https://www.npmjs.com/package/npm-check-updates). It does the job wonderfully.
