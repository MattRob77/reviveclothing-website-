import React from 'react'; //imported library
import { Link } from 'react-router-dom'; //imported Link to have functionality of using Link
import { connect } from 'react-redux'; //Higher order component that gives components access to redux
import { ReactComponent as Logo } from '../../assets/RVIV.svg'; //imported with ReactComponent so react knows about the svg image

import CartIcon from '../cart-icon/cart-icon.component'; //imported the cart icon without functionality for now
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import './header.styles.scss'; //imported styling


const Header = ({ currentUser }) => ( //functional component no state
  <div className='header'>
    <Link className='logo-container' to="/">
      <Logo className='logo' />
    </Link>
    <div className='options'>
    <Link className='option' to='/shop'>
      SHOP
    </Link>
    <Link className='option' to='/'>
      CONTACT
    </Link>
    {
      currentUser && currentUser.email ? //conditional for showing the signout button if user is signed in
      <Link className='option' to='/'>
        SIGN OUT
      </Link> :
      <Link className='option' to='/signin'>
        SIGN IN
      </Link>
    }
  <CartIcon />
  </div>
  <CartDropdown />
</div>
)


// const mapStateToProps = state => { state is the root-reducer
//   return {
//     currentUser: state.currentUser value is the value needed to pass in
//   }
// }

export default connect(state => ({currentUser: state.currentUser}))(Header); //the same as doing mapStateToProps
//mapStateToProps & connect for props from reducers
