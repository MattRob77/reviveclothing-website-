import CartActionTypes from './cartTypes';

const INITIAL_STATE = {
  cartItems: [] //Added the cartItems into the initial state
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

//Reducer listens for the case for the actionType of ADD_ITEM
//then returning the new state with the new array [...state.cartItems, action.payload]
//spreading in the existing state of cartItems with the action payload 
