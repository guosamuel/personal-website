---
path: "https://medium.com/better-programming/keeping-your-code-dry-1105377c9c80"
date: "February 29, 2020"
title: "Keeping Your Code DRY"
---

This past week, the majority of my time was spent on working on a coding challenge. It was definitely tough, from understanding the user stories to wireframing out the application to implementing the code to debugging.

There was a lot of going back and forth between my components. I was slowly starting to realize that when I changed one part of my code, I would need to change all the other parts of the code that was dependent on it.

By having a downstream effect of manual changes from changing one part of my code, this was violating the DRY (Don’t Repeat Yourself) principle.

When you initially write out your code, this may happen a lot more than you think. Keeping your code DRY is part of the refactoring process, so if you don’t catch it right away, that’s not a problem.
