import React, { Component } from 'react';
import axios from 'axios';
import {validateFieldsUtil, changeState} from './../../utils/utilsForm';
import Btn                from '../Btn/Btn';
import Select             from './../../components/Inputs/Select';
import InputWithLabel     from './../../components/Inputs/InputWithLabel';
import './Modal.scss';

class ModalAddIP extends Component {

  constructor (props) {
    super(props);

    this.state = { 
      filters: {
        ipAddressFrom:  this.props.filters.ipAddressFrom,
        ipAddressTo:    this.props.filters.ipAddressTo,
        country:        this.props.filters.country,
        ISP:            this.props.filters.ISP,
        domain:         this.props.filters.domain,
        current_page:   1
      },
      fields: {
        optionId: 1,
        optionName: 'IP address',
        optionValue: ''
      },
      validatesForFields: {
        optionId: [],
        optionName: [],
        optionValue: ['required']
      },
      isValidFields: {
        optionId: null,
        optionName: null,
        optionValue: null
      },
      errorFields: {
        optionId: true,
        optionName: true,
        optionValue: null
      },
      options: [
        {
          "id":   1,
          "name": "IP address"
        },
        {
          "id":   2,
          "name": "IP address range, CIDR specification"
        },
        {
          "id":   3,
          "name": "Country Code"
        },
        {
          "id":    4,
          "name":  "ISP"
        },
        {
          "id":    5,
          "name":  "Domain"
        }
      ]
    }

    this.setDataToField =   this.setDataToField.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
    this.removeDataFromField =  this.removeDataFromField.bind(this);
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

  removeDataFromField(name) {
    this.setState(state => {
      state.fields[name] = null;

      return state;
    })
  }

  sendData() {

    axios.get('/ip/json/send-data.json', {
      params: this.state.fields
    })
    .then((response) => {
      if (response.data.status == 200) {
        
        this.props.setDataToReducer({filters: this.state.filters});
        this.props.onClick();

      }
    })
    .catch(function (error) {
      alert('Error: ' + error);
      console.log('Error: ' + error);
    });
  }

  render() {

    return (
      <div className="Modal__wrapper">
        <div className="Modal__backdrop"></div>
        <div className="Modal">
          <div className="Modal__heading">
            <div className="Modal__title">
              Add IP
            </div>
            <span 
              className="Modal__icon icon icon-close"
              onClick={this.props.onClick}
            ></span>
          </div>
          <div className="Modal__content center">
            <form className="Form">
              <div className="Input__row">
                <Select
                  label="Add method"
                  options={this.state.options}
                  classes=""
                  isValid={this.state.isValidFields.optionId} 
                  errorMessage={this.state.errorFields.optionId} 
                  placeholder="Choose"
                  name="optionId"
                  selectedOptionId={this.state.fields.optionId} 
                  selectedOptionName={this.state.fields.optionName} 
                  setOption={this.setDataToField}
                />
              </div>
              <div className="Input__row">
                <InputWithLabel
                  label={this.state.fields.optionName}
                  type="text"
                  isValid={this.state.isValidFields.optionValue} 
                  errorMessage={this.state.errorFields.optionValue} 
                  placeholder=""
                  name="optionValue"
                  value={this.state.fields.optionValue}
                  setValue={this.setDataToField}
                />
              </div>
              <div className="Btn__wrapper">
                <Btn
                  classes="Btn_primary"
                  name="Add"
                  onClick={this.handleValidation}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalAddIP;