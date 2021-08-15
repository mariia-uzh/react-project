import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from "react-router-dom";

class Header_authorized extends Component {

  constructor (props) {
    super(props);

    this.state = { 
      redirect: false,
    }

    this.sendData =     this.sendData.bind(this);
  }

  sendData() {

    axios.get('/ip/json/account-unauthed.json')
    .then((response) => {
      if (response.data.status == 200) {
        this.setState(state => {
          state.redirect = true;
          return state;
        });

        this.props.onClick();
      }
    })
    .catch(function (error) {
      alert('Error: ' + error);
      console.log('Error: ' + error);
    });
  }

  render () {
    return (
      <div className="Header_authorized">
        <div className="Container">
          <div 
            className="Btn_logout"
            onClick={this.sendData}
          >
            LOG OUT
          </div>
          {
            this.state.redirect ?
            <Redirect push to="/" />
            :
            null
          }
        </div>
      </div>
    );
  }
}

export default Header_authorized;