import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';


import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



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



serviceWorker.unregister();

//export default combineReducers({
//  items,
//  products
//})
