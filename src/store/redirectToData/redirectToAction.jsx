export const SET_REDIRECTTO_DATA = 'SET_REDIRECTTO_DATA';

export const setRedirectTo= (data) => {
  return {
    type: SET_REDIRECTTO_DATA,
    payload: data
  };
};