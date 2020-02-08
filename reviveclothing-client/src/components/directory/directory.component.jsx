import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super(); //To able to grab all of our things inside react component class

    this.state = { //state value
      sections: [{
        title: 'hats',
        imageUrl: 'https://unsplash.com/photos/FwVnAY_xMaY',
        id: 1
      },
      {
        title: 'jackets',
        imageUrl: 'https://unsplash.com/photos/r0l0Es5fbbs',
        id: 2
      },
      {
        title: 'sneakers',
        imageUrl: 'https://unsplash.com/photos/updW-QUccFE',
        id: 3
      },
      {
        title: 'womens',
        imageUrl: 'https://unsplash.com/photos/xe68QiMaDrQ',
        size: 'large',
        id: 4
      },
      {
        title: 'mens',
        imageUrl: 'https://unsplash.com/photos/tBt9JxuQBYs',
        size: 'large',
        id: 5
      }]
    }
  }
  render() {
    return (
      <div className='directory-menu'>
        {
          this.state.sections.map(({title, imageUrl, id, size}) => (
            <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
          ))}
      </div>
    );
  }
}

export default Directory;
