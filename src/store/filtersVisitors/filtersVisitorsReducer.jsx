import { 
  SET_FILTERSVISITORS_DATA
} from './filtersVisitorsAction';

const initialState = {
  filters: {
    current_page: 1
  }
};

const filtersVisitorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTERSVISITORS_DATA:
      return {
        ...state,
        ...action.payload.filters
      };

    default:
      return state;
  }
};

export default filtersVisitorsReducer;
