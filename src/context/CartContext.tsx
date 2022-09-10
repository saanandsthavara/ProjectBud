import React, { createContext, ReactNode, useContext, useState } from 'react';
// This component is going to be a react context api where we will be utilising the context api which is used for overcoming the problem of prop drillings in react
// we will also be utilising the custom hooks in this application
type ShoppingCartProviderProps = {
  children: ReactNode;
};

type ShoppingCartContext = {
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => number;
};

type CartItem = {
  id: number;
  quantity: number;
};

const CartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(CartContext);
}
export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // creating individual functions for the implementation of getItemQuantity, increaseQuantity, decreaseQuantity and removeFromCart

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  return (
    <CartContext.Provider value={{ getItemQuantity }}>
      {children}
    </CartContext.Provider>
  );
}
