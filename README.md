# Adding Functionality For 100Devs Group Project

- Create some kind of reminder- notification functionality to remind you X amount of time before DUE DATE
- Make prettier? (fix Logout on the todos.ejs, format the login.ejs, signup.ejs and index.ejs still needed)
- Make website mobile responsive
- Ability for users to edit to do items
- Ability for items to be sorted by due date
- Option for users to choose between light or dark mode

# Progress
- edited todos.ejs view to include a date picker field and display on the render
- edited todos.js model to include date
- edited  todos.js controller and added date to the createTodo: async function
- Add date picker functionality for DUE BY date for each task

# Introduction

A Simple ToDo App is built using the MVC Architecture, we have also implemented "authorization" so folx can sign up, customize & personalize the app 

---

> Be sure to add that lovely star 😀 and fork it for your own copy

---

# Objectives

- It's a beginner level app created to understand how MVC concept and logins are added

---

# Who is this for? 

- It's for beginners & intermediates with little more experience, to help understand the various aspects of building a node app with some complex features

---

# Packages/Dependencies used 

bcrypt, connect-mongo, dotenv, ejs, express, express-flash, express-session, mongodb, mongoose, morgan, nodemon, passport, passport-local, validator

---

# Install all the dependencies or node packages used for development via Terminal

`npm install` 

---

# Things to add

- Create a `.env` file and add the following as `key: value` 
  - PORT: 2121 (can be any port example: 3000) 
  - DB_STRING: `your database URI` 
 ---
 
 Have fun testing and improving it! 😎



-------------------------- this needs to be done ----------------------------
- add put route for update button in Modal with info from modal -> lead to a get request to reload page
- pass the data_id to the modal (this.parent node stuff)
- goes to database with an update
- style Login page, sign up page etc.
