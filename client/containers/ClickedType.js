import { connect } from 'react-redux'
import Type from '../components/Type'
import { fetchPokemonIfNeeded } from '../actions/actionCreators'

// can the state be a certain slice of state? or does it always have to be the whole store?

const mapStateToProps = function (state, ownProps) {
  return {miniPokemon: state.sidePokemonTypeInfo.name === ownProps.name ? state.sidePokemonTypeInfo.pokemon: null}
}
const mapDispatchToProps = function (dispatch) {
  return {
    onMiniPokemonClick: function (pokemonName) {
      dispatch(fetchPokemonIfNeeded(pokemonName))
    }
  }
}

const ClickedType = connect(
  mapStateToProps,
  mapDispatchToProps
)(Type)

export default ClickedType
