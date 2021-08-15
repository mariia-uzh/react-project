import { 
  SET_ACCOUNT_DATA,
  RESET_ACCOUNT_DATA
} from './accountAction';

const initialState = {
  account: {
    userId: null
  }
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACCOUNT_DATA:
      return {
        ...state,
        account: action.payload
      };

    case RESET_ACCOUNT_DATA:
      return initialState;

    default:
      return state;
  }
};

export default accountReducer;
