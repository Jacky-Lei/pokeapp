import { connect } from 'react-redux';
import SearchBar from '../components/SearchBar';
import { fetchPokemonIfNeeded } from '../actions/actionCreators';

const mapDispatchToProps = (dispatch) => {
  return {
    submitSearch: (pokemonName) => {
      console.log(fetchPokemonIfNeeded)
      dispatch(fetchPokemonIfNeeded(pokemonName));
    }
  }
}

const SearchableSearchBar = connect(
  null,
  mapDispatchToProps
)(SearchBar);

export default SearchableSearchBar;
