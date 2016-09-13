import React, { Component } from 'react'
import TypeList from './TypeList'
import loading from '../images/small.gif';

const TypeHolder = ({pokeType, onTypeClick, fetching}) => {
  if ( (!fetching) && (!pokeType.name) ) {
    return <div></div>
  } else if (fetching) {
    return (
      <div className="text-align-center">
        <img className="loading" src = {loading} alt="" />
      </div>
    )
  } else {
    return (
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
  }
}


export default TypeHolder
