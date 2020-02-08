import React from 'react';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl }) => (
  <div style={{
    backgroundImage: `url(${imageUrl})`
  }}className='menu-item'>
    <div className='content'>
      <h1 className='title'>{title}</h1>
      <span className='subtitle'>GO SHOPPING</span>
    </div>
  </div>
);

export default MenuItem;





//exact same thing as props.title
