import React, { Component } from 'react'
import TypeList from './TypeList'
import loading from '../images/small.gif';

const TypeHolder = ({pokeType, onTypeClick, fetching, activeSubPokeType}) => {
  if ( (!fetching.isFetching) && (!pokeType.name) && (!fetching.error) ) {
    return <div></div>
  } else if (fetching.isFetching) {
    return (
      <div className="text-align-center">
        <img className="loading" src = {loading} alt="" />
      </div>
    )
  } else if (fetching.error) {

    return (
      <div className="text-align-center error-msg">
        {fetching.error}
      </div>
    )
  } else {
    return (
      <div className="row">
        <section className="col-xs-12 col-md-6">
          <h5 className='str-weak-header'>Strong Against:</h5>
          <TypeList info={pokeType.weakAgainst} onClick={onTypeClick} activeSubPokeType={activeSubPokeType}/>
        </section>
        <section className="col-xs-12 col-md-6">
          <h5 className='str-weak-header'>Weak Against:</h5>
          <TypeList info={pokeType.strongAgainst} onClick={onTypeClick} activeSubPokeType={activeSubPokeType}/>
        </section>
      </div>
    )
  }
}


export default TypeHolder
