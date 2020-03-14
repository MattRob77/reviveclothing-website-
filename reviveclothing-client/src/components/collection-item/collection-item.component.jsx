import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cartActions';

import './collection-item.styles.scss';

const CollectionItem = ({ title, item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);



























// import React from 'react'; //imported library
// import { connect } from 'react-redux';
// import './collection-item.styles.scss'; //imported styling
// import CustomButton from '../custom-button/custom-button.component';
// import { addItem } from '../../redux/cart/cartActions';
//
// class CollectionItem extends React.Component  {
//
//   state = {
//     count: 0
//   }
//
//
//     increment = () => {
//       this.setState ({
//         count: this.state.count + 1
//       })
//     }
//
//   render() {
//     const { name, title,  price, imageUrl } = this.props.item;
//   return ( //functional component with no state
//   <div className='collection-item'>
//     <div
//     className='image'
//     style= {{
//       backgroundImage: `url(${imageUrl})`//setting background image with the imageUrl
//     }}
//     />
//     <div className='collection-footer'>
//       <span className='name'>{name}</span>
//       <span className='price'>{price}</span>
//     </div>
//     <CustomButton onClick={() => this.props.addItem(this.props.item)}>
//     Add to cart
//     </CustomButton>
//     <button onClick={this.increment} > Like Item</button>
//     <span className='like-count'>{this.state.count}</span>
//   </div>
// )};
// };
//
// const mapDispatchToProps = dispatch => ({
//   addItem: item => dispatch(addItem(item))
// })
//
//
// export default connect(null, mapDispatchToProps)(CollectionItem);
