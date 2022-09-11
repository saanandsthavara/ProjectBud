import React from 'react';
import { Offcanvas, Stack } from 'react-bootstrap';
import { useShoppingCart } from '../context/CartContext';
import { CartItem } from './CartItem';

type ShoppingCartProps = {
  isOpen: boolean;
};

export const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
  const { closeSideCart, cartItems } = useShoppingCart();
  return (
    <>
      <Offcanvas
        show={isOpen}
        placement='end'
        onHide={closeSideCart}>
        <Offcanvas.Header closeButton>Cart</Offcanvas.Header>
        <Offcanvas.Body>
          <Stack gap={3}>
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                {...item}
              />
            ))}
          </Stack>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
