import { createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../redux/root-reducer';
import thunk from 'redux-thunk';



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
compose; //DevTools

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default store;
