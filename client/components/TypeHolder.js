import React, { Component } from 'react'
import TypeList from './TypeList'

const TypeHolder = ({pokeType, onTypeClick}) => (
  <div>
    weakAgainst: <TypeList info={pokeType.weakAgainst} onClick={onTypeClick} />
    strongAgainst: <TypeList info={pokeType.strongAgainst} onClick={onTypeClick} />
  </div>
)

export default TypeHolder
