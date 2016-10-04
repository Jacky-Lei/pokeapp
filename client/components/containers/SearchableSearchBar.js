import { checkPokemonFetch, clearSubPokeType } from '../../actions/actionCreators'
import { connect } from 'react-redux'
import SearchBar from '../presentational/SearchBar'

const mapDispatchToProps = dispatch => ({
  submitSearch: pokemonName => {
    dispatch(checkPokemonFetch(pokemonName))
    dispatch(clearSubPokeType())
  }
})

const SearchableSearchBar = connect(
  null,
  mapDispatchToProps
)(SearchBar)

export default SearchableSearchBar
