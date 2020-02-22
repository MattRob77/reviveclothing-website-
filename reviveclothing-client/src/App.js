import React from 'react'; //everything needed to use react
import { Switch, Route } from 'react-router-dom'; //interacts with the DOM
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser'
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from'./pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import SignUp from './components/sign-up/sign-up.component';
import Header from './components/header/header.component';

import './App.css'; //Css for page


class App extends React.Component { //gives access to render through component
  constructor() {
    super(); //calls on constuctor method on the component class//gives access to this.state

    this.state= { //sets a property
      currentUser: null
    };
  }

  componentDidMount() {
    this.props.getCurrentUser()
  }


  render(){  //render method
    return ( //returns HTML
      <div>
      <Header /> //{}between brackets tells the HTML is Javascript
        <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
        <Route path='/signup' component={SignUp} />
        </Switch>
      </div>
    );
  }
}

export default connect (null, { getCurrentUser }) (App);

//setstate gives the ability to change the state
// AAFTDRS Action-Creator,Action, Fetch, Thunk, Dispatch, Reducer, Store
