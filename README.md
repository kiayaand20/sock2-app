# SockSquared Overview

<h1>Sock²</h1>

## Description

Sock² is an online shopping app that features creative design socks. Users will be able to create an account, browse through all sock inventory, view specific sock details and add individual socks to their personal shopping cart. Similarly, the app will have the functionality of adding, editing, and deleting a sock. The newly added socks will be included on the details(listing) page.

## Wireframes

![wireframe](https://res.cloudinary.com/kacloud20/image/upload/v1640190453/SockSquared3/home_f5oljf.png)

![wireframe](https://res.cloudinary.com/kacloud20/image/upload/v1640202424/SockSquared3/allpages_jimois.png)

Figma url: https://www.figma.com/file/IYDUnaxLcvPSxfahnwYns5/Nitesh-Misra's-team-library?node-id=0%3A1

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

![wireframe](https://res.cloudinary.com/kacloud20/image/upload/v1640202336/SockSquared3/Sock_2_Flow_Chart_1_vfcrcz.png)

## MVP

[Github SockSquareds](https://github.com/kiayaand20/sock2-app/SockSquareds/1)

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

## Team Expectations

[View Here](https://docs.google.com/document/d/1uSezrLJbMq6rBg5HqUDfRKD8WZkGkhpFG5cvd0mYxk0/edit)
