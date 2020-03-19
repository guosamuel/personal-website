---
path: "https://medium.com/swlh/understanding-whats-happening-under-the-hood-with-source-codes-and-existing-methods-3bca47cb5757"
date: "January 12, 2020"
title: "Understanding What’s Happening “Under the Hood” with Source Codes and Existing Methods"
---

Seed data is an essential part of the development process. Seed data can be dummy data that your code uses to confirm your code is doing exactly what it is supposed to do. This is slightly different from tests because the data can be used throughout your codebase where necessary. Seed data goes along the thought process of behavioral driven development, where depending on the output of your seed data, you may need to tweak your code accordingly.
Although it is very straight-forward to create seed data, you may run into issues creating the seed data itself. One instance where I ran into this was creating seed data where the user has a secured password via BCrypt. BCrypt is a gem in Rails where it salts and hashes your password, making it indecipherable to the human eye. An example is if my password is 123, then the salted and hashed password may look like $2a$04$iOfhwahFymCs5weB3BNH/uXkTG65HR.qpW.bNhEjFP3ftli3o5DQC .

I wouldn’t worry about the concept of salting and hashing for the blog or the the BCrypt gem itself. You can think of salting and hashing as encryption for your password. Although I would be using these terms, the majority of the blog will be on password , password_digest , find_or_create_by, and has_secure_password .
