import CartActionTypes from './cart.types';
import { iItem } from './../../interfaces/item-interface'

export const toogleCartHidden = () => ({
    type: CartActionTypes.TOOGLE_CART_HIDDEN
})
export const addItem = (item:iItem) => {
    return {
        type: CartActionTypes.ADD_ITEM,
        payload: item
    }
};
export const deleteItem = (item:iItem) => ({
    type : CartActionTypes.DELETE_ITEM,
    payload: item
})
export const decreaseItem = (item:iItem) => ({
    type : CartActionTypes.DECREASE_ITEM,
    payload: item
})