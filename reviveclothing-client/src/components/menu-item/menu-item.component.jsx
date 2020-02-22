import React from 'react'; //react library
import { withRouter } from 'react-router-dom'; //higher function that takes component and modifies it

import './menu-item.styles.scss'; //imported the stylesheet for menu-item

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => ( //functional component
  <div style={{ //destrucured title, imageUrl, size, history, linkUrl, match/populate the component value with props
    backgroundImage: `url(${imageUrl})`//sets css value of background image equal to the image Url to show images using string interpolation
  }}
  className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1> //uppercases the title 
      <span className='subtitle'>GO SHOPPING</span>
    </div>
  </div>
);
//used props to write js for more flexibility when styling
export default withRouter (MenuItem); //returns back menu component and gives access to props





//exact same thing as props.title
