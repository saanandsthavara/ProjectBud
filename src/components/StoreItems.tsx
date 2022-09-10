import clsx from 'clsx';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import styles from '../styles/StoreItems.module.css';

type StoreItemsProps = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};

export const StoreItems = ({ id, name, price, imageUrl }: StoreItemsProps) => {
  // declaring hard-coded value as of now
  const quantity = 0;
  return (
    <>
      <Card className='h-100'>
        <Card.Img
          variant='top'
          src={imageUrl}
          height='200px'
          style={{ objectFit: 'cover' }}
        />
        <Card.Body className='d-flex flex-column'>
          <Card.Title className='d-flex justify-content-between align-items-baseline mb-3'>
            <span className='fs-2'>{name}</span>
            <span className='ms-2 text-muted'>{price}</span>
          </Card.Title>
          <div className='mt-auto'>
            {quantity === 0 ? (
              <Button
                variant='primary'
                className='w-100'>
                + Add to Cart
              </Button>
            ) : (
              <div
                className={clsx(
                  `${styles.itemsButton}`,
                  'd-flex',
                  'align-items-center',
                  'flex-column'
                )}>
                <div
                  className={clsx(
                    `${styles.itemsButton}`,
                    'd-flex',
                    'align-items-center',
                    'justify-content-center'
                  )}>
                  <Button>-</Button>
                  <div>
                    <span className='fs-3'>{quantity}</span> in Cart
                  </div>
                  <Button>+</Button>
                </div>
                <Button
                  variant='danger'
                  size='sm'>
                  Remove Items
                </Button>
              </div>
            )}
          </div>
        </Card.Body>
      </Card>
    </>
  );
};
