import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from '../reducers/root_reducer';
import thunk from '../thunk/thunk';

const configureStore = (preloadedStore = {}) => {
    
    return createStore(rootReducer, preloadedStore, applyMiddleware(thunk, logger))
}

export default configureStore;