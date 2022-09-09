import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { StoreItems } from '../components/StoreItems';
import dataItems from '../data/store-data.json';

export const Store = () => {
  return (
    <>
      <h1>Store - All at one place</h1>
      <Row
        md={2}
        xs={1}
        lg={3}
        className='g-3'>
        {dataItems.map((data) => (
          <Col key={data.id}>
            <StoreItems {...data} />
          </Col>
        ))}
      </Row>
    </>
  );
};
