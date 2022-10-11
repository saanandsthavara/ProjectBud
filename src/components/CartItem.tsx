import clsx from 'clsx';
import React from 'react';
import { Button, Stack } from 'react-bootstrap';
import { useShoppingCart } from '../context/CartContext';
import storeItems from '../data/store-data.json';
import styles from '../styles/CartItem.module.css';

type CartItemProps = {
  id: number;
  quantity: number;
};

export const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <>
      <Stack
        direction='horizontal'
        gap={2}>
        <img
          src={item.imageUrl}
          alt='itemImages'
          className={styles.cartImages}
        />
        <div className='me-auto'>
          <div>
            {item.name}{' '}
            {quantity > 1 && (
              <span className={clsx(`${styles.quantityNumber}`, 'text-muted')}>
                x{quantity}
              </span>
            )}
          </div>
          <div className={clsx('muted-text', styles.price)}>{item.price}</div>
        </div>
        <div>{item.price * quantity}</div>
        <Button
          variant='outline-danger'
          size='sm'
          onClick={() => removeFromCart(item.id)}>
          &times;
        </Button>
      </Stack>
    </>
  );
};
