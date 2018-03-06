/**
 * defining the various set of reducers
 * for creating and updating the state of the store
 * when actions are dispatched from within the app.
 * */

import {combineReducers} from 'redux';
import {loadReducer, filmReducer, vehiclesReducer, planetsReducer, speciesReducer, starshipsReducer, peopleReducer} from './interfaces';
import {NOT_LOADING, LOADING, FILM_ACTION, PEOPLE_ACTION,
    STARSHIPS_ACTION, PLANETS_ACTION, SPECIES_ACTION, VEHICLE_ACTION,
    species, planets, vehicles, starships, people} from './actions';


const loadStateReducer:loadReducer = (state = NOT_LOADING, action) => {
    switch(action.type) {
        case NOT_LOADING:
            return NOT_LOADING;
        case LOADING:
            return LOADING;
        default:
            return state
    }
};

const filmReducer:filmReducer = (state = [], action) => {
    switch(action.type) {
        case FILM_ACTION:
            return action.data;
        default:
            return state;
    }
};

const vehiclesReducer:vehiclesReducer = (state=vehicles, action) => {
    switch (action.type) {
        case VEHICLE_ACTION:
            return action.data;
        default:
            return state
    }
};

const planetsReducer:planetsReducer = (state=planets, action) => {
    switch (action.type) {
        case PLANETS_ACTION:
            return action.data;
        default:
            return state
    }
};

const speciesReducer:speciesReducer = (state=species, action) => {
    switch (action.type) {
        case SPECIES_ACTION:
            return action.data;
        default:
            return state
    }
};

const peopleReducer:peopleReducer = (state=people, action) => {
    switch (action.type) {
        case PEOPLE_ACTION:
            return action.data;
        default:
            return state
    }
};

const starshipsReducer:starshipsReducer = (state=starships, action) => {
    switch (action.type) {
        case STARSHIPS_ACTION:
            return action.data;
        default:
            return state
    }
};

// export the default reducer by combining a mapping
// of all the reducers to properties in global store.
export default combineReducers({
    loadState: loadStateReducer,
    films: filmReducer,
    vehicles: vehiclesReducer,
    species: speciesReducer,
    planets: planetsReducer,
    starships: starshipsReducer,
    people: peopleReducer
});
