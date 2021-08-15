import React, { Component } from 'react';
import './Input.scss';

class InputWithLabel extends Component {

  constructor (props) {
    super(props);

    this.setValue = this.setValue.bind(this);
  }

  setValue (value) {
    this.props.setValue(this.props.name, value);
  }

  render () {

    let { type, placeholder, label, name, value, isValid, errorMessage} = this.props; 
    return (
      <label>
        {label}
          <input 
            type={type} 
            className={(isValid == false ? ' invalid' : '')} 
            placeholder={placeholder} 
            name={name}
            value={value}
            onChange={(event) => {
              this.setValue(event.target.value)
            }}
          />
          <span className="Invalid-messege">
            {errorMessage}
          </span>
      </label>
    );
  }
}

export default InputWithLabel;
