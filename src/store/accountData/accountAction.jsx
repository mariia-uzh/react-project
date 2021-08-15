export const SET_ACCOUNT_DATA = 'SET_ACCOUNT_DATA';
export const RESET_ACCOUNT_DATA = 'RESET_ACCOUNT_DATA';

export const setAccount= (account) => {
  return {
    type: SET_ACCOUNT_DATA,
    payload: account
  };
};

export const resetAccount = () => {
  return {
    type: RESET_ACCOUNT_DATA
  }
}