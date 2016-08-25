import pokemon from './pokemon';
import pokemonTypeInfo from './pokemonTypeInfo';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({pokemon, pokemonTypeInfo});

export default rootReducer;
