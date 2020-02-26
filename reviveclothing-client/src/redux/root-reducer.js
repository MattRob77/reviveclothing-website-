import { combineReducers } from 'redux';

import cartReducer from './cart/cartReducer';
import productsReducer from './products/productsReducer';
import currentUser from './user/currentUser';
import signUp from "./signUpForm/signUp";


export default combineReducers({
  cart: cartReducer, 
  products: productsReducer,
  currentUser: currentUser,
  signUpForm: signUp,


});

//Root-Reducer is base object that is all of our state in the application
