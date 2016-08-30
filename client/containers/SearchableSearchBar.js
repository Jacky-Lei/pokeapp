import { connect } from 'react-redux';
import SearchBar from '../components/SearchBar';
import { checkPokemonFetch } from '../actions/actionCreators';

const mapDispatchToProps = (dispatch) => {
  return {
    submitSearch: (pokemonName) => {
      dispatch(checkPokemonFetch(pokemonName));
    }
  }
}

const SearchableSearchBar = connect(
  null,
  mapDispatchToProps
)(SearchBar);

export default SearchableSearchBar;
