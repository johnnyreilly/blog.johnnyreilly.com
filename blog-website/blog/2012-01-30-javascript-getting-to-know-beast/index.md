---
slug: javascript-getting-to-know-beast
title: 'JavaScript - getting to know the beast...'
authors: johnnyreilly
tags: [javascript, c#]
hide_table_of_contents: false
description: 'Discovering jQuery and advice from Elijah Manor and Douglas Crockford changes Johns initial dislike of JavaScripts quirks.'
---

So it's 2010 and I've started using jQuery. jQuery is a JavaScript library. This means that I'm writing JavaScript... Gulp! I should say that at this point in time I **hated** JavaScript (I have mentioned this previously). But what I know now is that I barely understood the language at all. All the JavaScript I knew was the result of copying and pasting after I'd hit "view source". I don't feel too bad about this - not because my ignorance was laudable but because I certainly wasn't alone in this. It seems that up until recently hardly anyone knew anything about JavaScript. It puzzles me now that I thought this was okay. I suppose like many people I didn't think JavaScript was capable of much and hence felt time spent researching it would be wasted. Just to illustrate where I was then, here is 2009 John's idea of some pretty "advanced" JavaScript:

<!--truncate-->

```html
function GiveMeASum(iNum1, iNum2) { var dteDate = new Date(); var iTotal = iNum1
+ iNum2; return "This is your total: " + iTotal + ", at this time: " +
dteDate.toString(); }

<input type="text" id="Number1" value="4" />
<input type="text" id="Number2" value="6" />
<input
  type="button"
  value="Click Me To Add"
  onclick="alert(GiveMeASum(parseInt(document.getElementById(Number1).value, 10), parseInt(document.getElementById(Number2).value, 10)))"
/>
```

I know - I'm not to proud of it... Certainly if it was a horse you'd shoot it. Basically, at that point I knew the following: - JavaScript had functions (but I knew only one way to use them - see above)

- It had some concept of numbers (but I had no idea of the type of numbers I was dealing with; integer / float / decimal / who knows?)
- It had some concept of strings
- It had a date object

This was about the limit of my knowledge. If I was right, and that's all there was to JavaScript then my evaluation of it as utter rubbish would have been accurate. I was wrong. SOOOOOOOOOOOO WRONG! I first realised how wrong I was when I opened up the jQuery source to have a read. Put simply I had \***no**\* idea what I was looking at. For a while I wondered if I was actually looking at JavaScript; the code was so different to what I was expecting that for a goodly period I considered jQuery to be some kind of strange black magic; written in a language I did not understand. I was half right. jQuery wasn't black magic. But it was written in a language I didn't understand; namely JavaScript. :-( Here beginneth the lessons... I started casting around looking for information about JavaScript. Before very long I discovered one [Elijah Manor](http://www.elijahmanor.com/) who had helpfully done a number of talks and blog posts directed at C# developers (which I was) about JavaScript. My man! - [How good C# habits can encourage bad JavaScript habits part 1](http://enterprisejquery.com/2010/10/how-good-c-habits-can-encourage-bad-javascript-habits-part-1/)

- [How good C# habits can encourage bad JavaScript habits part 2](http://enterprisejquery.com/2010/10/how-good-c-habits-can-encourage-bad-javascript-habits-part-2/)
- [How good C# habits can encourage bad JavaScript habits part 3](http://enterprisejquery.com/2010/10/how-good-c-habits-can-encourage-bad-javascript-habits-part-3/)
- [Video of Elijah Manor talking through the above material](https://blogs.msdn.com/b/ukmsdn/archive/2011/06/10/javascript-for-the-c-developer.aspx)

For me this was all massively helpful. In my development life so far I had only ever dealt with strongly typed, compiled "classical" languages. I had little to no experience of functional, dynamic and loosely typed languages (essentially what JavaScript is). Elijahs work opened up my eyes to some of the massive differences that exist. He also pointed me in the direction of the (never boring) Doug Crockford, author of the best programming book I have ever purchased: [JavaScript: The Good Parts](http://www.amazon.co.uk/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742). Who could not like a book about JavaScript which starts each chapter with a quote from Shakespeare and still comes in at only a 100 pages? It's also worth watching the man in person as he's a thoroughly engaging presence. There's loads of videos of him out there but this one is pretty good: [Douglas Crockford: The JavaScript Programming Language](http://www.youtube.com/watch?v=v2ifWcnQs6M). I don't want to waste your time by attempting to rehash what these guys have done already. I think it's always best to go to the source so I'd advise you to check them out for yourselves. That said it's probably worth summarising some of the main points I took away from them (you can find better explanations of all of these through looking at their posts): 1. JavaScript has objects but has no classes. Instead it has (what I still consider to be) the weirdest type of inheritance going: prototypical inheritance. 2. JavaScript has the simplest and loveliest way of creating a new object out there; the "JavaScript Object Literal". Using this we can simply `var myCar = { wheels: 4, colour: "blue" }` and ladies and gents we have ourselves a car! (object) 3. In JavaScript functions are [first class objects](http://en.wikipedia.org/wiki/First-class_function). This means functions can be assigned to variables (as easily as you'd assign a string to a variable) and crucially you can pass them as parameters to a function and pass them back as a return type. Herein lies power! 4. JavaScript has 6 possible values (false, null, undefined, empty strings, 0 and NaN) which it evaluates as false. These are known as the "false-y" values. It's a bit weird but on the plus side this can lead to some nicely terse code. 5. To perform comparisons in JavaScript you should avoid == and != and instead use === and !==. Before I discovered this I had been using == and != and then regularly puzzling over some truly odd behaviour. Small though it may sound, this may be the most important discovery of the lot as it was this that lead to me actually \***trusting**\* the language. Prior to this I vaguely thought I was picking up on some kind of bug in the JavaScript language which I plain didn't understand. (After all, in any sane universe should this really evaluate to true?: `0 == ""`) 6. Finally JavaScript has function scope rather than block scope. Interestingly it "hoists" variable declaration to the top of each function which can lead to some very surprising behaviour if you don't realise what is happening.

I now realise that JavaScript is a fantastic language because of it's flexibility. It is also a deeply flawed language; in part due to it's unreasonably forgiving nature (you haven't finished your line with a semi-colon; that's okay - I can see you meant to so I'll stick one in / you haven't declared your variable; not a problem I won't tell you but I'll create a new variable stick it in global scope and off we go etc). It is without question the easiest language with which to create a proper dogs breakfast. To get the best out of JavaScript we need to understand the quirks of the language and we need good patterns. If you're interested in getting to grips with it I really advise you to check out the Elijah and Dougs work - it really helped me.
