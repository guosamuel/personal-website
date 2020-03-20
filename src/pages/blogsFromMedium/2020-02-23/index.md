---
path: "https://medium.com/better-programming/improving-time-complexity-on-stacks-and-queues-7396ab7b5a2b"
date: "2020-02-23"
title: "Data Structures: Improving Time Complexity on Stacks and Queues"
---

In my previous blog, I provided an introduction to a niche data structure called stacks and queues. If you are unfamiliar with it, please take a quick look at my blog Stacks and Queues.

In a nutshell, stacks and queues follow the principle of first-in-last-out (stacks) and first-in-first-out (queues). However, for out-of-the-box JavaScript array methods, the time complexity for stacks is O(1) and the time complexity for queues is O(n).

Which led me to think, can we do better? Specifically, can we improve the time complexity for queues to be faster than O(n)?
