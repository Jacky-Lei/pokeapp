#PokeDex PokeApp

## Running

Run `npm install` to install dependencies and `npm start`, then open <localhost:7770> in your browser.

[Application Link][link] - http://jackylei.space/pokeapp/

[link]: http://jackylei.space/pokeapp/

## Overview

Simply type in Pokemon name and hit enter to to learn more about your favorite Pokemon, including its strengths and weaknesses so you can win more battles!

![profileScreenshot]
(http://res.cloudinary.com/akantoword/image/upload/v1474051783/Screen_Shot_2016-09-16_at_11.45.22_AM_ehw5ol.png)

Built on React, Redux, Emmascript2015, Bootstrap, Webpack, Babel, and a [link2](RESTful Poke API) this app features:
[link2]: https://pokeapi.co/

#### Selection of a strength and weakness type to see example Pokemon of that type:
![strWeakScreenshot]
(http://res.cloudinary.com/akantoword/image/upload/v1474051783/Screen_Shot_2016-09-16_at_11.45.36_AM_qribmr.png)
* Components are organized into two groups:
1. containers that are connected to the store to transmit state changes & dispatches
2. regular components that manage and display UI

* Incorporates Emmascript2015's latest features of destructuring, arrow function, and template strings to improve code legibility
* Action creators check state for caching of data to reduce redundant requests
* Requests data through promises and handles traffic and error with promise-middleware
* Traffic middleware chains requests or updates state accordingly
* Incorporates thunk middleware to manage async functions
* Webpack utilizes loaders to package css, images, and gif into convenient bundle

#### Clicking on example Pokemon will display that Pokemon as main profile:
![profileSwitchScreenshot]
(http://res.cloudinary.com/akantoword/image/upload/v1474052630/Screen_Shot_2016-09-16_at_12.03.26_PM_l5zmqj.png)
* State is broken down to manage data (pokemon & pokemonType) and UI (loading & selected pokemonType) separately
* Reuses TypeList component for both strength and weakness lists

#### App is Mobile Responsive
![mobilScreenshot]
(http://res.cloudinary.com/akantoword/image/upload/v1474051783/Screen_Shot_2016-09-16_at_11.47.44_AM_xq8zgy.png)
* Bootstrap grid system and media queries align components to respond to desktop and mobile screen sizes

#### Incorporates Error-Handing
![errorScreenshot]
(http://res.cloudinary.com/akantoword/image/upload/v1474068882/Screen_Shot_2016-09-16_at_4.34.19_PM_rbzxeg.png)
#### Loading GIFs in 2 Components Makes For Smooth Transitioning

![loadingScreenshotOne]
(http://res.cloudinary.com/akantoword/image/upload/v1474051783/Screen_Shot_2016-09-16_at_11.45.52_AM_hbmcpu.png)

![loadingScreenshotTwo]
(http://res.cloudinary.com/akantoword/image/upload/v1474051831/Screen_Shot_2016-09-16_at_11.47.03_AM_2_hx6wsh.png)
