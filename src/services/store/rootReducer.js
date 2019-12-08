import { combineReducers } from 'redux';
import app from './app/reducer';
import launches from './launches/reducers';

export default combineReducers({
    app,
    launches
});