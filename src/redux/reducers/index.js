import {createStore, combineReducers, applyMiddleware} from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import {user} from "./login";
import logger from 'redux-logger'
import {cart} from './cart';
import {products} from './products';


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
    return store;
};

export default generateStore;
