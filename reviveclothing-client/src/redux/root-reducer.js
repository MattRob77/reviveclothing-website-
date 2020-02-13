import { combineReducers } from 'redux'

import cartReducer from './cart/cartReducer';
import productsReducer from './products/productsReducer'

export default combineReducers({
  cart: cartReducer,  //Not shorthand cart
  products: productsReducer
});
