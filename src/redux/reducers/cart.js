export function cart(state=[], action){
    switch(action.type){
        case "TEST":
            return action.cart;
        default:
            return state;
    }
}