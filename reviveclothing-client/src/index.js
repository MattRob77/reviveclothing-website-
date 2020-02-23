import React from 'react';
import ReactDOM from 'react-dom'; //Imported for restful routing
import { BrowserRouter } from 'react-router-dom'; //imported component gives routing funtionality to application 
import { Provider } from 'react-redux';
import store from './redux/store';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';




ReactDOM.render(
 <Provider store={store}>
   <BrowserRouter>
      <App />
    </BrowserRouter>
 </Provider>
,  document.getElementById('root') //grabs elements from HTML inserting App
);



serviceWorker.unregister();

//export default combineReducers({
//  items,
//  products
//})
