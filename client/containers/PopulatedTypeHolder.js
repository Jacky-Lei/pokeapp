import { connect } from 'react-redux'
import TypeHolder from '../components/TypeHolder'
import { fetchPokemonTypeInfo } from '../actions/actionCreators'

const mapStateToProps = (state) => {
  // can't use shortcut of () to return object because ({...}) will cause error for es6
  // thus you need to explicity use {return {...}}
  return {
    pokemonTypeInfo: state.pokemonTypeInfo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTypeClick: function (typeName) {
      dispatch(fetchPokemonTypeInfo(typeName, false))
    }
  }
}

const PopulatedTypeHolder = connect(
  mapStateToProps,
  mapDispatchToProps
)(TypeHolder)

export default PopulatedTypeHolder
