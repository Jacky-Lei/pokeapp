import { connect } from 'react-redux'
import Type from '../components/Type'
import { checkPokemonFetch } from '../actions/actionCreators'

// can the state be a certain slice of state? or does it always have to be the whole store?

// const mapStateToProps = function (state, ownProps) {
//   return {miniPokemon: state.activeSubPokeType.name === ownProps.name ? state.activeSubPokeType.pokemon: null}
// }
const mapDispatchToProps = function (dispatch) {
  return {
    onMiniPokemonClick: function (pokemonName) {
      dispatch(checkPokemonFetch(pokemonName))
    }
  }
}

const ClickedType = connect(
  null,
  mapDispatchToProps
)(Type)

export default ClickedType
