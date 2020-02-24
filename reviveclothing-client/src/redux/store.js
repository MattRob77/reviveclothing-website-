import { createStore, applyMiddleware, compose} from 'redux'; //imported createStore & Middleware
import rootReducer from '../redux/root-reducer'; //imported root-reducer connecting it to the store
import thunk from 'redux-thunk'; //imported thunk middleware



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
compose; //applied Redux Dev-Tools for debugging

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
//creates store passing functions of rootReducer, componseEnhancers and Middleware

export default store;
