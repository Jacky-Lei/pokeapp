import React, { Component } from 'react'
import TypeList from './TypeList'

const TypeHolder = ({pokeType, onTypeClick}) => (
  <div className="row">
    <section className="col-xs-12 col-md-6">
      <h5 className='str-weak-header'>Strong Against:</h5>
      <TypeList info={pokeType.weakAgainst} onClick={onTypeClick} />
    </section>
    <section className="col-xs-12 col-md-6">
      <h5 className='str-weak-header'>Weak Against:</h5>
        <TypeList info={pokeType.strongAgainst} onClick={onTypeClick} />
    </section>
  </div>
)

export default TypeHolder
