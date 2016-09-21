import React from 'react'
import loading from '../../images/loading.gif'
import TypeList from './TypeList'

const TypeHolder = ({pokeType, activeSubPokeType, fetching, onTypeClick}) => {
  const {name, strongAgainst, weakAgainst} = pokeType
  const {isFetching, error} = fetching

  if ( (!isFetching) && (!name) && (!fetching.error) ) {
    return <div></div>
  } else if (isFetching) {
    return (
      <div className="text-align-center">
        <img className="loading" src={loading} alt="pokeball shaking loading gif" />
      </div>
    )
  } else if (error) {
    return (
      <div className="text-align-center error-msg">
        {error}
      </div>
    )
  } else {
    return (
      <div className="row">
        <section className="col-xs-12 col-md-6">
          <h5 className='str-weak-header text-align-center'>Strong Against:</h5>
          <TypeList info={strongAgainst} onClick={onTypeClick} activeSubPokeType={activeSubPokeType}/>
        </section>
        <section className="col-xs-12 col-md-6">
          <h5 className='str-weak-header text-align-center'>Weak Against:</h5>
          <TypeList info={weakAgainst} onClick={onTypeClick} activeSubPokeType={activeSubPokeType}/>
        </section>
      </div>
    )
  }
}

TypeHolder.propTypes = {
  pokeType: React.PropTypes.shape({
    name: React.PropTypes.string,
    strongAgainst: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        name: React.PropTypes.string,
        url: React.PropTypes.string
      })
    ),
    weakAgainst: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        name: React.PropTypes.string,
        url: React.PropTypes.string
      })
    )
  }).isRequired,
  activeSubPokeType: React.PropTypes.string.isRequired,
  fetching: React.PropTypes.shape({
    isFetching: React.PropTypes.bool,
    error: React.PropTypes.string
  }).isRequired,
  onTypeClick: React.PropTypes.func.isRequired
}

export default TypeHolder
