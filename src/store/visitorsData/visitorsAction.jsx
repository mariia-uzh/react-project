export const SET_VISITORS_DATA = 'SET_VISITORS_DATA';

export const setVisitors= (arr) => {
  return {
    type: SET_VISITORS_DATA,
    payload: arr
  };
};