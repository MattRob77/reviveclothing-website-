import React from 'react'; //imported library

import './contact-input.styles.scss'; //imported styling

const ContactInput = ({ handleChange, label, ...otherProps }) => (
    <div className="group">
    <input className='contact-input' onChange={handleChange} {...otherProps} />
    {
      label ?
      <label className={`${otherProps.value.length ? 'shrink' : ''} contact-input-label`}>
        {label}
      </label>
      : null
    }
  </div>
)

export default ContactInput;
