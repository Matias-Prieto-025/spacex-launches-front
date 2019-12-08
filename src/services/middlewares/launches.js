import { call, put, takeLatest } from 'redux-saga/effects';
import { REQUEST_GET_LAUNCHES, REQUEST_SET_FAVORITE} from '../store/launches/constants';
import { setLaunches, setFavorite } from '../store/launches/actions';
import { setError, setMessage } from '../store/app/actions'
import apiCalls from '../apiCalls/launches'; 

function* getLaunches() {

    try {
        const response = yield call(apiCalls.getLaunches);
        yield put(setLaunches(response.data));
    } catch (error) {
        yield put(setError('Error on load launches'));
    }
}

function* setFavoriteLaunch(flight_number) {
    try {
        const response = yield call(apiCalls.setFavorite, flight_number);
        if (response.data) {
            yield put(setFavorite(flight_number))
            yield put(setMessage('Launch settled as favorite!'))
        }
    } catch (error) {        
        yield put(setError('Error on set launch as favorite'))
    }
}

export const launchesSagas = [
    takeLatest(REQUEST_GET_LAUNCHES, getLaunches),
    takeLatest(REQUEST_SET_FAVORITE, setFavoriteLaunch)
]