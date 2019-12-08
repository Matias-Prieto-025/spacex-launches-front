import { SET_LAUNCHES, SET_FAVORITE } from './constants';

const initialState = {
    launches: null
};

const state = (state = initialState, {type, payload}) => {
     
    switch(type) {
    
        case SET_LAUNCHES:
            return {
                ...state,
                launches: payload
            }
        case SET_FAVORITE:
            const newLaunchesList = state.launches.map( launch => launch.flight_number === payload.flight_number ? { ...launch, isFavorite: !launch.isFavorite } : launch);
            return {...state, launches: newLaunchesList}

        default:
            return state;
    }
}

export default state;