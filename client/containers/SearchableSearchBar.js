import { connect } from 'react-redux';
import SearchBar from '../components/SearchBar';
import {fetchPokemon} from '../actions/actionCreators';

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch)
  return {
    submitSearch: (pokemonName) => {
      dispatch(fetchPokemon(pokemonName));
    }
  }
}

const SearchableSearchBar = connect(
  null,
  mapDispatchToProps
)(SearchBar);

export default SearchableSearchBar;
