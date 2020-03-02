import React from 'react'; //imported library
import { connect } from 'react-redux';
import './collection-item.styles.scss'; //imported styling
import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cartActions';

class CollectionItem extends React.Component  {

  state = {
    count: 0
  }


    increment = () => {
      this.setState ({
        count: this.state.count + 1
      })
    }

  render() {
    const { name, price, imageUrl } = this.props.item;
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
    <CustomButton onClick={() => this.props.addItem(this.props.item)}>
    Add to cart
    </CustomButton>
    <button onClick={this.increment} > Like Item</button>
    <span className='like-count'>{this.state.count}</span>
  </div>
)};
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})
//dispatched the action on the created actual action
//using the addItem action creator

export default connect(null, mapDispatchToProps)(CollectionItem);

// Used span is used to group the elements or objects together
