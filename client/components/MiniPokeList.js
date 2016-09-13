import React, { Component } from 'react'
import MiniPokemon from './MiniPokemon'
import { extractPokeNum } from '../helpers/helpers'
import loading from '../images/small.gif';

const Type = ({onMiniPokemonClick, miniPokemon=[], fetching}) => {
  var miniPokemonArr = []
  if (miniPokemon) {
    miniPokemonArr = miniPokemon.map(function (pokemonObj, idx) {
      const pokemonNumber = extractPokeNum(pokemonObj.pokemon.url)
      console.log(pokemonNumber)
      // need to grab number out of pokemonObj.pokemon.url
      return (<MiniPokemon key={idx} name={pokemonObj.pokemon.name} pokemonNumber={pokemonNumber} onClick={() => onMiniPokemonClick(pokemonObj.pokemon.name)} />)
    })
  }
  if (fetching) {
    return (
      <div className="text-align-center">
        <img className="loading-small" src = {loading} alt="" />
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


export default Type
