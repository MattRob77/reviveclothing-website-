import React from 'react';//imported in library

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss'; //imported styling


const CartIcon = () => ( //functional component
  <div className='cart-icon'>
    <ShoppingIcon className='shopping-icon' />
  </div>
);




export default CartIcon;
