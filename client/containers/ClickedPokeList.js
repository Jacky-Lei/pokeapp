import { connect } from 'react-redux'
import { checkPokemonFetch, clearSubPokeType } from '../actions/actionCreators'
import MiniPokeList from '../components/MiniPokeList'

const mapStateToProps = (state) => ({
  miniPokemon: state.activeSubPokeType.pokemon,
  fetching: state.fetching.isFetchingSub
})

const mapDispatchToProps = (dispatch) => ({
  onMiniPokemonClick: (pokemonName) => {
    dispatch(checkPokemonFetch(pokemonName))
    dispatch(clearSubPokeType())
  }
})

const ClickedPokeList = connect(
  mapStateToProps,
  mapDispatchToProps
)(MiniPokeList)

export default ClickedPokeList
