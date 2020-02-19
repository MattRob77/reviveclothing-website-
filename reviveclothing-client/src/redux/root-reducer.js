import { combineReducers } from 'redux'

import cartReducer from './cart/cartReducer';
import productsReducer from './products/productsReducer';
import usersReducer from './user/usersReducer';
import currentUser from './user/currentUser';
import signIn from "./signInForm/signIn";
import signUp from "./signUpForm/signUp";

export default combineReducers({
  cart: cartReducer,  //Not shorthand cart
  products: productsReducer,
  user: usersReducer,
  currentUser: currentUser,
  signInForm: signIn,
  signUpForm: signUp

});
