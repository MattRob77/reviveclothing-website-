import React from 'react'; //imported library

import './collection-item.styles.scss'; //imported styling
import CustomButton from '../custom-button/custom-button.component';

const CollectionItem = ({ id, name, price, imageUrl }) => ( //functional component with no state
  <div className='collection-item'>
    <div
    className='image'
    style= {{
      backgroundImage: `url(${imageUrl})`//setting background image with the imageUrl
    }}
    />
    <div className='collection-footer'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
    <CustomButton> Add to cart </CustomButton>
  </div>
);

export default CollectionItem;


//Used a footer for name and price below the image
//span is used to group the elements or objects together
