import React from 'react'; //imported library
import { connect } from 'react-redux';
import { signIn } from "../../actions/currentUser";
import FormInput from '../form-input/form-input.component'; //imported FormInput component
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss'; //imported styling

class SignIn extends React.Component { //class component to handle state
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = event => { //calls the handle submit function
     event.preventDefault(); //prevent the default action from firing
     this.props.signIn(this.state)
     this.setState({ email: '', password: ''})
     this.props.history.push('/')//once submitted gets redirected to homepage/history came from react-router
   }

   handleChange = event => { //calls the handle change for what the user types in
     const { name, value } = event.target; //pulling the name and value off of event target

     this.setState({ [name]: value}); //setting the state if name is email/password will point to value typed in
   }


  render() {
    return(
      <div className='sign-in'>
        <h2>Sign In</h2>
        <span>Sign in with email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
          />

          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
            />


          <CustomButton type='submit'> Sign In</CustomButton>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    signInForm: state.signInForm
  }
}
//
export default connect(mapStateToProps, { signIn })(SignIn);
