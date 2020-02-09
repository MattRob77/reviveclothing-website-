import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super(); //To able to grab all of our things inside react component class

    this.state = { //state value
      sections: [{

        title: 'hats',
        imageUrl: 'https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        id: 3
      },
      {
        title: 'jackets',
        imageUrl: 'https://images.unsplash.com/photo-1580047883831-5db03837b0b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        id: 4
      },
      {
        title: 'sneakers',
        imageUrl: 'https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        id: 5
      },
      {
        title: 'womens',
        imageUrl: 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/52612854_10161332520245534_5025432806600212480_n.jpg?_nc_cat=104&_nc_ohc=TMX5GJr6WGoAX-oF55-&_nc_ht=scontent-lga3-1.xx&oh=32df0a18d77718dbe53ed5de05f1b4ff&oe=5EB5ACA6',
        size: 'large',
        id: 6
      },
      {
        title: 'mens',
        imageUrl: 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/67305747_10156684957061051_4648138359351279616_n.jpg?_nc_cat=110&_nc_ohc=h7ar7XqQ0V8AX921UWZ&_nc_ht=scontent-lga3-1.xx&oh=380e59321248c6da096542c3d686e8f7&oe=5EBD45EF',
        size: 'large',
        id: 7
      },
      {
        title: 'new arrivals',
        imageUrl: 'https://images.unsplash.com/photo-1502920514313-52581002a659?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        size: 'large',
        id: 8
      }]
    }
  }
  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({title, imageUrl, id, size}) => (
            <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
          ))}
      </div>
    );
  }
}

export default Directory;
