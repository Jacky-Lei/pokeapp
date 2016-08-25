//container component - app.js

import { connect } from 'react-redux';
import SearchBar from '../components/SearchBar';
import {fetchPokemon} from '../actions/actionCreators';


let test = "test";

const mapStateToProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch)
  return {
    submitSearch: (pokemonName) => {
      dispatch(fetchPokemon(pokemonName));
    }
  }
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);

export default App;
