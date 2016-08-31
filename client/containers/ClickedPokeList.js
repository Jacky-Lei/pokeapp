import { connect } from 'react-redux'
import MiniPokeList from '../components/MiniPokeList'
import { checkPokemonFetch, clearSubPokeType } from '../actions/actionCreators'

// can the state be a certain slice of state? or does it always have to be the whole store?

const mapStateToProps = function (state) {
  return {miniPokemon: state.activeSubPokeType.pokemon}
}
const mapDispatchToProps = function (dispatch) {
  return {
    onMiniPokemonClick: function (pokemonName) {
      dispatch(checkPokemonFetch(pokemonName))
      dispatch(clearSubPokeType())
    }
  }
}

const ClickedPokeList = connect(
  mapStateToProps,
  mapDispatchToProps
)(MiniPokeList)

export default ClickedPokeList
