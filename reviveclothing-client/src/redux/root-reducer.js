import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; //local storage in window browser

import cartReducer from './cart/cartReducer';
import productsReducer from './products/productsReducer';
import currentUser from './user/currentUser';
import signUp from "./signUpForm/signUp";


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart', 'currentUser']
}


const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  currentUser: currentUser,
  signUpForm: signUp,
})

export default persistReducer(persistConfig, rootReducer);

//Root-Reducer is base object that is all of our state in the application
