import React from 'react'

const clickHandler = function (e, onClick) {
  e.stopPropagation();
  onClick();
}

const MiniPokemon = ({name, onClick}) => (
  <li onClick={function (event) {clickHandler(event, onClick)}}>
    {/* <img src="http://veekun.com/dex/media/pokemon/global-link/1.png" /> */}
    {name}
  </li>
)

export default MiniPokemon
