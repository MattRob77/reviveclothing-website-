import { combineReducers } from 'redux' //imported redux combineReducer to use all reducers

import cartReducer from './cart/cartReducer';
import productsReducer from './products/productsReducer';
import currentUser from './user/currentUser';
import signUp from "./signUpForm/signUp";


// function something(state = [], action) {
//   return state
// }

export default combineReducers({
  cart: cartReducer,  //Not shorthand cart
  products: productsReducer,
  currentUser: currentUser,
  signUpForm: signUp,
//  something

});

//Root-Reducer is base object that is all of our state in the application
