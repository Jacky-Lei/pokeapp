# PokeApp

## Running

First `npm install` to grab all the necessary dependencies.

Then run `npm start` and open <localhost:7770> in your browser.

## Production Build

Run `npm build` to create a distro folder and a bundle.js file.

## Credit

https://github.com/wesbos/Learn-Redux-Starter-Files for boilerplate

## Things that can be improved

Image caching
Expand beyond original 150 pokemon
Randomize mini-pokemon for each type
make status lights flashing on top during loading

made fetching reducer because it's just for UI, it would have been complicated
and not clean if pokemon, type, subtype, each had a fetching cuz pokemon and type
go together, and then subtype and type go together so it gets messing

didn't have all of props/dispatch go through type holder, but held out some for pokelist
because it would have taken more logic to separate things between each list
