import React, { Component } from 'react';
import axios from 'axios';
import Header_authorized from './Header_authorized';
import Header_unauthorized from './Header_unauthorized';
import './Header.scss';

class Header extends Component {

  componentDidMount () {

    axios.get('/ip/json/account-unauthed.json')
    .then((response) => {
      if (response.data.status == 200) {
        this.props.setAccount(response.data.account);
      }
    })
    .catch(function (error) {
      alert('Error: ' + error);
      console.log('Error: ' + error);
    });
  }
  
  render () {
    return (
      <div className="Header">
          {
          this.props.account && this.props.account.userId
            ?
            <Header_authorized 
              onClick={this.props.resetAccount}
            />
            : 
            <Header_unauthorized />
          }
      </div>
    );
  }
}

export default Header; 
