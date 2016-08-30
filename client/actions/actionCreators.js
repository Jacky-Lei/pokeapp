// don't have to import state or action?
import store from '../store'
import { formatPokemonData, formatDescription, formatPokeType } from '../helpers/helpers'
import _ from 'lodash/core'



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

const addActivePokemon = function (pokemon) {
  return {
    type: 'ADD_ACTIVE_POKEMON',
    data: pokemon
  }
}

export const fetchPokemon = function (pokemonName) {
  return function (dispatch) {
    dispatch({type: 'REQUESTING'})
    const requestURL = `http://pokeapi.co/api/v2/pokemon/${pokemonName}/`
    return $.ajax({
      url: requestURL,
    }).done(function (data) {
      dispatch(receivePokemon(formatPokemonData(data)))
      dispatch(fetchPokemonDescription(pokemonName))
    })
  }
}

const receivePokemon = function (data) {
  return {
    data: data,
    type: 'RECEIVE_POKEMON'
  }
}

export const fetchPokemonDescription = function (pokemonName) {
  return function (dispatch) {
    const requestURL = `http://pokeapi.co/api/v2/pokemon-species/${pokemonName}/`
    return $.ajax({
      url: requestURL,
    }).done(function (data) {
      dispatch(receivePokemonDescription(formatDescription(data)))
      // would it always be the last one?
      dispatch(addActivePokemon(store.getState().pokemonArray.filter(function (p) {
        return p.name === pokemonName
      })[0]))
      // check if typearray has active pokemon type
      dispatch(checkPokeTypeCache(store.getState().activePokemon.pokeType))
    })
  }
}

const receivePokemonDescription = function (data) {
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

const checkPokeTypeCache = function (pokeTypeName, subTypeFetch) {
  return function (dispatch) {

    const cachedPokeType = _.find(store.getState().pokeTypeArray,
      function (pokeTypeObj) {return pokeTypeObj.name === pokeTypeName}
    )
      console.log(store.getState().pokeTypeArray)
    console.log(cachedPokeType)
    console.log(subTypeFetch)
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
    return $.ajax({
      url: requestURL
    }).done(function (data) {
      dispatch(receivePokeType(formatPokeType(data)))
      if (!subTypeFetch) {
        dispatch(addActivePokeType(formatPokeType(data)))
      } else {
        dispatch(addActiveSubPokeType(formatPokeType(data)))
      }
    })
  }
}

const addActivePokeType = function (pokeType) {
  return {
    type: 'ADD_ACTIVE_POKE_TYPE',
    data: pokeType
  }
}

const addActiveSubPokeType = function (pokeType) {
  return {
    type: 'ADD_ACTIVE_SUB_POKE_TYPE',
    data: pokeType
  }
}

const receivePokeType = function (data) {
  return {
    data: data,
    type: 'RECEIVE_POKE_TYPE'
  }
}
