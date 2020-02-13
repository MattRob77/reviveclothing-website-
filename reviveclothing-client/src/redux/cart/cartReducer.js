let id = 0

export default(state=[], action) => {
  switch(action.type) {
    case 'Add_To_Cart':
      return [...state, action.payload]
    case 'Remove_From_Cart':
      let newCart = state.filter(cart => cart.id !==action.payload)
      return [...newCart]
    default:
      return state
  }
}
