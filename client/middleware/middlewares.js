import * as actions from '../actions/actionCreators'
import { formatPokemonData, formatDescription, formatPokeType } from '../helpers/helpers'
import fetch from 'isomorphic-fetch'
import constants from '../constants/constants'

export const promiseErrorMiddleware = store => next => action => {
  if (!action.promise) {
    return next(action)
  }
  return fetch(action.url).then((response) => {
    if (response.status === 404) {
      store.dispatch({type: constants.SPELLING_ERROR})
      throw new Error("Please ensure Pokemon name is spelled correctly")
    } else if (response.status >= 400) {
      store.dispatch({type: constants.SERVER_ERROR})
      throw new Error("Server Error")
    }
    return response.json()
  }).then((data) => {
    next({data, needDirection: true, fetchName: action.fetchName })
  })
}

export const dataTrafficMiddleware = store => next => action => {
  if (!action.needDirection) {
    return next(action)
  }
  const data = action.data
  switch (action.fetchName) {
    case constants.FETCH_POKEMON:
      next(actions.receivePokemon(formatPokemonData(data)))
      store.dispatch(actions.fetchPokemonDescription(data.name))
      break
    case constants.FETCH_DESCRIPTION:
      next(actions.receivePokemonDescription(formatDescription(data)))
      next(actions.addActivePokemon(store.getState().pokemonArray.filter((p) => (
        p.name === data.name
      ))[0]))
      store.dispatch(actions.checkPokeTypeCache(store.getState().activePokemon.pokeType))
      break
    case constants.MAIN_TYPE_FETCH:
      next(actions.receivePokeType(formatPokeType(data)))
      next(actions.addActivePokeType(formatPokeType(data)))
      break
    case constants.SUB_TYPE_FETCH:
      next(actions.receivePokeType(formatPokeType(data)))
      next(actions.addActiveSubPokeType(formatPokeType(data)))
  }
}
