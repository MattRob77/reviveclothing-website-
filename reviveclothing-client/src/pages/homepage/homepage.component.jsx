import React from 'react'; //react library

import Directory from '../../components/directory/directory.component';

import './homepage.styles.scss'; //imports styling for the homepage 


const HomePage = () => ( //set functional component homepage will not store state//stateless
  <div className='homepage'>
    <Directory />
  </div>
);

export default HomePage; //exported new function
