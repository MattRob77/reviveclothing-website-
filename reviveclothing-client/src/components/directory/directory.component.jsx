import React from 'react'; //react library

import MenuItem from '../menu-item/menu-item.component'; //imports menu-item component

import './directory.styles.scss'; //imported the stylesheet fore directory

class Directory extends React.Component { //class component for storing the state
  constructor() {
    super(); //To able to grab all of our things inside react component class

    this.state = { //setting the state value for menu-item sections
      sections: [{

        title: 'womens',
        imageUrl: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60',
        size: 'large',
        id: 6,
        linkUrl: 'collection/womens'
      },
      {
        title: 'mens',
        imageUrl: 'https://images.unsplash.com/photo-1524383954004-5663dc51fa67?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60',
        size: 'large',
        id: 7,
        linkUrl: 'collection/mens'
      },
      {
        title: 'new arrivals',
        imageUrl: 'https://images.unsplash.com/photo-1502920514313-52581002a659?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        size: 'large',
        id: 8,
        linkUrl: 'collection/new'
      }]
    }
  }
  render() {
    return ( //returns the directory-menu
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps}) => ( //maps through sections and renders the menu-item
            <MenuItem key={id} {...otherSectionProps} /> //passing in all the key value pairs//destructured to get the id
          ))}
      </div>
    );
  }
}

export default Directory;
