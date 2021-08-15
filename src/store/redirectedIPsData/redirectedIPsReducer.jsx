import { 
  SET_REDIRECTEDIPS_DATA
} from './redirectedIPsAction';

const initialState = {
  redirectedIPs: {
    ipFrom:       null,
    ipTo:         null,
    countryCode:  null,
    country:      null,
    region:       null,
    city:         null,
    latitude:     null,
    longitude:    null,
    zipCode:      null,
    ISP:          null,
    domain:       null
  },
  pagination: {
    total:          null,
    prev_page:      null,
    current_page:   null,
  }
};

const redirectedIPsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REDIRECTEDIPS_DATA:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};

export default redirectedIPsReducer;
