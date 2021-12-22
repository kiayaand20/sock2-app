# Project Overview

<h2>Sock²</h2>

## Overview

Sock² is an online shopping app that features creative design socks. Users will be able to create an account, browse through all products, view specific product details and add individual socks to their personal shopping cart. Similarly, the app will have the functionality of adding and editing a product. The newly added products will get added to the 'New Arrivals' page.

## Wireframes

![wireframe](https://res.cloudinary.com/kacloud20/image/upload/v1640190453/project3/home_f5oljf.png)

![wireframe](https://res.cloudinary.com/kacloud20/image/upload/v1640190479/project3/overview_wz2v4b.png)

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

Product:

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

![wireframe](https://res.cloudinary.com/kacloud20/image/upload/v1640192129/project3/Sock_2_Flow_Chart_j81mnz.png)

## MVP

[Github Projects](https://github.com/kiayaand20/sock2-app/projects/1)

General:

- Successful deployment to Netlify
<hr>
Frontend:

- Full CRUD of products
- Responsive Design
- Seamless API Data render from Mongoose
<hr>
Backend:

- User Authentication
- Utilize MongoDB for CRUD

## Post-MVP

- Create fully functional shopping cart

## Team Expectations

[View Here](https://docs.google.com/document/d/1uSezrLJbMq6rBg5HqUDfRKD8WZkGkhpFG5cvd0mYxk0/edit)
