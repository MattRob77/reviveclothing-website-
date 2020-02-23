import React from 'react'; //imported library

import CollectionItem from '../collection-item/collection-item.component';//imported the collection-items

import './collection-preview.styles.scss'; //imported styling

const CollectionPreview = ({ title, items }) => ( //functional component with title & items passed in for props
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>Makes the title UpperCase
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)////Filtering, Mapping items and index then rendering object that is less than 4
        .map(({ id, ...otheritemProps}) => (
          <CollectionItem key={id} {...otheritemProps} /> //spread the otheritemProps into CollectionItem
        ))}
      </div>
    </div>
);

export default CollectionPreview;
