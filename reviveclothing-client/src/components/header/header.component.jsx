import React from 'react'; //imported library
import { Link } from 'react-router-dom'; //imported Link to have functionality of using Link
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/RVIV.svg'; //imported with ReactComponent so react knows about the svg image 

import CartIcon from '../cart-icon/cart-icon.component'; //imported the cart icon without functionality for now

import './header.styles.scss'; //imported styling


const Header = ({ currentUser }) => ( //functional component no state
  <div className='header'>
    <Link className='logo-container' to="/"> //Link to logo so when the user clicks on logo takes the user to the homepage
      <Logo className='logo' />
    </Link>
    <div className='options'>
    <Link className='option' to='/shop'> //Link to the shop route
      SHOP
    </Link>
    <Link className='option' to='/shop'>
      CONTACT
    </Link>
    {
      currentUser && currentUser.email ? //conditional for showing the signout button if user is signed in
      <Link className='option' to='/'>
        SIGN OUT
      </Link> :
      <Link className='option' to='/signin'> //Link to signin route
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

export default connect(state => ({currentUser: state.currentUser}))(Header); //the same as doing mapStateToProps
