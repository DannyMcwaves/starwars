/**
 * the functions exported from this component will make requests to the star wars api
 * to get a dispatch objects using redux-thunk.
 * they are dispatched from the component.
 * */

import {LoadAction} from './interfaces';
import {LOADING, NOT_LOADING} from './actions';

const Loading:LoadAction = {type: LOADING};
const NotLoading:LoadAction = {type: NOT_LOADING};

// this function gets a list of all the films and
// dispatches the film action when the film is available.
const getDataAndDispatch = ($, url) => (dispatch) => {
    dispatch(Loading);
    return $.get(url).done((data) => {
        dispatch({type: 'FILM_ACTION', data: data.results});
    }).fail(err => {
        console.log(err);
    }).always(_ => {
        dispatch(NotLoading);
    });
};


// this function gets an object corresponding to the url and firs the appropriate
// action type passed to it.
const getDataAndDispatchObject = ($, url, action) => (dispatch) => {
    dispatch(Loading);
    return $.get(url).done((data) => {
        dispatch({type: action, data: data});
    }).fail(err => {
        console.log(err);
    }).always(_ => {
        dispatch(NotLoading);
    });
};

export { getDataAndDispatch, getDataAndDispatchObject };
