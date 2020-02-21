import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/RVIV.svg';

import CartIcon from '../cart-icon/cart-icon.component';

import './header.styles.scss';


const Header = ({ currentUser }) => (
  <div className='header'>
    <Link className='logo-container' to="/">
      <Logo className='logo' />
    </Link>
    <div className='options'>
    <Link className='option' to='/shop'>
      SHOP
    </Link>
    <Link className='option' to='/shop'>
      CONTACT
    </Link>
    {
      currentUser && currentUser.email ?
      <Link className='option' to='/'>
        SIGN OUT
      </Link> :
      <Link className='option' to='/signin'>
        SIGN IN
      </Link>
    }
  <CartIcon />
  </div>
</div>
)


// const mapStateToProps = state => {
//   return {
//     currentUser: state.currentUser
//   }
// }

export default connect(state => ({currentUser: state.currentUser}))(Header);
