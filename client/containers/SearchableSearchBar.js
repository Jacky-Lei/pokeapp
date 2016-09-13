import { connect } from 'react-redux';
import SearchBar from '../components/SearchBar';
import { checkPokemonFetch, clearSubPokeType } from '../actions/actionCreators'


const mapDispatchToProps = (dispatch) => {
  return {
    submitSearch: (pokemonName) => {
      dispatch(checkPokemonFetch(pokemonName));
      dispatch(clearSubPokeType())
    }
  }
}

const SearchableSearchBar = connect(
  null,
  mapDispatchToProps
)(SearchBar);

export default SearchableSearchBar;
