# Image Gallery React App

A react app utilising the Unsplash Image API.


## About the Build

Besides the pretty photos, I found the Unsplash API’s extensive documentation and support a great resource for this project. The idea was to fetch photos by selecting a specific topic and displaying the collection in a scrolling gallery/carousel. 

The tools I used for this were React, HTML, SCSS and the amazing Slick JS library to build the carousel. 
 
### Functionality

You are presented with a menu bar with a list of predefined topics (grabbed from the API). Clicking on a topic fetches a collection of relevant pictures. 
You can then scroll through the collection by either clicking on the scroll-arrows or using the right and left arrow keys on your keyboard (This was to mimic the idea of using a remote control for a SmartTV app).
Once you start scrolling, the menu-bar will be switched to inactive and slide off the screen, and the gallery will stretch to take up the whole screen. When you scroll back to the start of the gallery, the menu will become active again.
 
### Areas of development
* Having finished this project, here are some key areas I feel I’ve developed in:
* Making API calls and manipulating response data.
* Components, passing state and props. 
* Working within the limits of a library and tweaking it to fit your needs for your project. 
* Working with CSS modules to ensure there are no duplicate class names in the styling sheets.
