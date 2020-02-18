import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super(); //To able to grab all of our things inside react component class

    this.state = { //state value
      sections: [{

        title: 'womens',
        imageUrl: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60',
        size: 'large',
        id: 6,
        linkUrl: 'womens'
      },
      {
        title: 'mens',
        imageUrl: 'https://images.unsplash.com/photo-1524383954004-5663dc51fa67?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60',
        size: 'large',
        id: 7,
        linkUrl: 'mens'
      },
      {
        title: 'new arrivals',
        imageUrl: 'https://images.unsplash.com/photo-1502920514313-52581002a659?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        size: 'large',
        id: 8,
        linkUrl: 'shop'
      }]
    }
  }
  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps}) => ( //es6 spread operater
            <MenuItem key={id} {...otherSectionProps} /> //passing in all key value pairs
          ))}
      </div>
    );
  }
}

export default Directory;
