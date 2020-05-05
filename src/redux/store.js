import { createStore, applyMiddleware, compose} from 'redux'; //imported createStore & Middleware
import { persistStore } from 'redux-persist';

import logger from 'redux-logger';
import rootReducer from '../redux/root-reducer'; //imported root-reducer connecting it to the store

import thunk from 'redux-thunk'; //imported thunk middleware


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
compose; //applied Redux Dev-Tools for debugging

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, logger)))//applied thunk middleware
//creates store passing functions of rootReducer, componseEnhancers and Middleware
//sagaMiddleware,run()
export const persistor = persistStore(store); //persisted verson of store

export default { store, persistor };
