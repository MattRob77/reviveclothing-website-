import React from 'react'; //react library

import CollectionPage from '../collection/collection.component';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';


import { Route } from 'react-router-dom';

const ShopPage = ({ match }) => (

    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );


export default ShopPage;
