import fetching from './fetching';
import pokemon from './pokemon';
import pokemonTypeInfo from './pokemonTypeInfo';
import sidePokemonTypeInfo from './sidePokemonTypeInfo';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({fetching, pokemon, pokemonTypeInfo, sidePokemonTypeInfo});

export default rootReducer;
