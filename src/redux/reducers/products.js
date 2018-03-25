import {combineReducers} from 'redux';
import {ADD_PRODUCT_SUCCESS} from '../actions/products.actions';

function array(state=[], action){
    switch(action.type){
        case ADD_PRODUCT_SUCCESS:
            return [action.product, ...state]
        default:
            return state;
    }
}

export const products = combineReducers({
    array
});