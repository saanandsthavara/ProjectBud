import React from 'react';
import { Offcanvas, Stack } from 'react-bootstrap';
import { useShoppingCart } from '../context/CartContext';
import { CartItem } from './CartItem';
import { StoreItems } from './StoreItems';
import storeItems from '../data/store-data.json';

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
            <div className='ms-auto fw-bold fs-5'>
              Total INR :{' '}
              {cartItems.reduce((total, cartItem) => {
                const item = storeItems.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)}
            </div>
          </Stack>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
