import CartActionTypes from './cart.types';
import { addItemToCart, decreaseItem } from './cart.utils';
const INITIAL_STATE:any = {
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
        case CartActionTypes.DELETE_ITEM:
            return{
                ...state,
                cartItems: state.cartItems.filter((cartItem:any) => cartItem.id !== action.payload.id)
            }
        case CartActionTypes.DECREASE_ITEM:
            return{
                ...state,
                cartItems: decreaseItem( state.cartItems, action.payload)
            }
        default: 
            return  state;
    }
}
export default cartReducer;