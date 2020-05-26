import {createSelector } from 'reselect';

const selectCart = (state:any) => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)
export const selectCartItemsQuantity = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((sum: any,cartItem: any) => (sum + cartItem.quantity),0)
)