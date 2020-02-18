import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/RVIV.svg';

import CartIcon from '../cart-icon/cart-icon.component';

import './header.styles.scss';


const Header = () => (
  <div className='header'>
    <Link className='logo-container' to="/signin">
      <Logo className='logo' />
    </Link>
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
