import React from 'react';
import ReactDOM from 'react-dom'; //Imported for restful routing
import { BrowserRouter } from 'react-router-dom'; //imported component gives routing funtionality to application
import { Provider } from 'react-redux'; //imported  Redux Provider allowing access to store to any components
import { PersistGate } from 'redux-persist/integration/react'; //This delays the rendering of your app’s UI until your persisted state has been retrieved and saved to redux.


import { store, persistor } from './redux/store'; //imported store(state)

import './index.css'; //imported styling
import App from './App'; //imported app connecting it to index
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
 <Provider store={store}>
   <BrowserRouter>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
    </BrowserRouter>
 </Provider>
,  document.getElementById('root') //grabs elements from HTML inserting App
);
//Provider store={store} passing in gives access to store


serviceWorker.unregister();//verifying the service worker 

//export default combineReducers({
//  items,
//  products
//})
