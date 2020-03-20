---
path: "https://levelup.gitconnected.com/occams-razor-keeping-the-code-short-and-simple-7ce4b60f87d4"
date: "2019-12-22"
title: "Occam’s Razor: Keeping the Code Short and Simple"
---

In my Group Randomizer application, one of the features for my MVP (minimum viable product) is creating a saving group feature. When the user clicks on the “Save Group” button, it will save the current list of options as a new group. However, the core functionality of this feature is that if it finds an existing saved group with the same options, regardless of order, then an alert will appear stating that a group with your current list of options already exist.

For example, Saved Group #1 has the list of people, “Sam” and “Bob”. If the my current list of options is “Bob” and “Sam”, and I try to save this as a new group, then an alert will pop out, stating “A saved group with your current list of options already exist. It is Saved Group #1”.

For this blog, I am going over how I created the algorithm to create this checking feature and an application of Occam’s razor. If you’re not familiar with Occam’s razor, Wikipedia’s definition is:

Occam’s razor… is the problem-solving principle that states that “Entities should not be multiplied without necessity.”
