import React, { Component } from 'react'
import MiniPokemon from './MiniPokemon'

const Type = ({onMiniPokemonClick, miniPokemon=[]}) => {
  var miniPokemonArr = []
  if (miniPokemon) {
    miniPokemonArr = miniPokemon.map(function (pokemonObj, idx) {
      console.log(pokemonObj)
      return (<MiniPokemon key={idx} name={pokemonObj.pokemon.name} pokemonNumber={pokemonObj.pokemon.id} onClick={() => onMiniPokemonClick(pokemonObj.pokemon.name)} />)
    })
  }
  return (
    <section className="col-xs-12">
      <ul className="row">
      {miniPokemonArr}
      </ul>
    </section>
  )
}


export default Type
