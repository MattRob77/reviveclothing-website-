import React from 'react'; //imported library

import CollectionItem from '../collection-item/collection-item.component';//imported the collection-items

import './collection-preview.styles.scss'; //imported styling

const CollectionPreview = ({ title, items }) => ( //functional component with title & items passed in for props
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)////Filtering, Mapping items and index then rendering object that is less than 4
        .map((item) => (
          <CollectionItem key={item.id} item={item} /> //spread the otheritemProps into CollectionItem
        ))}
      </div>
    </div>
);

export default CollectionPreview;
//Could make a scroll like feature with all items items inside
