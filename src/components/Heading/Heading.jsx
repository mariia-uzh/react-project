import React, { Component } from 'react';
import './Heading.scss';

class Heading extends Component {

  render () {

    return (
      <div className="Heading">
        <h1> 
          { this.props.text }
        </h1>
      </div>
    );
  }
}

export default Heading;