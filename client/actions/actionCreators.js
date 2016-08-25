// actionCreators.js
// don't have to import state or action?

export const fetchPokemon = function (pokemonName) {
  return function (dispatch) {
    dispatch(requestPokemon(pokemonName))
    const requestURL = `http://pokeapi.co/api/v2/pokemon/${pokemonName}/`
    return $.ajax({
      url: requestURL,
    }).done(function (data) {
      console.log(data)
      dispatch(receivePokemon(data))
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
