import React from 'react'

const MiniPokemon = ({name, pokemonNumber, onClick}) => {
  const imageSRC = `http://veekun.com/dex/media/pokemon/global-link/${pokemonNumber}.png`
  return (
    <li className="col-xs-12 col-md-4 mini-pokemon text-align-center" onClick={onClick}>
      <figure>
        <img className="mini-pokemon-image" src={imageSRC} />
        <figcaption className='capitalize'>{name}</figcaption>
      </figure>
    </li>
  )
}

export default MiniPokemon
