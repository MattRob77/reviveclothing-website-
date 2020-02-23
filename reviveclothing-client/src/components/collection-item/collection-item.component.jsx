import React from 'react'; //imported library

import './collection-item.styles.scss'; //imported styling

const CollectionItem = ({ id, name, price, imageUrl }) => ( //functional component with no state
  <div className='collection-item'>
    <div
    className='image'
    style= {{
      backgroundImage: `url(${imageUrl})`//setting background image with the imageUrl
    }}
    />
    <div className='collection-footer'> //Used a footer for name and price below the image
      <span className='name'>{name}</span> //span is used to group the elements or objects together
      <span className='price'>{price}</span>
    </div>
  </div>
);

export default CollectionItem;
