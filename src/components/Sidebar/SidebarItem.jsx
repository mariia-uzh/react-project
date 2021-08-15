import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class SidebarItem extends Component {

  render () {
    
    let { icon, name, link} = this.props.sidebarItem; 

    return (
      <>
        <NavLink to={link} className="SidebarItem" activeClassName="selected">
          <span className={"icon " + icon}></span>
          <span className="SidebarItem__name hidden">
            {name}
          </span>
        </NavLink>
      </> 
    );
  }
}

export default SidebarItem;