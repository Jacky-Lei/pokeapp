// don't have to import state or action?
import store from '../store'

export const fetchPokemon = function (pokemonName) {
  return function (dispatch) {
    dispatch({type: 'REQUESTING'})
    const requestURL = `http://pokeapi.co/api/v2/pokemon/${pokemonName}/`
    return $.ajax({
      url: requestURL,
    }).done(function (data) {
      // typechange will be used to determined if new pokemon should be fetched for weakness and strengths
      const pokemonTypeChangeNeeded = (data.types[0].type.name !== store.getState().pokemon.type)
      dispatch(changePokemonType(pokemonTypeChangeNeeded))
      dispatch(receivePokemon(data))
      dispatch(fetchPokemonDescription(pokemonName))
    })
  }
}

export const fetchPokemonIfNeeded = function (pokemonName) {
  return function (dispatch) {
    if (!store.getState().fetching.isFetching) {
      dispatch(fetchPokemon(pokemonName))
    }
  }
}

const changePokemonType = function (pokemonTypeChangeNeeded) {
  return {
    type: 'CHANGE_POKEMON_TYPE',
    pokemonTypeChangeNeeded: pokemonTypeChangeNeeded
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
      dispatch(receivePokemonDescription(data))
      if (store.getState().fetching.fetchNeeded) {
        dispatch(fetchPokemonTypeInfo(store.getState().pokemon.type))
      }
    })
  }
}

export const fetchPokemonTypeInfo = function (pokemonType, mainTypeSearch=true) {
  const requestURL = `http://pokeapi.co/api/v2/type/${pokemonType}/`
  return function (dispatch) {
    if (!mainTypeSearch) {
      console.log('not main')
      // don't need dispatch for mainSearch because it's part of chain of pokemonSearch
      dispatch({type: 'REQUESTING'})
    }
    return $.ajax({
      url: requestURL,
    }).done(function (data) {
      if (mainTypeSearch) {
        var formattedData = {
          weakAgainst: data.damage_relations.double_damage_from,
          strongAgainst: data.damage_relations.double_damage_to
        }
        dispatch(receivePokemonTypeInfo(formattedData))
      } else {
        var formattedData = {
          name: data.name,
          weakAgainst: data.damage_relations.double_damage_from,
          strongAgainst: data.damage_relations.double_damage_to
        }
        var pokemonArr = data.pokemon
        var result = []
        var regexPat = /\/\d+\//
        for (var x = 0; x < pokemonArr.length; x++) {
          var pokemonNumber = pokemonArr[x].pokemon.url.match(regexPat)[0].slice(1,-1)
          if (pokemonNumber <= 151 && result.length < 3) {
            result.push(pokemonArr[x])
            x+=2
          } else {
            break
          }
        }
        formattedData.pokemon = result
        dispatch(receiveSidePokemonTypeInfo(formattedData))
      }
    })
  }
}

const receivePokemonDescription = function (data) {
  return {
    data: data,
    type: 'RECEIVE_POKEMON_DESCRIPTION'
  }
}

const receivePokemonTypeInfo = function (data) {
  return {
    data: data,
    type: 'RECEIVE_POKEMON_TYPE_INFO'
  }
}

const receiveSidePokemonTypeInfo = function (data) {
  return {
    data: data,
    type: 'RECEIVE_SIDE_POKEMON_TYPE_INFO'
  }
}
