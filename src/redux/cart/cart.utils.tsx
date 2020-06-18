import {iItem} from './../../interfaces/item-interface';
export const addItemToCart = (cartItems: iItem[],cartItemToAdd:iItem) => {
    console.log(cartItemToAdd.id);
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
export const decreaseItem  = (cartItems: iItem[], cartItemToDecrease:iItem) => {
    const existingCartItem = cartItems.find((cartItem) => (
        cartItem.id === cartItemToDecrease.id
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