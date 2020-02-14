import { combineReducers } from 'redux'

import cartReducer from './cart/cartReducer';
import productsReducer from './products/productsReducer';
import usersReducer from './user/usersReducer';

export default combineReducers({
  cart: cartReducer,  //Not shorthand cart
  products: productsReducer,
  user: usersReducer
});
