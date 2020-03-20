---
path: "https://medium.com/@guosamuel1114/implementation-of-nested-and-un-nested-routes-with-restful-conventions-f84285edfde6"
date: "2020-01-05"
title: "Implementation of Nested and Un-nested Routes With RESTful Conventions"
---

I am currently working on a group project, which is a web application where landlords can leave reviews of tenants. The schema is a many-to-many relationship between landlords and tenants where the join table is reviews. The group decided on using a MVC (model-view-controller) design pattern and Ruby on Rails for the backend. For my portion, I was responsible for writing the code of the Tenants Controller using RESTful conventions. The difficult part of this was figuring it out how to do it for a nested route (e.g., localhost:3000/landlords/2/tenants/4).

Although I know how to do it for an un-nested route (localhost:3000/tenants/4), this is my first attempt at making RESTful methods for a nested route. The solution was much simpler than I thought, but knowing my overthinking brain, I obviously had to overcomplicate it during my first attempt at it based on my understanding of routes.
