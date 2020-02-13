import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';


const CartIcon = ({ toggleCartHidden}) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
  </div>
);




export default CartIcon;
