const selectedPokemon = function () {

}

export const pokemon = function (state = { isFetching: false, pokemons: [] }, action) {
    switch (action.type) {
      case 'REQUEST_POKEMON':
        return Object.assign({}, state, {isFetching: true})
      case 'RECEIVE_POKEMON':
        return Object.assign({}, state, {pokemons: action.data})
      default:
        return state
    }
}
