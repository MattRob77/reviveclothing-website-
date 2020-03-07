import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shopSelectors';

import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';


const CollectionPage = ({ match }) => (
  <div className='collection'>
    <h2>Collection Page </h2>
  </div>
);




export default CollectionPage;
