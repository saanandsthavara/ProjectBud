import React from 'react';
import {
  Button,
  Container,
  Nav,
  Navbar as NavbarBoostrap,
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import ShoppingIcon from '../assets/ShoppingIcon.svg';
import styles from '../styles/Navbar.module.css';
import clsx from 'clsx';

export const Navbar = () => {
  return (
    <>
      <NavbarBoostrap
        sticky='top'
        className='bg-white shadow-sm mb-3'>
        <Container>
          <Nav className='me-auto'>
            <Nav.Link
              to='/'
              as={NavLink}>
              Home
            </Nav.Link>
            <Nav.Link
              to='/store'
              as={NavLink}>
              Store
            </Nav.Link>
            <Nav.Link
              to='/about'
              as={NavLink}>
              About
            </Nav.Link>
          </Nav>
          <Button
            className={clsx(`${styles.button}`, 'rounded-circle')}
            variant='outline-primary'>
            <img
              src={ShoppingIcon}
              alt='shoppingIcon'
            />
            <div
              className={clsx(
                `${styles.shoppingCartIcon}`,
                'rounded-circle',
                'bg-danger',
                'd-flexjustify-content-center',
                'align-items-center'
              )}>
              2
            </div>
          </Button>
        </Container>
      </NavbarBoostrap>
    </>
  );
};
