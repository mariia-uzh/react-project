import { 
  SET_FILTERS_DATA,
  RESET_FILTERS_DATA
} from './filtersRedirectedIPsAction';

const initialState = {
  filters: {
    ipAddressFrom: '',
    ipAddressTo: '',
    country: '',
    ISP: '',
    domain: '',
    current_page: 1
  }
};

const filtersRedirectedIPsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTERS_DATA:
      return {
        ...state,
        ...action.payload.filters
      };

    case RESET_FILTERS_DATA:
      return initialState;

    default:
      return state;
  }
};

export default filtersRedirectedIPsReducer;
