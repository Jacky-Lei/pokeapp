import React, { Component } from 'react'
import TypeList from './TypeList'

const TypeHolder = ({pokemonTypeInfo, onTypeClick}) => (
  <div>
    weakAgainst: <TypeList info={pokemonTypeInfo.weakAgainst} onClick={onTypeClick} />
    strongAgainst: <TypeList info={pokemonTypeInfo.strongAgainst} onClick={onTypeClick} />
  </div>
)

export default TypeHolder
