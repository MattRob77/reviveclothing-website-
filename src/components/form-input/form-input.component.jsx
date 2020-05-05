import React from 'react'; //imported library

import './form-input.styles.scss'; //imported styling

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <div className="group">
    <input className='form-input' onChange={handleChange} {...otherProps} />
    {
      label ?
      <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
        {label}
      </label>
      : null
    }
  </div>
)

export default FormInput;

//funcational component no state. Handle change, label and otherProps for destructuring
//className group for grouping all the objects together
//if value then apply shrink property otherwise empty string
//shrink property is for what the user types in
