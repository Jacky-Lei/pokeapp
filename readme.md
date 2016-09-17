#PokeApp

[Application Link - http://jackylei.space/pokeapp/][link]
[link]: http://jackylei.space/pokeapp/

## Overview
Simply type in Pokemon name and hit enter to to learn more about your favorite Pokemon! This app is built on React, Redux, Emmascript2015, Bootstrap, Webpack, Babel, and a [RESTful Pokemon API][apiLink].
[apiLink]: https://pokeapi.co/

![profileScreenshot]
(http://res.cloudinary.com/akantoword/image/upload/v1474051783/Screen_Shot_2016-09-16_at_11.45.22_AM_ehw5ol.png)
* Components are organized into two groups:
1. (smart) containers that are connected to the store to transmit state changes & dispatches
2. (dumb) presentational components that manage and display UI
* Incorporates Emmascript2015's latest features of destructuring, arrow function, and template strings to improve code legibility
* Action creators align with reducers to cache data to remove redundant requests
* Thunk and custom promise middlewares handles responses and errors
* Custom traffic middleware chains requests or updates state accordingly
* Webpack utilizes loaders to package css, images, and fonts into convenient bundle

#### Select a strength and weakness type to see example Pokemon of that type:
![strWeakScreenshot]
(http://res.cloudinary.com/akantoword/image/upload/v1474051783/Screen_Shot_2016-09-16_at_11.45.36_AM_qribmr.png)
* State is broken down to manage data (pokemon & pokemonType) and UI (loading & selected pokemonType) separately
* Reuses TypeList component for both strength and weakness lists

#### Click through Pokemon to display it as main profile:
![profileSwitchScreenshot]
(http://res.cloudinary.com/akantoword/image/upload/v1474052630/Screen_Shot_2016-09-16_at_12.03.26_PM_l5zmqj.png)

#### App is Mobile Responsive:
![mobilScreenshot]
(http://res.cloudinary.com/akantoword/image/upload/v1474051783/Screen_Shot_2016-09-16_at_11.47.44_AM_xq8zgy.png)
* Bootstrap grid system and media queries align components to respond to desktop and mobile screen sizes

#### Incorporates Error-Handing:
![errorScreenshot]
(http://res.cloudinary.com/akantoword/image/upload/v1474068882/Screen_Shot_2016-09-16_at_4.34.19_PM_rbzxeg.png)

#### Loading GIFs in 2 Components Makes For Smooth Transitioning:
![loadingScreenshotOne]
(http://res.cloudinary.com/akantoword/image/upload/v1474051783/Screen_Shot_2016-09-16_at_11.45.52_AM_hbmcpu.png)
![loadingScreenshotTwo]
(http://res.cloudinary.com/akantoword/image/upload/v1474051831/Screen_Shot_2016-09-16_at_11.47.03_AM_2_hx6wsh.png)

## Running:
Run `npm install` to install dependencies and `npm start`, then open <localhost:7770> in your browser
