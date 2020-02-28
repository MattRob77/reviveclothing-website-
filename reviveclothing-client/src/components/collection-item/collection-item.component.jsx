import React from 'react'; //imported library
import { connect } from 'react-redux';
import './collection-item.styles.scss'; //imported styling
import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cartActions';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return ( //functional component with no state
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
    <CustomButton onClick={() => addItem(item)}>
    Add to cart
    </CustomButton>
  </div>
);
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})
//dispatched the action on the created actual action
//using the addItem action creator 

export default connect(null, mapDispatchToProps)(CollectionItem);


//Used a footer for name and price below the image
//span is used to group the elements or objects together
