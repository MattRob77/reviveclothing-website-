import React from 'react';//imported in library

import { ReactComponent as ShoppingIcon } from '../../assets/sales.svg';
import './cart-icon.styles.scss'; //imported styling


const CartIcon = () => ( //functional component
  <div className='cart-icon'>
    <ShoppingIcon className='shopping-icon' />
  </div>
);




export default CartIcon;
