import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser'
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from'./pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';

import './App.css';


class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }


  render(){
    return (
      <div>
      <Header />
        <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default connect (null, { getCurrentUser }) (App);
