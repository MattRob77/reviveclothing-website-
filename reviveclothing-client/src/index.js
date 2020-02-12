import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

//import items from './itemsReducer';
//import products from './productsReducer';

import store from './redux/store';
import rootReducer from './redux/rootReducer'; 
import './index.css';
import App from './App';


ReactDOM.render(
 //<Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
//  </Provider>
  document.getElementById('root')
);


//export default combineReducers({
//  items,
//  products
//})
