/*
* this module create and initialises the store.
* it creates the store with a reducer, an initial
* state and applies other redux middlewares.
* */

import {Store} from "./interfaces";
import {people, starships, species, planets, vehicles} from "./actions";
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import appState from './reducers';


// this is the initial state of the store.
let initialState: Store = {
    loadState: 'NOT_LOADING',
    films: [],
    people: people,
    vehicles: vehicles,
    starships: starships,
    planets: planets,
    species: species
};

// initializing the store with the initial state and the thunk middleware for handling dispatched functions.
let store = createStore(appState, initialState, applyMiddleware(thunkMiddleware));

export default store;