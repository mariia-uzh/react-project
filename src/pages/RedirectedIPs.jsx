import React, { Component } from 'react';

import Sidebar            from './../components/Sidebar/Sidebar';
import RedirectedIPsSectionContainer from './../sections/RedirectedIPsSection/RedirectedIPsSectionContainer';

class RedirectedIPs extends Component {

  constructor (props) {
    super(props);

    this.state = {
      isOpened: window.innerWidth > 767
    }
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  
  toggleSidebar () {
    this.setState((state) => {
      state.isOpened = !state.isOpened;

      return state;
    })
  }

  render () {
    return (
      <>
        <Sidebar 
          isOpened={this.state.isOpened} 
          toggleSidebar={this.toggleSidebar}
        />
        <div className={"Container__wrapper" + (this.state.isOpened ? " is-opened" : "")}>
          <RedirectedIPsSectionContainer />
        </div>
      </>
    );
  }
}

export default RedirectedIPs;