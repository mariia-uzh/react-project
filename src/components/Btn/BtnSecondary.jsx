import React, { Component } from 'react';
import './Btn.scss';

class BtnSecondary extends Component {

  render () {
    let { name, icon} = this.props;

    return (
      <div className="Btn__wrapper">
        <div
          className="Btn_secondary"
          onClick={this.props.openModal}
          >
          <span className={"icon " + icon}></span>
          { name }
        </div>
      </div>
    );
  }
}

export default BtnSecondary;
