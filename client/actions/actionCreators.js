// actionCreators.js
// don't have to import state or action?

export const fetchPokemon = function (pokemonName) {
  return function (dispatch) {
    console.log(dispatch)
    dispatch(requestPokemon(pokemonName))
    const requestURL = `http://pokeapi.co/api/v2/pokemon/${pokemonName}/`
    return $.ajax({
      url: requestURL,
    }).done(function (data) {
      console.log(data)
      dispatch(receivePokemon(data))
      dispatch(fetchPokemonTypeInfo(data.types[0].type.url))
    })
  }
}

export const requestPokemon = function (pokemonName) {
  return {
    name: pokemonName,
    type: 'REQUEST_POKEMON'
  }
}

export const receivePokemon = function (data) {
  return {
    data: data,
    type: 'RECEIVE_POKEMON'
  }
}

export const fetchPokemonTypeInfo = function (url) {
  console.log("in fetchPokemonTypeInfo")
  console.log(url)

  return function (dispatch) {
    console.log(dispatch)
    dispatch(requestPokemonTypeInfo(url))
    return $.ajax({
      url: url,
    }).done(function (data) {
      console.log(data)
      dispatch(receivePokemonTypeInfo(data))
    })
  }
}

export const requestPokemonTypeInfo = function (url) {
  return {
    url,
    type: 'REQUEST_POKEMON_TYPE_INFO'
  }
}

export const receivePokemonTypeInfo = function (data) {
  return {
    data: data,
    type: 'RECEIVE_POKEMON_TYPE_INFO'
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
