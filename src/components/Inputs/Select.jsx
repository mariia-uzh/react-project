import React, { Component } from 'react';
import './Input.scss';
import './Select.scss';

class Select extends Component {

  constructor (props) {
    super(props);

    this.state = {
      isOpened: false,
    }

    this.openedToggle =     this.openedToggle.bind(this);
    this.closedToggle =     this.closedToggle.bind(this);
    this.selectOption =    this.selectOption.bind(this);
  }

  openedToggle () {
    this.setState((state) => {
      state.isOpened = !state.isOpened;

      return state;
    })
  }

  closedToggle () {
    this.setState((state) => {
      state.isOpened = false;

      return state;
    })
  }

  selectOption (optionId) {
    this.props.setOption('optionId', optionId);

    this.openedToggle()
  }

  selectOptionName (optionName) {
    this.props.setOption('optionName', optionName);
  }

  render () {

    let { placeholder, icon, label, options, selectedOptionId, isValid, errorMessage} = this.props;

    let [ selectedOption ] = options.filter((option) => {
      return (option.id == selectedOptionId);
    });

    return (
      <div 
        className="Select__wrapper"
        tabIndex="0"
        onBlur={this.closedToggle}
      >
        <label>
          {label}
        </label>
        {(this.props.icon ? icon : '')}
        <div 
          className={'Select ' + (isValid == false ? ' invalid' : '')} 
          onClick={this.openedToggle}
        >
          {
            selectedOption ?
            selectedOption.name
            : placeholder
          }
        </div>
        <span className="Invalid-messege">
          {errorMessage}
        </span>
        <div className={'SelectMenu' + (this.state.isOpened ? ' open' : '')}>
        {
          options.length ?
          options.map((option, k) => {
            return (
              <div
                key={k}
                className={'SelectItem' + ((option.id == selectedOptionId) ? ' selected' : '')}
                onClick={() => {
                  this.selectOption(option.id);
                  this.selectOptionName(option.name);
                }}
              >
                {option.name}
              </div>
            )
          })
          : null
        }
        </div>
      </div>
    );
  }
}

export default Select;
