import React, { createContext, ReactNode, useContext, useState } from 'react';
// This component is going to be a react context api where we will be utilising the context api which is used for overcoming the problem of prop drillings in react
// we will also be utilising the custom hooks in this application
type ShoppingCartProviderProps = {
  children: ReactNode;
};

type ShoppingCartContext = {
  openSideCart: () => void;
  closeSideCart: () => void;
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQuantity: number;
  cartItems: CartItem[];
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
  const [isOpen, setIsOpen] = useState(false);

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const openSideCart = () => setIsOpen(true);

  const closeSideCart = () => setIsOpen(false);
  // creating individual functions for the implementation of getItemQuantity, increaseQuantity, decreaseQuantity and removeFromCart

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id: number) {
    // we are setting our cartItems

    setCartItems((currentItems) => {
      // if there is no items in our cart
      if (currentItems.find((item) => item.id === id) == null) {
        return [...currentItems, { id, quantity: 1 }];
      }
      // if there are items in our cart then we need to append them
      else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseCartQuantity(id: number) {
    setCartItems((currentItems) => {
      // we are checking if the cart has already items in it
      if (currentItems.find((item) => item.id === id)?.quantity === 1) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id: number) {
    setCartItems((currentItems) => {
      // we are filtering the items
      return currentItems.filter((item) => item.id !== id);
    });
  }

  return (
    // we are going to pass the functions as a props to CartContext component
    <CartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        openSideCart,
        closeSideCart,
        cartItems,
        cartQuantity,
      }}>
      {children}
    </CartContext.Provider>
  );
}
