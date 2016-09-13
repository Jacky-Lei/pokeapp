import React from 'react'

const clickHandler = function (e, onClick) {
  // e.stopPropagation();
  onClick();
}

const MiniPokemon = ({name, pokemonNumber, onClick}) => {
  const imageSRC = `http://veekun.com/dex/media/pokemon/global-link/${pokemonNumber}.png`
  console.log(pokemonNumber)
  console.log(imageSRC)
  return (
    <li className="col-xs-12 col-md-4 mini-pokemon" onClick={function (event) {clickHandler(event, onClick)}}>
    <img className="mini-pokemon-image" src={imageSRC} />
    <p className='capitalize'>{name}</p>
    </li>
  )
}

export default MiniPokemon
