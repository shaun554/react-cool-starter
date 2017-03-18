/* @flow */

import type {
  Dispatch,
  GetState,
  ThunkAction,
  Reducer,
} from '../../types';

export const USER_REQUESTING = 'USER_REQUESTING';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_FAILURE = 'USER_FAILURE';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

// Export this for unite testing more easily
export const fetchUser = (userId: string, axios: any): ThunkAction =>
  (dispatch: Dispatch) => {
    dispatch({ type: USER_REQUESTING, userId });

    return axios.get(`${API_URL}/${userId}`)
      .then((res) => {
        dispatch({ type: USER_SUCCESS, userId, data: res.data });
      })
      .catch((err) => {
        dispatch({ type: USER_FAILURE, userId, err });
      });
  };

// Using for preventing dobule fetching data
const shouldFetchUser = (state: Reducer, userId: string): boolean => {
  // In development, we will allow action dispatching
  // or your reducer hot reloading won't updated on the view
  if (__DEV__) return true;

  const userInfo = state.userInfo[userId];

  // Preventing dobule fetching data in production
  if (userInfo && userInfo.readyStatus === USER_SUCCESS) return false;

  return true;
};

export const fetchUserIfNeeded = (userId: string): ThunkAction =>
  (dispatch: Dispatch, getState: GetState, axios: any) => {
    if (shouldFetchUser(getState(), userId)) {
      return dispatch(fetchUser(userId, axios));
    }

    return null;
  };
