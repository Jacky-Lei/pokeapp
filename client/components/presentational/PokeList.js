import React from 'react'
import { extractPokeNum } from '../../helpers/helpers'
import ListedPokemon from './ListedPokemon'
import loading from '../../images/loading.gif'

const PokeList = ({fetching, listedPokemon, onListedPokemonClick }) => {
  let listedPokemonArr = []
  if (listedPokemon.length !== 0) {
    listedPokemonArr = listedPokemon.map((pokemonObj, idx) => {
      // Pokemon url string contains Pokemon number
      const pokemonNumber = extractPokeNum(pokemonObj.pokemon.url)
      return (
        <ListedPokemon
          name={pokemonObj.pokemon.name}
          pokemonNumber={pokemonNumber}
          onClick={() => onListedPokemonClick(pokemonObj.pokemon.name)}
          key={idx}
        />
      )
    })
  }
  if (fetching) {
    return (
      <div className="text-align-center">
        <img className="loading-small" src={loading} alt="pokeball shaking loading gif" />
      </div>
    )
  } else {
    return (
      <section className="col-xs-12">
        <ul className="row">
          {listedPokemonArr}
        </ul>
      </section>
    )
  }
}

PokeList.propTypes = {
  fetching: React.PropTypes.bool.isRequired,
  listedPokemon: React.PropTypes.array.isRequired,
  onListedPokemonClick: React.PropTypes.func.isRequired
}

export default PokeList
