import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import CartIcon from '../cart-icon/cart-icon.component';

import './header.styles.scss';


const Header = () => (
  <div className='header'>
    <div className='options'>
    <Link className='option' to='/shop'>
      SHOP
    </Link>
    <Link className='option' to='/shop'>
      CONTACT
    </Link>
    <Link className='option' to='/signin'>
      SIGNIN
    </Link>
  <CartIcon />
  </div>
</div>
)


export default Header;
