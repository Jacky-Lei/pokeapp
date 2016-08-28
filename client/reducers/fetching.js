// responsible for preventing double fetching from multiple clicks and unncesary
// fetching of a pokemonType that is also in state

const fetching = function (state = { isFetching: false, fetchNeeded: true }, action) {
    switch (action.type) {
      case 'REQUESTING':
        return Object.assign({}, state, {isFetching: true})
      case 'RECEIVE_POKEMON_TYPE_INFO':
      case 'RECEIVE_SIDE_POKEMON_TYPE_INFO':
        return Object.assign({}, state, {isFetching: false})
      case 'CHANGE_POKEMON_TYPE':
        return Object.assign({}, state, {
          fetchNeeded: action.pokemonTypeChangeNeeded
        })
      default:
        return state
    }
}

export default fetching
