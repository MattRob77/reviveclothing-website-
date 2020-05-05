import React from 'react'; //react library
import { connect } from 'react-redux';
import MenuItem from '../menu-item/menu-item.component'; //imports menu-item component

import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directorySelectors';

import './directory.styles.scss'; //imported the stylesheet fore directory

const Directory = ({ sections }) => ( //class component for storing the state
      <div className='directory-menu'>
        {sections.map(({ id, ...otherSectionProps}) => ( //maps through sections and renders the menu-item
            <MenuItem key={id} {...otherSectionProps} /> //passing in all the key value pairs//destructured to get the id
          ))}
      </div>
    );


const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});


export default connect(mapStateToProps)(Directory);
