import React from 'react';
import { updateSignUpForm } from "../../actions/signUpForm";
import { signUp } from "../../actions/currentUser";
import { connect } from 'react-redux'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-up.styles.scss';

class SignUp extends React.Component { //stateful class (store what the user is inputing)
  constructor(props) {
    super(props);

    this.state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

  };

   handleSubmit = event => {
    event.preventDefault();
    this.props.signUp(this.state)
  }

  handleChange = event => {
  const { name, value } = event.target;

  this.setState({ [name]: value});
}

 render() {
    //const { displayName, email, password, confirmPassword } = this.state;
    return(
      <div className='sign-up'>
        <h2 className='title'>Do not have an account?</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='displayName'
            name='displayName'
            handleChange={this.handleChange}
            value={this.state.displayName}
            label='display name'
            required
          />
          <FormInput
            type='email'
            name='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            type='password'
            name='password'
            handleChange={this.handleChange}
            value={this.state.password}
            label='password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            handleChange={this.handleChange}
            value={this.state.confirmPassword}
            label='confirm Password'
            required
          />
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = state => {
  return {
    signUpForm: state.signUpForm
  }
}

export default connect(mapDispatchToProps, { updateSignUpForm, signUp }) (SignUp);
