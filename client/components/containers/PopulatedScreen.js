import { connect } from 'react-redux'
import { checkPokeTypeFetch, checkPokemonFetch, clearSubPokeType } from '../../actions/actionCreators'
import Screen from '../presentational/Screen'

const mapStateToProps = state => ({
  data: state
})

const mapDispatchToProps = dispatch => ({
  onTypeClick: typeName => {
    dispatch(checkPokeTypeFetch(typeName, true))
  },
  onListedPokemonClick: pokemonName => {
    dispatch(checkPokemonFetch(pokemonName))
    dispatch(clearSubPokeType())
  }
})

const PopulatedScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Screen)

export default PopulatedScreen
