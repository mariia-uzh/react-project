import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from "react-router-dom";
import {validateFieldsUtil, changeState} from './../../utils/utilsForm';
import Btn from '../../components/Btn/Btn';
import InputWithLabel from './../../components/Inputs/InputWithLabel';
import './LogInSection.scss';

class LogInSection extends Component {

  constructor (props) {
    super(props);

    this.state = { 
      fields: {
        login: '',
        password: ''
      },
      validatesForFields: {
        login: ['required'],
        password: ['required']
      },
      isValidFields: {
        login: null,
        password: null
      },
      errorFields: {
        login: null,
        password: null
      },
      redirect: false,
    }

    this.setDataToField =   this.setDataToField.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
    this.sendData =         this.sendData.bind(this);
  }

  setDataToField(name, value) {
    this.setState(state => {

      changeState (state, name, value);

      return state;
    });
  }

  handleValidation(){

    this.setState(state => {

      let stateValidated = validateFieldsUtil(state);

      return stateValidated;
    }, () => {

      let isValidFields = true;

      for (let fieldName in this.state.isValidFields) {
        if (!this.state.isValidFields[fieldName]) {
          isValidFields = false;
          break;
        }
      }

      if (isValidFields) {
        this.sendData();
      }
    });
  }

  sendData() {

    axios.get('/ip/json/account.json', {
      params: this.state.fields
    })
    .then((response) => {
      if (response.data.status == 200) {
        this.props.setAccount(response.data.account);
        this.setState(state => {

          state.redirect = true;
          window.scrollTo(0, 0);
          
          return state;
        });
      }
    })
    .catch(function (error) {
      alert('Error: ' + error);
      console.log('Error: ' + error);
    });
  }

  render() {

    return (
      <div className="Container">
        <div className="LogInSection">
          <img 
            className="LogInSection__img" 
            src="/ip/images/img-login.svg"
            alt="" 
          />
          <h1 className="Title">
            Log in
          </h1>
          <form className="Form">
            <div className="Input__row">
              <InputWithLabel
                label="Login" 
                type="text"
                isValid={this.state.isValidFields.login} 
                errorMessage={this.state.errorFields.login} 
                placeholder="Login"
                name="login"
                value={this.state.fields.login}
                setValue={this.setDataToField}
              />
            </div>
            <div className="Input__row">
              <InputWithLabel
                label="Password" 
                type="password"
                isValid={this.state.isValidFields.password} 
                errorMessage={this.state.errorFields.password} 
                placeholder="Password"
                name="password"
                value={this.state.fields.password}
                setValue={this.setDataToField}
              />
            </div>
            <div className="Btn__wrapper">
              <Btn
                classes="Btn_primary"
                name="Log in"
                onClick={this.handleValidation}
              />
              {
                this.state.redirect ?
                <Redirect push to="/redirected-ips" />
                :
                null
              }
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LogInSection;
