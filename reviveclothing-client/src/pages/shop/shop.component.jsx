import React from 'react'; //react library
import CollectionPreview from '../../components/collection-preview/collection-preview';
import { connect } from 'react-redux';
import { getProducts } from '../../actions/products'; //imports the fetch from getproducts action instead of uisng frontend to show products



class ShopPage extends React.Component { //class component for storing the state
  constructor(props) //access to the state
{  super(props); //To able to grab all of our things inside react component class
//can refracture turning into functional component
}
  componentDidMount() {
    this.props.getProducts()
  };

  render() {
    return (<div className='shop-page'>
      {
        this.props.products.map(({id, ...otherCollectionProps}) => ( //maps over products
          <CollectionPreview key={id} {...otherCollectionProps} /> //renders and spreads in the otherCollectionprops
        ))
      }

    </div>)
  }
}

const mapStateToProps = ({products}) => ({ //giving access props
  products: Object.values(products) // Object.values creates a new array of all objects
})

export default connect(mapStateToProps, { getProducts })(ShopPage);
//connected component to the redux store
