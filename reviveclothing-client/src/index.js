import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';


//import items from './itemsReducer';
//import products from './productsReducer';

import './index.css';
import App from './App';


ReactDOM.render(
// <Provider>
   <BrowserRouter>
      <App />
    </BrowserRouter>,
// </Provider>
  document.getElementById('root')
);


//export default combineReducers({
//  items,
//  products
//})
