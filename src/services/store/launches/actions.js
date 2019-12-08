import {
    REQUEST_GET_LAUNCHES,
    REQUEST_SET_FAVORITE,
    SET_LAUNCHES,
    SET_FAVORITE
} from './constants';

export const requestGetLaunches = () => ({type: REQUEST_GET_LAUNCHES});
export const setLaunches = (payload) => ({ type: SET_LAUNCHES, payload});
export const requestSetFavorite = (flight_number) => ({ type: REQUEST_SET_FAVORITE, flight_number});
export const setFavorite = (payload) => ({ type: SET_FAVORITE, payload });