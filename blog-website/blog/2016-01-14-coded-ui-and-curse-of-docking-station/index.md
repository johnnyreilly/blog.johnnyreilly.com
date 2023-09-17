---
slug: coded-ui-and-curse-of-docking-station
title: 'Coded UI and the Curse of the Docking Station'
authors: johnnyreilly
tags: [automated testing]
hide_table_of_contents: false
description: 'Coded UI tests struggle with docking stations due to resolution changes, causing the mouse to miss the element its aiming for.'
---

I’ve a love / hate relationship with Coded UI. Well hate / hate might be more accurate. Hate perhaps married with a very grudging respect still underpinned by a wary bitterness. Yes, that’s about the size of it. Why? Well, when Coded UI works, it’s fab. But it’s flaky as anything. Anybody who’s used the technology is presently nodding sagely and holding back the tears. It’s all a bit... tough.

<!--truncate-->

I’ve recently discovered another quirk to add to the list. Docking stations. I was back working on a project which had a Coded UI test suite. I’d heard tell that there were problems with the tests and was just taking a look at them. The first hurdle I fell at was getting the tests to run locally. The tests had first been developed on a standard desktop build and, as much as this can ever be said of Coded UI tests, they worked. However, the future had happened. The company in question was no longer using the old school desktop towers. Nope, they’d reached for the sky and equipped the whole office with Surface Pro 3’s, hot desks, docking stations and big, big monitors. It looked terribly flash.

Coded UI was not happy.

The `Mouse.Click` behaviour wasn’t working. Most tests need the ability for users to click on buttons, dropdowns etc. That’s part of a normal UI. And so it was with these tests. This is where they fell over. The reason they fell over at this point didn’t become clear for a while. It wasn’t until we tried tweaking our implementation of the tests that we realised what was happening. The tests normally found buttons / dropdowns etc on the screen and then attempted to perform a `Mouse.Click` upon them. We changed the implementation to be subtly different. Instead of just clicking on the element we amended the test to move the mouse to the button and then perform the click.

Aha!

Rather than steadily moving towards an element and clicking, the pointer was swerving like a drunk man crossing the road at 3am. It completely missed the element it was aiming for and clicked upon a seemingly random area of the screen. This is Coded UI doing “pin the tail on the donkey”.

After more time than I'd like to admit I happened upon the solution. I tended to dock my Surface and then tune my monitor resolution to the one most optimal for coding. (ie really high res.) This is what messes with Coded UI's head; the resolution change. If I wanted to be able to run tests successfully all I had to do was switch back to the resolution I initially booted with. Alternately I could restart my computer so it launched with the resolution I was presently using.

Once you do follow this guidance Coded UI has a moment of clarity, gets sober and starts `Mouse.Click`\-ing like a pro.
