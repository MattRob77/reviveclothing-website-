import React from 'react';

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
        id: 4
      },
      {
        title: 'mens',
        imageUrl: 'https://unsplash.com/photos/tBt9JxuQBYs',
        id: 5
      }]
    }
  }
  render() {
    return (
      <div className='directory-menu'></div> 
    )
  }
}
