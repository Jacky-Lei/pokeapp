const sidePokemonTypeInfo = function (
  // need default state to be filled out not only for clarity but also so initial render has something to go by
  // if they're depending on the state as props
  state = { fetchNeeded: true, isFetching: false, weakAgainst: [], strongAgainst: [] },
  action) {
    switch (action.type) {
      case 'REQUEST_SIDE_POKEMON_TYPE_INFO':
        return Object.assign({}, state, {isFetching: true})
      case 'RECEIVE_SIDE_POKEMON_TYPE_INFO':
        return Object.assign({}, state, {
          // you  only care about the pokemon in there right now
          pokemon: action.data.pokemon,
          weakAgainst: action.data.weakAgainst,
          strongAgainst: action.data.strongAgainst
        })
      case 'CHANGE_POKEMON_TYPE':
        return Object.assign({}, state, {
          fetchNeeded: action.pokemonTypeChangeNeeded
        })
      default:
        return state
  }
}

export default sidePokemonTypeInfo
