import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPreview }  from '../../redux/shop/shopSelectors';

import CollectionPreview from '../collection-preview/collection-preview.component';

import './collections-overview.styles.scss';



const CollectionsOverview = ({ collections }) => (
  <div className='collections-overview'>
  {collections.map(({id, ...otherCollectionProps}) => ( //maps over products
      <CollectionPreview key={id} {...otherCollectionProps} /> //renders and spreads in the otherCollectionprops
    ))}
  </div>
);


const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
