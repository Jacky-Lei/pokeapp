import * as actions from '../actions/actionCreators'
import { formatPokemonData, formatDescription, formatPokeType } from '../helpers/helpers'
import fetch from 'isomorphic-fetch'

export const promiseErrorMiddleware = store => next => action => {
  console.log(action)
  if (!action.promise) {
    return next(action)
  }
  const url = action.url
  const fetchName = action.fetchName
  return Promise.resolve(fetch(url)).then(function (response) {
    if (response.status === 404) {
      store.dispatch({type: 'SPELLING_ERROR'})
      throw new Error("Please ensure Pokemon name is spelled correctly")
    } else if (response.status >= 400) {
      store.dispatch({type: 'SERVER_ERROR'})
      throw new Error("Server Error")
    }
    return response.json()
  }).then(function (data) {
    store.dispatch({data: data, needDirection: true, fetchName: fetchName })
  })
}

export const dataTrafficMiddleware = store => next => action => {
  if (!action.needDirection) {
    return next(action)
  }
  const data = action.data
  const fetchName = action.fetchName
  if (fetchName === 'fetchPokemon') {
    store.dispatch(actions.receivePokemon(formatPokemonData(data)))
    store.dispatch(actions.fetchPokemonDescription(data.name))
  } else if (fetchName === 'fetchPokemonDescription') {
    store.dispatch(actions.receivePokemonDescription(formatDescription(data)))
    store.dispatch(actions.addActivePokemon(store.getState().pokemonArray.filter(function (p) {
      return p.name === data.name
    })[0]))
    store.dispatch(actions.checkPokeTypeCache(store.getState().activePokemon.pokeType))
  } else if (fetchName === 'mainTypeFetch') {
    store.dispatch(actions.receivePokeType(formatPokeType(data)))
    store.dispatch(actions.addActivePokeType(formatPokeType(data)))
  } else if (fetchName === 'subTypeFetch') {
    store.dispatch(actions.receivePokeType(formatPokeType(data)))
    store.dispatch(actions.addActiveSubPokeType(formatPokeType(data)))
  }
}

// export default fetchPromiseMiddleware
