const pokemon = function (state = { isFetching: false }, action) {
    switch (action.type) {
      case 'REQUEST_POKEMON':
        return Object.assign({}, state, {isFetching: true})
      case 'RECEIVE_POKEMON':
        return Object.assign({}, state, {
          weight: action.data.weight,
          height: action.data.height,
          number: action.data.id,
          type: action.data.types[0].type.name
        })
      default:
        return state
    }
}

export default pokemon
