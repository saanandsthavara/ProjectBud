import React, { createContext, ReactNode, useContext } from 'react';
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

const CartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(CartContext);
}
export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>;
}
