const pokemonTypeInfo = function (
  state = { fetchNeeded: true, isFetching: false, weakAgainst: [], strongAgainst: [] },
  action) {
    switch (action.type) {
      case 'REQUEST_POKEMON_TYPE_INFO':
        return Object.assign({}, state, {isFetching: true})
      case 'RECEIVE_POKEMON_TYPE_INFO':
        return {
          ...state,
          ...action.data
        }
      case 'CHANGE_POKEMON_TYPE':
        return Object.assign({}, state, {
          fetchNeeded: action.pokemonTypeChangeNeeded
        })
      default:
        return state
  }
}

export default pokemonTypeInfo
