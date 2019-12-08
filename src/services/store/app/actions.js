import { SET_ERROR, SET_MESSAGE } from './constants';

export const setError = (payload = null) => ({ type: SET_ERROR, payload });
export const setMessage = (payload = null) => ({ type: SET_MESSAGE, payload });