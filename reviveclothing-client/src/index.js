import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/root-reducer';

import './index.css';
import App from './App';



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
compose; //DevTools

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

//import items from './itemsReducer';
//import products from './productsReducer';


ReactDOM.render(
 <Provider store={store}>
   <BrowserRouter>
      <App />
    </BrowserRouter>
 </Provider>
,  document.getElementById('root')
);


//export default combineReducers({
//  items,
//  products
//})
