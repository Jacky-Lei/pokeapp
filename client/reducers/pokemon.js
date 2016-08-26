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
      case 'REQUEST_POKEMON_DESCRIPTION':
        return Object.assign({}, state, {isFetching: true})
      case 'RECEIVE_POKEMON_DESCRIPTION':
        return Object.assign({}, state, {
          description: action.data.flavor_text_entries.find(function (obj) {return obj.language.name === "en"}).flavor_text
        })
      default:
        return state
    }
}

export default pokemon
