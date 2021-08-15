export const SET_FILTERSVISITORS_DATA = 'SET_FILTERSVISITORS_DATA';

export const setFiltersVisitors = (filters) => {
  return {
    type: SET_FILTERSVISITORS_DATA,
    payload: {
      filters
    }
  };
};