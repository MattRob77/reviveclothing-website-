import CartActionTypes from './cartTypes';

const INITIAL_STATE = {
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      };
    default:
      return state;
  }
};

export default cartReducer;

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
