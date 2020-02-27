export default(state=[], action) => {
  switch(action.type) {
    case 'Add_To_Cart':
      return [...state, action.payload]
    default:
      return state
  }
}


// const Initial_State = {
//   cartItems: []
// };
//
// const cartReducer = (state = Initial_State, action) => {
//   switch(action.type) {
//     case 'Add_To_Cart':
//       return [...state, action.payload]
//     case 'Remove_From_Cart':
//       let newCart = state.filter(cart => cart.id !==action.payload)
//       return [...newCart]
//     default:
//       return state
//   }
// }
//
// export default cartReducer;
