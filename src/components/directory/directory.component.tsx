import React from 'react';
import { connect } from 'react-redux';
import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss'
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from './../../redux/directory/directory.selectors';

const Directory = ({sections}:any) => (
          <div className="directory-menu">
                  {sections.map(({ id, ...sectionProperties }:any) => {
                      return <MenuItem key= {id} {...sectionProperties}></MenuItem>
                  })}
          </div>
        )   
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
}); 
export default connect(mapStateToProps)(Directory);