import React from 'react'; //everything needed to use react
import { Switch, Route } from 'react-router-dom'; //interacts with the DOM// Switch for rendering
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser'
import HomePage from './pages/homepage/homepage.component'; //imports the homepage.compenent/pages
import ShopPage from './pages/shop/shop.component'; //imports the shop page
import SignInAndSignUpPage from'./pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component'; //imports header to homepage

import './App.css'; //Css for page


class App extends React.Component { //gives access to render through component//App parent component
  constructor() {
    super(); //calls on constuctor method on the component class//gives access to this.state

    this.state= { //sets props //state turns into props that can be passed down
      currentUser: null
    };
  }

  componentDidMount() { //renders component on the DOM //lifecycle method
    this.props.getCurrentUser() //calls this block of code
  }


  render(){  //render method
    return ( //returns HTML
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

//Once switch sees a match for the route it doens't render anything else(more functionality and cleans up code)
//setstate gives the ability to change the state
// AAFTDRS Action-Creator,Action, Fetch, Thunk, Dispatch, Reducer, Store
//fetch returns a promise
//lexical scoping arrow function

//async happens in the future (promise)
//sync happens instantly
