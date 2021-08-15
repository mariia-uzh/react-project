import { 
  SET_VISITORS_DATA
} from './visitorsAction';

const initialState = {
  visitors: {
    time:       null,
    ip:         null,
    countryCode: null,
    region:     null,
    city:       null,
    ISP:        null,
    domain:     null,
    referrer:   null,
    enterPage:  null
  },
  pagination: {
    total:          null,
    prev_page:      null,
    current_page:   null,
  }
};

const visitorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VISITORS_DATA:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};

export default visitorsReducer;
