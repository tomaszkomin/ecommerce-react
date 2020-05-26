import CartActionTypes from './cart.types';
import { iItem } from './../../interfaces/item-interface';
import { addItemToCart } from './cart.utils';
const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}
const cartReducer = (state = INITIAL_STATE, action:any) => {
    switch (action.type){
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems , action.payload)
            };
        case CartActionTypes.TOOGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        default: 
            return  state;
    }
}
export default cartReducer;