import React, { Component } from 'react';
import './Btn.scss';

class Btn extends Component {

  render () {
    
    return (
      <div
        className={this.props.classes}
        onClick={this.props.onClick}
      >
        {this.props.name}
      </div>
    );
  }
}

export default Btn;
