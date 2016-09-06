import React from 'react'

const clickHandler = function (e, onClick) {
  // e.stopPropagation();
  onClick();
}

const MiniPokemon = ({name, onClick}) => (
  <li className="col-xs-12 col-md-4 mini-pokemon" onClick={function (event) {clickHandler(event, onClick)}}>
    <img src="http://veekun.com/dex/media/pokemon/global-link/1.png" />
    <p>{name}</p>
  </li>
)

export default MiniPokemon
