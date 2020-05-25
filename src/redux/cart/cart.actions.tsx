import CartActionTypes from './cart.types';
import { iItem } from './../../interfaces/item-interface'

export const toogleCartHidden = () => ({
    type: CartActionTypes.TOOGLE_CART_HIDDEN
})
export const addItem = (item:iItem) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});