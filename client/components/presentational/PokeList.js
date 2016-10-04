import React from 'react'
import { extractPokeNum } from '../../helpers/helpers'
import ListedPokemon from './ListedPokemon'
import loading from '../../images/loading.gif'

const PokeList = ({data: {fetching:{isFetchingSub}, activeSubPokeType:{pokemon}}, onListedPokemonClick }) => {
  let listedPokemonArr = []
  if (pokemon.length !== 0) {
    listedPokemonArr = pokemon.map((pokemonObj, idx) => {
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
  if (isFetchingSub) {
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
  data: React.PropTypes.shape({
    fetching: React.PropTypes.shape({
      isFetchingSub: React.PropTypes.bool.isRequired
    }).isRequired,
    activeSubPokeType: React.PropTypes.shape({
      pokemon: React.PropTypes.array.isRequired
    }).isRequired
  }).isRequired,
  onListedPokemonClick: React.PropTypes.func.isRequired
}

export default PokeList
