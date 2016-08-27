// don't have to import state or action?
import store from '../store'

export const fetchPokemon = function (pokemonName) {
  return function (dispatch) {
    dispatch(requestPokemon(pokemonName))
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

const changePokemonType = function (pokemonTypeChangeNeeded) {
  return {
    type: 'CHANGE_POKEMON_TYPE',
    pokemonTypeChangeNeeded: pokemonTypeChangeNeeded
  }
}

const requestPokemon = function (pokemonName) {
  return {
    name: pokemonName,
    type: 'REQUEST_POKEMON'
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
    dispatch(requestPokemonDescription(pokemonName))
    const requestURL = `http://pokeapi.co/api/v2/pokemon-species/${pokemonName}/`
    return $.ajax({
      url: requestURL,
    }).done(function (data) {
      dispatch(receivePokemonDescription(data))
      if (store.getState().pokemonTypeInfo.fetchNeeded) {
        dispatch(fetchPokemonTypeInfo(store.getState().pokemon.type))
      }
    })
  }
}

const requestPokemonDescription = function (pokemonName) {
  return {
    name: pokemonName,
    type: 'REQUEST_POKEMON_DESCRIPTION'
  }
}
const receivePokemonDescription = function (data) {
  return {
    data: data,
    type: 'RECEIVE_POKEMON_DESCRIPTION'
  }
}

export const fetchPokemonTypeInfo = function (pokemonType, mainTypeSearch=true) {
  const requestURL = `http://pokeapi.co/api/v2/type/${pokemonType}/`
  return function (dispatch) {
    if (mainTypeSearch) {
      dispatch(requestPokemonTypeInfo())
    } else {
      dispatch(requestSidePokemonTypeInfo())
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
          weakAgainst: data.damage_relations.double_damage_from,
          strongAgainst: data.damage_relations.double_damage_to
        }
        var pokemonArr = data.pokemon
        var result = []
        var regexPat = /\/\d+\//

        console.log(pokemonArr)
        for (var x = 0; x < pokemonArr.length; x++) {
          console.log(pokemonArr[x])
          console.log(pokemonArr[x].pokemon)
          var pokemonNumber = pokemonArr[x].pokemon.url.match(regexPat)[0].slice(1,2)

          debugger;
          console.log(pokemonNumber <= 151)
          console.log(parseInt(pokemonNumber) <= 151)
          if (pokemonNumber <= 151 && result.length < 3) {
            console.log(pokemonArr[x])
            result.push(pokemonArr[x])
            x+=2
          } else {
            break
          }
        }
        console.log(result)
        formattedData.pokemon = result
        dispatch(receiveSidePokemonTypeInfo(formattedData))
      }
    })
  }
}

const requestPokemonTypeInfo = function (url) {
  return {
    url,
    type: 'REQUEST_POKEMON_TYPE_INFO'
  }
}
const receivePokemonTypeInfo = function (data) {
  return {
    data: data,
    type: 'RECEIVE_POKEMON_TYPE_INFO'
  }
}

const requestSidePokemonTypeInfo = function (url) {
  return {
    url,
    type: 'REQUEST_SIDE_POKEMON_TYPE_INFO'
  }
}
const receiveSidePokemonTypeInfo = function (data) {
  return {
    data: data,
    type: 'RECEIVE_SIDE_POKEMON_TYPE_INFO'
  }
}
// $r.store.getState().pokemons.name
// $r.store.getState().pokemons.height
// $r.store.getState().pokemons.weight
// $r.store.getState().pokemons.id
// $r.store.getState().pokemons.sprites.front_default
//
// $r.store.getState().pokemons.types[0].type.name = 'fire'
// $r.store.getState().pokemons.types[0].type.url = 'www....'
//
// a.damage_relations.double_damage_from
//   [{name: 'ground', url: "www..."}, {}]
// a.damage_relations.double_damage_to
// a.pokemon[0].pokemon.name = 'charmander'
// a.pokemon[0].pokemon.url = '...'
