import React from 'react'; //imported library

import './custom-button.styles.scss'; //imported styling

const CustomButton = ({ children, ...otherProps}) => ( //stateless functional component with children and otherprops property spreading otherprops in
  <button className='custom-button' {...otherProps}> //if type submit button now will get the custom button
    {children}
  </button>
);

export default CustomButton;
