import { SET_ERROR, SET_MESSAGE } from './constants';

const initialState = {
    error: null,
    message: null
};

const reducer = (state = initialState, { type, payload }) => {

    switch(type) {
        case SET_ERROR:
            return {
                ...state,
                error: payload
            };
        case SET_MESSAGE:
            return {
                ...state,
                message: payload
            };
        default:
            return state;
    }
}

export default reducer; 