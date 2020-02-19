import React from 'react';
import SHOP_DATA from './shop.data.js';
import CollectionPreview from '../../components/collection-preview/collection-preview';
import { connect } from 'react-redux';
import { getProducts } from '../../actions/products';


class ShopPage extends React.Component {
  constructor(props) {
    super(props);

}
  componentDidMount() {
    this.props.getProducts()
  };

  render() {
    return (<div className='shop-page'>
      {
        this.props.products.map(({id, ...otherCollectionProps}) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))
      }

    </div>)
  }
}

const mapStateToProps = ({products}) => ({
  products: Object.values(products)
})

export default connect(mapStateToProps, { getProducts })(ShopPage); //es6
