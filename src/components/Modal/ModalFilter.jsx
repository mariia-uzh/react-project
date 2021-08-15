import React, { Component } from 'react';
import Btn          from '../Btn/Btn';
import InputWithLabel     from './../../components/Inputs/InputWithLabel';
import './Modal.scss';

class ModalFilter extends Component {

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
      }
    }

    this.setDataToField =   this.setDataToField.bind(this);
    this.sendData =         this.sendData.bind(this);
  }

  setDataToField(name, value) {
    this.setState(state => {

      state.filters[name] = value;

      return state;
    });
  }

  sendData() {

    this.props.setDataToReducer({filters: this.state.filters});
    this.props.onClick();
  }

  render() {

    return (
      <div className="Modal__wrapper">
        <div className="Modal__backdrop"></div>
        <div className="Modal Modal_lg">
          <div className="Modal__heading">
            <div className="Modal__title">
              Filter
            </div>
            <span 
              className="Modal__icon icon icon-close"
              onClick={this.props.onClick}
            ></span>
          </div>
          <div className="Modal__content">
            <form className="Form">
              <div className="Input__row">
                <InputWithLabel
                  label="IP Address from"
                  type="text"
                  placeholder=""
                  name="ipAddressFrom"
                  value={this.state.filters.ipAddressFrom}
                  setValue={this.setDataToField}
                />
                <InputWithLabel
                  label="IP Address to"
                  type="text"
                  placeholder=""
                  name="ipAddressTo"
                  value={this.state.filters.ipAddressTo}
                  setValue={this.setDataToField}
                />
              </div>
              <div className="Input__row">
                <InputWithLabel
                  label="Country"
                  type="text"
                  placeholder=""
                  name="country"
                  value={this.state.filters.country}
                  setValue={this.setDataToField}
                />
                <InputWithLabel
                  label="ISP"
                  type="text"
                  placeholder=""
                  name="ISP"
                  value={this.state.filters.ISP}
                  setValue={this.setDataToField}
                />
              </div>
              <div className="Input__row">
                <InputWithLabel
                  label="Domain"
                  type="text"
                  placeholder=""
                  name="domain"
                  value={this.state.filters.domain}
                  setValue={this.setDataToField}
                />
              </div>
                <div className="Btn__wrapper">
                  <Btn
                    classes="Btn_primary"
                    name="Filter"
                    onClick={this.sendData}
                  />
                </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalFilter;