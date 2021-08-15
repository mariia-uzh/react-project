import React, { Component } from 'react';
import SidebarItem from './SidebarItem';
import './Sidebar.scss';

class Sidebar extends Component {

  constructor (props) {
    super(props);

    this.state = {
      sidebarItems: [
        {
          "name":     "Redirected IPs",
          "link":     "/redirected-ips",
          "icon":     "icon-location"
        },
        {
          "name":     "Visitors",
          "link":     "/visitors",
          "icon":     "icon-visitors"
        }
      ]
    }
  }

  render () {
    return (
      <div className={"Sidebar__wrapper" + (this.props.isOpened ? " is-opened" : "")}>
        <div className="Sidebar__header">
          <img src="/ip/images/Logo-white.png" className="hidden" alt="" />
          <div className="Burger" onClick={this.props.toggleSidebar}>
            <span className="Burger__line"></span>
          </div>
        </div>
        <div className="Sidebar">
          {
            this.state.sidebarItems.length ?
              this.state.sidebarItems.map((sidebarItem, k) => {
                return (
                  <SidebarItem sidebarItem={sidebarItem} key={k} />
                )
              })
              : null
            }
        </div>
      </div>
    );
  }
}

export default Sidebar;