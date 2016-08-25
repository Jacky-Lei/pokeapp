const pokemonTypeInfo = function (state = { isFetching: false }, action) {
  switch (action.type) {
    case 'REQUEST_POKEMON_TYPE_INFO':
      return Object.assign({}, state, {isFetching: true})
    case 'RECEIVE_POKEMON_TYPE_INFO':
      return Object.assign({}, state, {
        weakAgainst: action.data.damage_relations.double_damage_from,
        strongAgainst: action.data.damage_relations.double_damage_to
      })
    default:
      return state
  }
}

export default pokemonTypeInfo
