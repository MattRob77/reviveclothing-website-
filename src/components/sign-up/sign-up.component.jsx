import React from 'react'; //imported library
//import { updateSignUpForm } from "../../actions/signUpForm";
//import { signUp } from "../../actions/currentUser";
//import { connect } from 'react-redux'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import FormInput from '../form-input/form-input.component'; //imported the form-input
import CustomButton from '../custom-button/custom-button.component'; //imported global custom button

import './sign-up.styles.scss'; //imported styling

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

      handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
          alert("passwords don't match");
          return;
       }

       try {
         const { user } = await auth.createUserWithEmailAndPassword(
           email,
           password
         );

         await createUserProfileDocument(user, { displayName });

         this.setState({
           displayName: '',
           email: '',
           password: '',
           confirmPassword: ''
         });
       } catch (error) {
         console.error(error);
       }
     };

     handleChange = event => {
       const { name, value } = event.target;

       this.setState({ [name]: value });
     };


  //  handleSubmit = event => {
  //   event.preventDefault(); //prevent the default form action
  //   this.props.signUp(this.state)
  //   this.setState({ displayName: '', email: '', password: '', confirmPassword: '' }) //setstate to update the state
  //   // this.props.history.push('/') //once submitted gets redirected to homepage/history came from react-router
  // }

//   handleChange = event => { //calls the handle change for what the user types in
//   const { name, value } = event.target; //pulling the name and value off of event target
//
//   this.setState({ [name]: value}); //setting the state if name is email/password will point to value typed in
// }

 render() {
    const { displayName, email, password, confirmPassword } = this.state;
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

// const mapDispatchToProps = state => {
//   return {
//     signUpForm: state.signUpForm
//   }
// }

// export default connect(mapDispatchToProps, { updateSignUpForm, signUp }) (SignUp);
   export default SignUp;
