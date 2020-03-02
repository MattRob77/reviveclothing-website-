import React from 'react';//imported in library
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cartActions';

import { ReactComponent as ShoppingIcon } from '../../assets/sales.svg';
import './cart-icon.styles.scss'; //imported styling


const CartIcon = ({ toggleCartHidden }) => ( //functional component
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
  </div>
);


const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});



export default connect(null, mapDispatchToProps)(CartIcon);
