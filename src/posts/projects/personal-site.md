---
title: 'How I built & deployed this site using Next.js'
excerpt: 'Following in the footsteps of many, many other developers I decided it was time to build a website to share my projects, research and life events.'
coverImage: 'https://source.unsplash.com/random'
date: '2020-03-16T05:35:07.322Z'
author:
  name: Tyler Morton
ogImage:
  url: '/assets/blog/hello-world/cover.jpg'
---

<img src="/next-banner.jpeg" style={{"height": "250px", "width": "100%"}}/> 


Following in the footsteps of many, many other developers I decided it was time to build a website to share my projects, research and life events.

## Design stage
I didn't spend too much time designing the site, apart from the basics.
Since my site is following the blog structure I wouldn't have to set up a fancy database or api and keep most things static.
For the site a feature I really wanted to push was a local folder structure which contained all the blog posts, articles, etc. as markdown files from which the site could scrape all the data it would need. For the UI design I wanted to keep it simple with a top navigation bar, sliding sidebar, and main content scroll.

## Stack used
- Runtime environemnt: Node.js
- Frontend framework: React Typescript / Next.js
- Frontend Component library: Mui Joy
- Backend: static Markdown files (Remark / MDX)

## Development stage
I began development with a default next.js app, and installed necessary tools:
  - Remark & MDX, for reading markdown data/content.
  - Mui Joy: component library with a great styling system.
  - React-animations: To spice up the site ;)

Being someone who has lot's of trouble with frontend I started with boilerplate from Mui Joy's great selection of templates. With a base setup I then began to to remove extraneous features. I then went to work adding dark/light mode, Background Image using Next.js's Image Optimization feature, and creating static pages based off of the markdown files. I would continue basic development practices to meet my minimum viable product, beautify the UI, and optimize the performance of the site. Having a decent minimum viable product I began to decide I was going to deploy the site. I have never deployed a site before and was a great learning experience (a.k.a I spend hours learning about tools that I never ended up using for this project). I had a docker container for the web build so I looked for options in which it would be easy to deploy a docker container. I first attempted to use aws ecs. However, I ran into way too many configuration errors that while for a industry level setup may find useful was simply a waste of time for my use case. Looking for an easy solution I came across Google Cloud Run which took me mere minutes to add my container. Finally I used godaddy to obtain a domain which I mapped with my deployed container.

## What I learned

### Tools:
- Using the react-animations libary allowed me to take a deeper dive into the emotions library and how it works. This was beneficial since another library also utilized emotion: Mui Joy.
- I learned a bit more about Next.Js especially with the generation of static pages using pattern-matching and the getStaticProps function.
- I have a small amount of experience with Mui but was able to learn about Mui Joy and some of the neat styling options it has compared with the basic Mui library.

### Design strategy
It would be better to design the UI early on either with Figma or on paper. The classic KISS principle often makes sites look extremely clean. Along this idea it would be best with Next.js applications to utilize the layout pattern for all web pages.


## Helpful resources used to build the project

https://github.com/vercel/next.js/tree/canary/examples/blog-starter
https://mdxjs.com/docs/using-mdx/
https://remark.js.org/
https://cloud.google.com/run/docs/deploying

<div style={{"height": "100px"}}></div>

