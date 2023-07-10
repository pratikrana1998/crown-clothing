import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
    /*Find if cartItems contains the product to add */
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

    /*If found increment quantity */
    if(existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ?
            {...cartItem, quantity: cartItem.quantity + 1} : cartItem
        )
    }

    /*Return new array with modified cartItems/ new Cart Item */
    return [...cartItems, { ...productToAdd, quantity: 1 }];
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0,
});

/*
product
{ 
    id,
    name,
    price, 
    imageUrl
}

Cart Item
{
    id,
    name,
    price, 
    imageUrl,
    quantity
}
*/

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    /* We pass useEffect a callback and this callback runs everytime something in our dependency array changes */
    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItems]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount};
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}