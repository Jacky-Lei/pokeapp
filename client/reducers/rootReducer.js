import activePokemon from './activePokemon'
import activePokeType from './activePokeType'
import activeSubPokeType from './activeSubPokeType'
import fetching from './fetching'
import pokemonArray from './pokemon'
import pokeTypeArray from './pokeType'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  activePokemon,
  activePokeType,
  activeSubPokeType,
  fetching,
  pokemonArray,
  pokeTypeArray
})

export default rootReducer
