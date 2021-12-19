---
title: 'DecimalModelBinder for nullable Decimals'
authors: johnnyreilly
tags: [Phil Haack, Globalization, ModelBinder, nullable, decimal]
hide_table_of_contents: false
---

My memory appears to be a sieve. Twice in the last year I've forgotten that MVCs ModelBinding doesn't handle regionalised numbers terribly well. Each time I've thought "hmmmm.... best Google that" and lo and behold come upon this post on the issue by the fantastic Phil Haack:

[http://haacked.com/archive/2011/03/19/fixing-binding-to-decimals.aspx ](http://haacked.com/archive/2011/03/19/fixing-binding-to-decimals.aspx)

This post has got me 90% of the way there, the last 10% being me tweaking it so the model binder can handle nullable decimals as well.

In the expectation I that I may forget this again I thought I'd note down my tweaks now and hopefully save myself sometime when I'm next looking at this next...

<script src="https://gist.github.com/johnnyreilly/5135647.js?file=DecimalModelBinder.cs"></script>

## And now a question...

Why hasn't MVC got an out-of-the-box model binder that does this anyway? In Phil Haack's original post it looks like they were considering putting this into MVC itself at some point:

"_... In that case, the DefaultModelBinder chokes on the value. This is unfortunate because jQuery Validate allows that value just fine. I’ll talk to the rest of my team about whether we should fix this in the next version of ASP.NET MVC, but for now it’s good to know there’s a workaround..._"

If anyone knows the reason this never made it into core I'd love to know. Maybe there's a good reason?
