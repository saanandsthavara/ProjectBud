import React from 'react';
import { Card } from 'react-bootstrap';

type StoreItemsProps = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};

export const StoreItems = ({ id, name, price, imageUrl }: StoreItemsProps) => {
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
          <div className='mt-auto'></div>
        </Card.Body>
      </Card>
    </>
  );
};
