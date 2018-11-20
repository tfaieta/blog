---
title: "Projects"
layout: page
path: "/projects"
---
#[DarkPDF](https://darkpdf.com)
An open-source, dark mode PDF viewer for MacOS and the Web.

##Why?
Every day having to read through countless PDFs while all of my other applications run in dark mode, so there was always so much contrast when I had to read PDFs because they often only come in one background color: really bright white.

##What does it do?
DarkPDF takes in a PDF file and goes through a process that turns that PDF into an SVG. Once an SVG, we can take in and modify the paths of the drawing mechanism of the DOM. This is how we produce changes in the actual SVG and when rerendered we get a 'dark mode' PDF.

##How's it built?
I wrapped a create-react-app app inside an Electron.js app so I can write in JSX/React but still be writing an app for the desktop. I had to build upon a library called react-pdf in order to convert the files from PDF into SVG and then being able to have some access to the SVG DOM. I spent a lot of time making sure that the colors of the dark mode were of high contrast, I wanted to make sure that the UI/UX was easy, quick, and beautiful so I spent time designing the front-end.

##Challenges with DarkPDF
DarkPDF has problems with rendering images and for some reason there are problems with rendering some PDF's. I'll be starting to manage the issues soon.

###[Repo](https://github.com/tfaieta/DarkPDF)

#[Tess](https://tess.fm)
A software company that focuses on making products for podcast listeners and creators. I started Tess with my cofounder Nick (both technichal) out of a love for audio and podcasts. Our love of listening to podcasts drove us to make what we thought was missing from the industry.

##The Issue:
Users should be able to create quality podcasts from their phones. We also noticed that there were many barriers to entry to maintain a podcast (high cost of hosting + distribution), we thought that this was holding back podcasting in general. We also wanted to make a podcast player that makes us really happy and enhances browsing and sharing features.

##My Role:
Managed end-to-end product development cycle, from feedback to shipment. Oversaw strategic execution of the Company’s mission in the performance and appeal of Tess. Designed and engineered a cross-platform product.

##Output:
Tess podcasting app is out on both iOS & Android. Web will be live at [app.tess.fm](https://app.tess.fm). I continue to manage Tess and will be open-sourcing our codebase in the near future.

#[EduWorld](https://devpost.com/software/eduworld-kagt65)

EduWorld was a tutoring network to match volunteer tutors to students in third world countries. 

###[Repo](https://github.com/tfaieta/eduworldhackduke)
