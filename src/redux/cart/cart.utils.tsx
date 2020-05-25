import {iItem} from './../../interfaces/item-interface';
export const addItemToCart = (cartItems: iItem[],cartItemToAdd: { id: any; }) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );
    if(existingCartItem){
        return cartItems.map( cartItem => 
            cartItem.id === cartItemToAdd.id ?
            {...cartItem , quantity: cartItem.quantity + 1 }
            : cartItem
        );
    }
    else{
        return [...cartItems, {...cartItemToAdd, quantity:1}]
    }
}