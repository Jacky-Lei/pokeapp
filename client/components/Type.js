import React, { Component } from 'react'
import MiniPokemon from './MiniPokemon'

const Type = ({onClick, name}) => {
  const classType = `cell type type-${name}`
  return (
    <li
    onClick={onClick}
    className={classType}
    >
    {name}
    </li>
  )
}


export default Type
