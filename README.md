# SockSquared Overview

[<h1>Sock²</h1>](https://socksquared.netlify.app)

## Description

Sock² is an online shopping app that features creative design socks. Users will be able to create an account, browse through all sock inventory, view specific sock details and add individual socks to their personal shopping cart. Similarly, the app will have the functionality of adding, editing, and deleting a sock. The newly added socks will be included on the new arrivals page.

App url: https://socksquared.netlify.app

## Wireframes

![wireframe](https://res.cloudinary.com/kacloud20/image/upload/v1641570515/project3/image_kxrd1y.png)

Figma url: https://www.figma.com/file/IYDUnaxLcvPSxfahnwYns5/Sock%5E2?node-id=433%3A133

## Schema

User:

```
{
  email: { type: String, required: true },
  username: {type: String, required: true },
  password_digest: { type: String, required: true, select: false },
  },
  { timestamps: true }

```

Sock Details:

```
{
    name: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true },
    imgURL: { type: String, required: true },
    sock1: { type: String, required: true },
    sock2: { type: String, required: false }
  },
  { timestamps: true }

```

## Whimsical Flowchart

![wireframe](https://res.cloudinary.com/kacloud20/image/upload/v1641568880/project3/Sock_2_Flow_Chart_2_dtbww4.png)

## MVP

[Github Projects](https://github.com/kiayaand20/sock2-app/projects/1)

Client (Frontend):

- Full CRUD of product items (socks)
- Responsive Application Design
- Seamless API Data render from Mongoose
- Successful deployment to Netlify
- User Authentication

Server (Backend):

- Utilize Express, Mongoose, and MongoDB for full-CRUD
- Authentication

## Post-MVP

- Create fully functional shopping cart
- Sort feature by price

## Team Expectations

[View Here](https://docs.google.com/document/d/1uSezrLJbMq6rBg5HqUDfRKD8WZkGkhpFG5cvd0mYxk0/edit)
