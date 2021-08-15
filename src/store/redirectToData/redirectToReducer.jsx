import { 
  SET_REDIRECTTO_DATA
} from './redirectToAction';

const initialState = {
  redirectTo: ''
};

const redirectToReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REDIRECTTO_DATA:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};

export default redirectToReducer;
