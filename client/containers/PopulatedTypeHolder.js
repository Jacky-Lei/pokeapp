import { connect } from 'react-redux'
import TypeHolder from '../components/TypeHolder'
import { checkPokeTypeFetch } from '../actions/actionCreators'

const mapStateToProps = (state) => {
  // can't use shortcut of () to return object because ({...}) will cause error for es6
  // thus you need to explicity use {return {...}}
  return {
    pokeType: state.activePokeType,
    fetching: state.fetching.isFetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTypeClick: function (typeName) {
      dispatch(checkPokeTypeFetch(typeName, true))
    }
  }
}

const PopulatedTypeHolder = connect(
  mapStateToProps,
  mapDispatchToProps
)(TypeHolder)

export default PopulatedTypeHolder
