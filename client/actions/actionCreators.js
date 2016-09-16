import store from '../store'
import _ from 'lodash/core'

export const checkPokemonFetch = (pokemonName) => (dispatch) => {
  if (store.getState().fetching.isFetching) {return}
  dispatch(checkPokemonCache(pokemonName))
}

const checkPokemonCache = (pokemonName) => (dispatch) => {
  const storeState = store.getState()
  const activePokemon = _.find(
    storeState.pokemonArray,
    (pokemonObj) => pokemonObj.name === pokemonName
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
      (pokeTypeObj) => pokeTypeObj.name === activePokemon.pokeType
    )
    dispatch(addActivePokeType(activePokeType))
  }
}

export const addActivePokemon = (pokemon) => ({
  type: 'ADD_ACTIVE_POKEMON',
  data: pokemon
})

export const fetchPokemon = (pokemonName) => (dispatch) => {
  dispatch({type: 'REQUESTING'})
  const requestURL = `http://pokeapi.co/api/v2/pokemon/${pokemonName}/`
  dispatch({url: requestURL, fetchName: 'fetchPokemon', promise: true})
}

export const receivePokemon = (data) => ({
  data: data,
  type: 'RECEIVE_POKEMON'
})

export const fetchPokemonDescription = (pokemonName) => (dispatch) => {
  const requestURL = `http://pokeapi.co/api/v2/pokemon-species/${pokemonName}/`
  dispatch({url: requestURL, fetchName: 'fetchPokemonDescription', promise: true})
}

export const receivePokemonDescription = (data) => ({
  data: data,
  type: 'RECEIVE_POKEMON_DESCRIPTION'
})

export const checkPokeTypeFetch = (pokeType, subTypeFetch = false) => (dispatch) => {
  if (store.getState().fetching.isFetching) {return}
  dispatch(checkPokeTypeCache(pokeType, subTypeFetch))
}

export const checkPokeTypeCache = (pokeTypeName, subTypeFetch) => (dispatch) => {
  const cachedPokeType = _.find(
    store.getState().pokeTypeArray,
    (pokeTypeObj) => pokeTypeObj.name === pokeTypeName
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
  return (dispatch) => {
    if (subTypeFetch) {
      dispatch({type: 'REQUESTING_SUB'})
      dispatch({url: requestURL, fetchName: "subTypeFetch", promise: true})
    } else {
      dispatch({type: 'REQUESTING'})
      dispatch({url: requestURL, fetchName: "mainTypeFetch", promise: true})
    }
  }
}

export const addActivePokeType = (pokeType) => ({
  type: 'ADD_ACTIVE_POKE_TYPE',
  data: pokeType
})

export const addActiveSubPokeType = (pokeType) => ({
  type: 'ADD_ACTIVE_SUB_POKE_TYPE',
  data: pokeType
})

export const clearSubPokeType = () => ({
  type: 'CLEAR_SUB_POKE_TYPE',
})

export const receivePokeType = (data) => ({
  data: data,
  type: 'RECEIVE_POKE_TYPE'
})
