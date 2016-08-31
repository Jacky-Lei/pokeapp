import * as actions from './actions/actionCreators'
import { formatPokemonData, formatDescription, formatPokeType } from './helpers/helpers'

const fetchPromiseMiddleware = store => next => action => {
  if (!Array.isArray(action)) {
    return next(action)
  }
  const promiseObj = action[0]
  const fetchName = action[1]
  return Promise.resolve(promiseObj).then(function (response) {
    if (response.status === 404) {
      throw new Error("Please make sure you spelled the Pokemon correctly")
    } else if (response.status >= 400) {
      throw new Error("Server Error")
    }
    return response.json()
  }).then(function (data) {
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
    }
  } else if (fetchName === 'subTypeFetch') {
    store.dispatch(actions.receivePokeType(formatPokeType(data)))
    store.dispatch(actions.addActiveSubPokeType(formatPokeType(data)))
  }
})

// export default fetchPromiseMiddleware
