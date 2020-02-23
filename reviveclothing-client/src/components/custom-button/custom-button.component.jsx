import React from 'react'; //imported library

import './custom-button.styles.scss'; //imported styling

const CustomButton = ({ children, ...otherProps}) => (
  <button className='custom-button' {...otherProps}> 
    {children}
  </button>
);

export default CustomButton;

//stateless functional component with children and otherprops property spreading otherprops in
//if type submit button now will get the custom button
