import {postProduct} from '../../api/express';

export const ADD_PRODUCT_SUCCESS = "ADD_PRODUCT_SUCCESS";

function addProductSuccess(product){
    return {
        type:ADD_PRODUCT_SUCCESS,
        product
    }
}

export const addProduct = (newProduct) => (dispatch) => {
    return postProduct(newProduct)
    .then(product=>{
        dispatch(addProductSuccess(product))
        return product;
    })
    .catch(e=>console.log(e));
}