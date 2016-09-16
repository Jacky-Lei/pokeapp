import React from 'react'
import { extractPokeNum } from '../helpers/helpers'
import MiniPokemon from './MiniPokemon'
import loading from '../images/loading.gif'

const PokeList = ({onMiniPokemonClick, miniPokemon, fetching}) => {
  let miniPokemonArr = []
  if (miniPokemon.length !== 0) {
    miniPokemonArr = miniPokemon.map((pokemonObj, idx) => {
      // Pokemon url string contains Pokemon number
      const pokemonNumber = extractPokeNum(pokemonObj.pokemon.url)
      return (
        <MiniPokemon
          name={pokemonObj.pokemon.name}
          pokemonNumber={pokemonNumber}
          onClick={() => onMiniPokemonClick(pokemonObj.pokemon.name)}
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
          {miniPokemonArr}
        </ul>
      </section>
    )
  }
}

export default PokeList
