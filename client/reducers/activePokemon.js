// Currently displayed pokemon's state

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

// try removing object.assign to see if it will work
// probably wont' because the store needs to hold a reference to the specific state
// by making a copy of that and always referring to that copy, if you replace it
// it no longer belongs to that store and other things changing that state will change what's in the store
// even without a dispatch
// if it doesn't change to es6 spread operator
