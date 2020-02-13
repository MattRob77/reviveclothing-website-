import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';


const CartIcon = () => (
  <div className='cart-icon'>
    <ShoppingIcon className='shopping-icon' />
  </div>
)

export default CartIcon;
