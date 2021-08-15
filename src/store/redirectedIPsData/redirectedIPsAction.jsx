export const SET_REDIRECTEDIPS_DATA = 'SET_REDIRECTEDIPS_DATA';

export const setRedirectedIPs= (data) => {
  return {
    type: SET_REDIRECTEDIPS_DATA,
    payload: data
  };
};