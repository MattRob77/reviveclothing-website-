import React from 'react';

const MenuItem = ({ title }) => (
  <div className='menu-item'>
    <div className='content'>
      <h1 className='title'>{title}</h1> //exact same thing as props.title
      <span className='subtitle'>GO SHOPPING</span>
    </div>
  </div>
);

export default MenuItem; 
