import pokemon from './pokemon';
import pokemonTypeInfo from './pokemonTypeInfo';
import sidePokemonTypeInfo from './sidePokemonTypeInfo';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({pokemon, pokemonTypeInfo, sidePokemonTypeInfo});

export default rootReducer;
