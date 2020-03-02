import React from 'react';

import CustumButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => (
  <div className='cart-dropdown'>
    <div className='cart-items' />
    <CustumButton>CHECKOUT</CustumButton>
  </div>
)

export default CartDropdown;
