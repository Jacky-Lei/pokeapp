import React, { Component } from 'react'
import MiniPokemon from './MiniPokemon'

const Type = ({onClick, name, onMiniPokemonClick, miniPokemon=[]}) => {
  var miniPokemonArr = []
  if (miniPokemon) {
    miniPokemonArr = miniPokemon.map(function (pokemonObj, idx) {
      return (<MiniPokemon key={idx} name={pokemonObj.pokemon.name} onClick={() => onMiniPokemonClick(pokemonObj.pokemon.name)} />)
    })
  }
  return (
    <li
    onClick={onClick}
    >
    {name}
    <ul>
    {miniPokemonArr}
    </ul>
    </li>
  )
}


export default Type
