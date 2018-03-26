import {createStore, combineReducers, applyMiddleware} from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import {user} from "./login";
import logger from 'redux-logger'
import {cart} from './cart';
import {products} from './products';
//actions
import {getUserFromLocalStorage} from '../actions/session.actions';


const rootReducer = combineReducers({
    user,
    cart,
    products
});

const generateStore = function(){
    //console.log("store")
    const store = createStore(
        rootReducer,
        applyMiddleware(logger, thunk)
    );
    //initial actions
    store.dispatch(getUserFromLocalStorage());
    return store;
};

export default generateStore;
