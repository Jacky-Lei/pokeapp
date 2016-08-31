import React, { Component } from 'react'
import MiniPokemon from './MiniPokemon'

const Type = ({onClick, name}) => {

  return (
    <li
    onClick={onClick}
    >
    {name}
    </li>
  )
}


export default Type
