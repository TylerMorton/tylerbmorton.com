---
title: 'How I built & deployed this site using Next.js'
excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.'
coverImage: 'https://source.unsplash.com/random'
date: '2020-03-16T05:35:07.322Z'
author:
  name: Tim Neutkens
  picture: '/assets/blog/authors/tim.jpeg'
ogImage:
  url: '/assets/blog/hello-world/cover.jpg'
---

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
I began development with a default next.js app, and installed necessary tools such as:
  - Remark & MDX, for reading markdown data/content.
  - Mui Joy: component library with a great styling system
Being someone who has lot's of trouble with frontend I started with a base site template from Mui Joy's template selection. With a base setup I then began to deconstruct the template to remove extraneous features.
With a basic app. I went to work adding dark/light mode, Background Image using Next.js's Image Optimization feature, and creating static pages based off of the markdown files. I would continue basic development practices to meet my minimum viable product, beautify, and refactor/optimize.

## Things I did wrong

## What I learned
