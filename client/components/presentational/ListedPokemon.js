import React from 'react'

const ListedPokemon = ({name, pokemonNumber, onClick}) => {
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

ListedPokemon.propTypes = {
  name: React.PropTypes.string.isRequired,
  pokemonNumber: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired
}

export default ListedPokemon
