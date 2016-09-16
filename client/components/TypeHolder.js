import React from 'react'
import loading from '../images/loading.gif'
import TypeList from './TypeList'

const TypeHolder = ({pokeType, onTypeClick, fetching, activeSubPokeType}) => {
  if ( (!fetching.isFetching) && (!pokeType.name) && (!fetching.error) ) {
    return <div></div>
  } else if (fetching.isFetching) {
    return (
      <div className="text-align-center">
        <img className="loading" src={loading} alt="pokeball shaking loading gif" />
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
          <h5 className='str-weak-header text-align-center'>Strong Against:</h5>
          <TypeList info={pokeType.strongAgainst} onClick={onTypeClick} activeSubPokeType={activeSubPokeType}/>
        </section>
        <section className="col-xs-12 col-md-6">
          <h5 className='str-weak-header text-align-center'>Weak Against:</h5>
          <TypeList info={pokeType.weakAgainst} onClick={onTypeClick} activeSubPokeType={activeSubPokeType}/>
        </section>
      </div>
    )
  }
}

export default TypeHolder
