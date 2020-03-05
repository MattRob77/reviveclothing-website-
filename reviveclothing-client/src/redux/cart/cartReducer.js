import CartActionTypes from './cartTypes';
import { addItemToCart } from './cartUtils';
import { removeItemFromCart} from './cartUtils';


const INITIAL_STATE = {
  hidden:true,
  cartItems: [] //Added the cartItems into the initial state
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };

    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };

      case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      };

      case CartActionTypes.CLEAR_ITEM_FROM_CART:
        return {
          ...state,
          cartItems: state.cartItems.filter(
            cartItem => cartItem.id !== action.payload.id
          )
        };
    default:
      return state;
  }
};

export default cartReducer;

//Reducer listens for the case for the actionType of ADD_ITEM
//then returning the new state with the new array [...state.cartItems, action.payload]
//spreading in the existing state of cartItems with the action payload
