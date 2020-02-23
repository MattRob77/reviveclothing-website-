import React from 'react'; //imported library

import SignIn from '../../components/sign-in/sign-in.component'; //imported sign-in component
import SignUp from '../../components/sign-up/sign-up.component'; //imported sign-up component

import './sign-in-and-sign-up.styles.scss'; //imported styling

const SignInAndSignUpPage = ({history}) => ( //functional component with no state
  <div className='sign-in-and-sign-up'>
  <SignIn history={history} />
  <SignUp />
  </div>
)

export default SignInAndSignUpPage;
