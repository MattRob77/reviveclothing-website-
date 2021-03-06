import React from 'react'; //imported library
import { Link } from 'react-router-dom'; //imported Link to have functionality of using Link
import { connect } from 'react-redux'; //Higher order component that gives components access to redux
import { signOut } from '../../actions/currentUser';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/RVIV (1).svg'; //imported with ReactComponent so react knows about the svg image

import CartIcon from '../cart-icon/cart-icon.component'; //imported the cart icon without functionality for now
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
//import { selectCartHidden } from '../../redux/cart/cartSelectors';
import './header.styles.scss'; //imported styling


const Header = ({ currentUser, hidden, signOut }) => ( //functional component no state
  <div className='header'>
    <Link className='logo-container' to="/">
      <Logo className='logo' />
    </Link>
    <div className='options'>
    <Link className='option' to='/shop'>
      SHOP
    </Link>
    <Link className='option' to='/contact'>
      CONTACT
    </Link>

    {
         currentUser ?
        //conditional for showing the signout button if user is signed in
      <Link onClick={() => auth.signOut()} className='option' to='/'>
        SIGN OUT
      </Link> :
      <Link className='option' to='/signin'>
        SIGN IN
      </Link>
    }

    <CartIcon />
    </div>
      {hidden ? null : <CartDropdown />}
    </div>
)

const mapStateToProps = ({ cart: { hidden } }) => ({
  hidden,
});

export default connect(mapStateToProps, { signOut })(Header);
//<Link className='option' to='/'>
