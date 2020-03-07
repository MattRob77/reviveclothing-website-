import React from 'react'; //react library

import CollectionPage from '../collection/collection.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
//import { getProducts } from '../../actions/products'; //imports the fetch from getproducts action instead of uisng frontend to show products
import { Route } from 'react-router-dom';

const ShopPage = ({ match }) => (
  //class component for storing the state
//   constructor(props) //access to the state
// {  super(props); //To able to grab all of our things inside react component class
// //can refracture turning into functional component
// }
//   componentDidMount() {
//     this.props.getProducts()
//   };

  // render() {
  //   return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );


// const mapStateToProps = ({products}) => ({ //giving access props
//   products: Object.values(products) // Object.values creates a new array of all objects
// })

export default ShopPage;
//connected component to the redux store { getProducts }
