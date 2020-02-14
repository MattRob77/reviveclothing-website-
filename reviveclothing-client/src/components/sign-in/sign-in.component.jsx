import React from 'react';
import { connect } from 'react-redux';
import { updateSignInForm } from "../../actions/signInForm";
import { signIn } from "../../actions/currentUser";
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',

    }
  }

    handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: '', password: ''})
  }

  handleChange = event => {
    const { name, value} = event.target;

    this.setState({ [name]: value });
  };
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
export default connect(mapStateToProps, { updateSignInForm, signIn })(SignIn);
