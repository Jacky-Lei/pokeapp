import { connect } from 'react-redux'
import { checkPokemonFetch, clearSubPokeType } from '../../actions/actionCreators'
import PokeList from '../presentational/PokeList'

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

const PopulatedPokeList = connect(
  mapStateToProps,
  mapDispatchToProps
)(PokeList)

export default PopulatedPokeList
