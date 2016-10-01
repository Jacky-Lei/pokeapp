import store from '../store'
import _ from 'lodash/core'
import constants from '../constants/constants'

export const checkPokemonFetch = pokemonName => dispatch => {
  if (store.getState().fetching.isFetching) {return}
  dispatch(checkPokemonCache(pokemonName))
}

const checkPokemonCache = pokemonName => dispatch => {
  const storeState = store.getState()
  const activePokemon = _.find(
    storeState.pokemonArray,
    pokemonObj => pokemonObj.name === pokemonName
  )
  if (activePokemon) {
    dispatch(addActivePokemon(activePokemon))
    activeTypeCheck(activePokemon, storeState, dispatch)
  } else {
    dispatch(fetchPokemon(pokemonName))
  }
}

const activeTypeCheck = (activePokemon, storeState, dispatch) => {
  if (activePokemon.pokeType !== storeState.activePokeType.name) {
    const activePokeType = _.find(
      storeState.pokeTypeArray,
      pokeTypeObj => pokeTypeObj.name === activePokemon.pokeType
    )
    dispatch(addActivePokeType(activePokeType))
  }
  dispatch({type: constants.END_FETCH})
}

export const addActivePokemon = (pokemon) => ({
  type: constants.ADD_ACTIVE_POKEMON,
  data: pokemon
})

export const fetchPokemon = pokemonName => dispatch => {
  dispatch({type: constants.REQUESTING})
  const requestURL = `http://pokeapi.co/api/v2/pokemon/${pokemonName}/`
  dispatch({url: requestURL, fetchName: constants.FETCH_POKEMON, promise: true})
}

export const receivePokemon = data => ({
  data: data,
  type: constants.RECEIVE_POKEMON
})

export const fetchPokemonDescription = pokemonName => dispatch => {
  const requestURL = `http://pokeapi.co/api/v2/pokemon-species/${pokemonName}/`
  dispatch({url: requestURL, fetchName: constants.FETCH_DESCRIPTION, promise: true})
}

export const receivePokemonDescription = data => ({
  data: data,
  type: constants.RECEIVE_POKEMON_DESCRIPTION
})

export const checkPokeTypeFetch = (pokeType, subTypeFetch = false) => dispatch => {
  if (store.getState().fetching.isFetching) {return}
  dispatch(checkPokeTypeCache(pokeType, subTypeFetch))
}

export const checkPokeTypeCache = (pokeTypeName, subTypeFetch) => dispatch => {
  const cachedPokeType = _.find(
    store.getState().pokeTypeArray,
    pokeTypeObj => pokeTypeObj.name === pokeTypeName
  )
  if ((cachedPokeType) && (!subTypeFetch)) {
    dispatch(addActivePokeType(cachedPokeType))
  } else if ((cachedPokeType) && (subTypeFetch)) {
    dispatch(addActiveSubPokeType(cachedPokeType))
  } else {
    dispatch(fetchPokeType(pokeTypeName, subTypeFetch))
  }
}

export const fetchPokeType = (pokemonType, subTypeFetch) => {
  const requestURL = `http://pokeapi.co/api/v2/type/${pokemonType}/`
  return dispatch => {
    if (subTypeFetch) {
      dispatch({type: constants.REQUESTING_SUB_POKE_TYPE})
      dispatch({url: requestURL, fetchName: constants.SUB_TYPE_FETCH, promise: true})
    } else {
      dispatch({type: constants.REQUESTING})
      dispatch({url: requestURL, fetchName: constants.MAIN_TYPE_FETCH, promise: true})
    }
  }
}

export const addActivePokeType = pokeType => ({
  type: constants.ADD_ACTIVE_POKE_TYPE,
  data: pokeType
})

export const addActiveSubPokeType = pokeType => ({
  type: constants.ADD_ACTIVE_SUB_POKE_TYPE,
  data: pokeType
})

export const clearSubPokeType = () => ({
  type: constants.CLEAR_SUB_POKE_TYPE
})

export const receivePokeType = data => ({
  data: data,
  type: constants.RECEIVE_POKE_TYPE
})
