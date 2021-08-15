export const SET_FILTERS_DATA = 'SET_FILTERS_DATA';
export const RESET_FILTERS_DATA = 'RESET_FILTERS_DATA';

export const setFilters = (filters) => {
  return {
    type: SET_FILTERS_DATA,
    payload: {
      filters
    }
  };
};

export const resetFilters = () => {
  return {
    type: RESET_FILTERS_DATA
  }
}