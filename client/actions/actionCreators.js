// don't have to import state or action?
import store from '../store'
import { formatPokemonData, formatDescription, formatPokeType } from '../helpers/helpers'
import _ from 'lodash/core'
// import {Pokedex} from 'pokedex-promise-v2'
import fetch from 'isomorphic-fetch'
// import polyfill from 'es6-promise'
// require('es6-promise').polyfill();
// require('isomorphic-fetch');

// var P = new Pokedex();


export const checkPokemonFetch = function (pokemonName) {
  return function (dispatch) {
    if (store.getState().fetching.isFetching) {return}
    dispatch(checkPokemonCache(pokemonName))
  }
}

const checkPokemonCache = function (pokemonName) {
  return function (dispatch) {
    // use findLast? faster to go from right to left?
    const activePokemon = _.find(store.getState().pokemonArray, function (pokemonObj) {return pokemonObj.name === pokemonName})
    if (activePokemon) {
      dispatch(addActivePokemon(activePokemon))
      if (activePokemon.pokeType !== store.getState().activePokeType.name) {
        const activePokeType = _.find(store.getState().pokeTypeArray, function (pokeTypeObj) {return pokeTypeObj.name === activePokemon.pokeType})
        dispatch(addActivePokeType(activePokeType))
      }
    } else {
      dispatch(fetchPokemon(pokemonName))
    }
  }
}

export const addActivePokemon = function (pokemon) {
  return {
    type: 'ADD_ACTIVE_POKEMON',
    data: pokemon
  }
}
// return $.ajax({
//   url: requestURL,
// }).done(function (data) {
//   dispatch(receivePokemon(formatPokemonData(data)))
//   dispatch(fetchPokemonDescription(pokemonName))
// })

// export const fetchPokemon = function (pokemonName) {
//   return function (dispatch) {
//     dispatch({type: 'REQUESTING'})
//     const requestURL = `http://pokeapi.co/api/v2/pokemon/${pokemonName}/`
//     return fetch(requestURL)
//     .then(function (response) {
//       return response.json()
//     })
//     .then(function (data) {
//       dispatch(receivePokemon(formatPokemonData(data)))
//       dispatch(fetchPokemonDescription(pokemonName))
//     })
//   }
// }

export const fetchPokemon = function (pokemonName) {
  return function (dispatch) {
    dispatch({type: 'REQUESTING'})
    const requestURL = `http://pokeapi.co/api/v2/pokemon/${pokemonName}/`
    dispatch([fetch(requestURL), 'fetchPokemon'])
  }
}

export const receivePokemon = function (data) {
  return {
    data: data,
    type: 'RECEIVE_POKEMON'
  }
}

export const fetchPokemonDescription = function (pokemonName) {
  return function (dispatch) {
    const requestURL = `http://pokeapi.co/api/v2/pokemon-species/${pokemonName}/`
    dispatch([fetch(requestURL), 'fetchPokemonDescription'])
  }
}

//     return $.ajax({
//       url: requestURL,
//     }).done(function (data) {
//       dispatch(receivePokemonDescription(formatDescription(data)))
//       // would it always be the last one?
//       dispatch(addActivePokemon(store.getState().pokemonArray.filter(function (p) {
//         return p.name === pokemonName
//       })[0]))
//       // check if typearray has active pokemon type
//       dispatch(checkPokeTypeCache(store.getState().activePokemon.pokeType))
//     })
//   }
// }

export const receivePokemonDescription = function (data) {
  return {
    data: data,
    type: 'RECEIVE_POKEMON_DESCRIPTION'
  }
}

export const checkPokeTypeFetch = function (pokeType, subTypeFetch = false) {
  return function (dispatch) {
    if (store.getState().fetching.isFetching) {return}
    console.log(subTypeFetch)
    dispatch(checkPokeTypeCache(pokeType, subTypeFetch))
  }
}

export const checkPokeTypeCache = function (pokeTypeName, subTypeFetch) {
  return function (dispatch) {

    const cachedPokeType = _.find(store.getState().pokeTypeArray,
      function (pokeTypeObj) {return pokeTypeObj.name === pokeTypeName}
    )
    if ((cachedPokeType) && (!subTypeFetch)) {
      dispatch(addActivePokeType(cachedPokeType))
    } else if ((cachedPokeType) && (subTypeFetch)) {
      dispatch(addActiveSubPokeType(cachedPokeType))
    } else {
      dispatch(fetchPokeType(pokeTypeName, subTypeFetch))
    }
  }
}

export const fetchPokeType = function (pokemonType, subTypeFetch) {
  const requestURL = `http://pokeapi.co/api/v2/type/${pokemonType}/`
  return function (dispatch) {
    dispatch({type: 'REQUESTING'})
    const typeFetch = subTypeFetch ? "subTypeFetch" : "mainTypeFetch"
    dispatch([fetch(requestURL), typeFetch])
  }
}

//     return $.ajax({
//       url: requestURL
//     }).done(function (data) {
//       dispatch(receivePokeType(formatPokeType(data)))
//       if (!subTypeFetch) {
//         dispatch(addActivePokeType(formatPokeType(data)))
//       } else {
//         dispatch(addActiveSubPokeType(formatPokeType(data)))
//       }
//     })
//   }
// }

export const addActivePokeType = function (pokeType) {
  return {
    type: 'ADD_ACTIVE_POKE_TYPE',
    data: pokeType
  }
}

export const addActiveSubPokeType = function (pokeType) {
  return {
    type: 'ADD_ACTIVE_SUB_POKE_TYPE',
    data: pokeType
  }
}

export const receivePokeType = function (data) {
  return {
    data: data,
    type: 'RECEIVE_POKE_TYPE'
  }
}
