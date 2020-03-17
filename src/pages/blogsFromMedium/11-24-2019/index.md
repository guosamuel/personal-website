---
path: "https://medium.com/javascript-in-plain-english/understanding-how-to-implement-the-useeffect-hook-by-re-creating-the-automatic-update-feature-709999463656"
date: "November 24, 2019"
title: "How to implement useEffect() by recreating its Automatic Update feature"
---

In my previous blog, I touched on the surface of the useEffect() hook to set an encoded token within the local storage. I decided to dig a little more deeper into implementing this hook as a replacement for lifecycle methods.

For the sake of brevity and familiarity, the code to demonstrate using the useEffect() hook will be a combination of the code used in my Fully understanding React by creating an Automatic Update Feature and my Custom Routes With Mirage JS blogs. The update feature blog contains the componentDidMount and componentDidUpdate lifecycle methods to be replaced whereas the Mirage JS blog will be leveraging the custom routes that will trigger these lifecycle methods. If this all sounds confusing at first, don’t worry, I’m going to be breaking everything down step by step.
