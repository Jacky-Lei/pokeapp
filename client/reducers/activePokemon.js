// Currently displayed Pokemon's state

const activePokemon = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_ACTIVE_POKEMON':
      return {
        ...state,
        ...action.data
      }
    default:
      return state
  }
}

export default activePokemon
