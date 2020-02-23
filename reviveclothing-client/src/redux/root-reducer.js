import { combineReducers } from 'redux'

import cartReducer from './cart/cartReducer';
import productsReducer from './products/productsReducer';
//import usersReducer from './user/usersReducer';
import currentUser from './user/currentUser';
import signUp from "./signUpForm/signUp";


function something(state = [], action) {
  return state
}

export default combineReducers({
  cart: cartReducer,  //Not shorthand cart
  products: productsReducer,
  currentUser: currentUser,
  signUpForm: signUp,
  something

});
