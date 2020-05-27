import {iItem} from './../../interfaces/item-interface';
import CartItem from '../../components/cart-item/cat-item.component';
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
export const decreaseItem  = (cartItems: iItem[], cartItemToDecrease: { id: any; }) => {
    const existingCartItem = cartItems.find((cartItem) => (
        cartItem.id = cartItemToDecrease.id
    ))
    if( existingCartItem?.quantity === 1 ){
        //keep items from cart, remove item to decrease if quantity is 1
        return cartItems.filter(CartItem => CartItem.id !== cartItemToDecrease.id)
    }
    return cartItems.map( 
        cartItem => cartItem.id === cartItemToDecrease.id ? 
        { ...cartItem , quantity: cartItem.quantity -1  }
        :
        cartItem
    )
}