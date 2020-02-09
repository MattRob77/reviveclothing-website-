import React from 'react';
import { withRouter } from 'react-router-dom'; //higher function that takes component and modifies it

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div style={{
    backgroundImage: `url(${imageUrl})`
  }}
  className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>GO SHOPPING</span>
    </div>
  </div>
);

export default withRouter (MenuItem); //returns back menu component and gives access to props





//exact same thing as props.title
