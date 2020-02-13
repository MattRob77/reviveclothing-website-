let = 0

export default(state=[], action) => {
  switch(action.type) {
    case 'Add_To_Cart':
      return [...state, action.payload]
    case 'Remove_From_Cart':
      return state.filter( i = i.id !== action.payload)

    default:
      return state
  }
}
