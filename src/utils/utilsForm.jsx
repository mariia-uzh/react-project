import validator from 'validator';

export function validateFieldsUtil(state) {
  for (let key in state.validatesForFields) {

    if (state.validatesForFields[key].length === 0) {
      state.isValidFields[key] = true;
    }

    state.validatesForFields[key].every(function (validation) {
      switch (validation) {
        case 'required':
          if (state.fields[key] && state.fields[key].length) {
            state.isValidFields[key] = true;
            state.errorFields[key] = null;
          }
          else {
            state.isValidFields[key] = false;
            state.errorFields[key] = 'Mandatory. Please complete.';
            return false;
          }
          break;

        case 'email':
          if (state.fields[key] && validator.isEmail(state.fields[key])) {
            state.isValidFields[key] = true;
            state.errorFields[key] = null;
          }
          else {
            state.isValidFields[key] = false;
            state.errorFields[key] = 'Please provide a valid email address.';
            return false;
          }
          break;

        case 'select':
          if (state.fields[key] && state.fields[key].length) {
            state.isValidFields[key] = true;
            state.errorFields[key] = null;
          }
          else {
            state.isValidFields[key] = false;
            state.errorFields[key] = 'Please choose one';
            return false;
          }
          break;

        case 'radio':
          if (state.fields[key] && state.fields[key].length) {
            state.isValidFields[key] = true;
            state.errorFields[key] = null;
          }
          else {
            state.isValidFields[key] = false;
            state.errorFields[key] = 'Please choose one';
            return false;
          }
          break;

        case 'checkbox':
          if (state.fields[key] && state.fields[key] == true) {
            state.isValidFields[key] = true;
            state.errorFields[key] = null;
          }
          else {
            state.isValidFields[key] = false;
            return false;
          }
          break;

        }
      return true;
    });
  }
  return state;
}

export function changeState (state, name, value) {
  state.fields[name]        = value;
  state.isValidFields[name] = null;
  state.errorFields[name]   = null;
  
  return name, value;
}