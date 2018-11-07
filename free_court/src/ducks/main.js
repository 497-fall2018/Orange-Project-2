import axios from 'axios';

import APIConfig from '../config/api';

const mainAPIRoot = `${APIConfig.apiroot}`;

//Action Types
export const LOAD_MAIN = 'free_court/main/LOAD_MAIN';
export const LOAD_MAIN_SUCCESS = 'free_court/main/LOAD_MAIN_SUCCESS';
export const LOAD_MAIN_FAILURE = 'free_court/main/LOAD_MAIN_FAILURE';
export const REQUEST_UPDATE = 'free_court/main/REQUEST_UPDATE';
export const REQUEST_UPDATE_SUCCESS = 'free_court/main/REQUEST_UPDATE_SUCCESS';
export const REQUEST_UPDATE_FAILURE = 'free_court/main/REQUEST_UPDATE_FAILURE';

const INITIAL_STATE = {
    availability: {},
    error_message: "",
    title: "Courts n' Shorts",
    gyms: [{
        name: "SPAC",
        schedule: "Full",
        phone: "hi",
        pic_url: "",
    }],
    loading: false,
};

//Reducers
export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type){
        case LOAD_MAIN:
        case LOAD_MAIN_SUCCESS:
            return {
                ...state,
                gyms: action.payload
            }
        case LOAD_MAIN_FAILURE:
            return {
                ...state,
                error_message: action.payload
            }
        case REQUEST_UPDATE:
        case REQUEST_UPDATE_SUCCESS:
            return {
                ...state,
                loading: true
            }
        case REQUEST_UPDATE_FAILURE:
            return {
                ...state,
                error_message: action.payload
            }
        case REQUEST_UPDATE_FAILURE:
            return {
                ...state,
                error_message: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

// Thunk combo

// Thunk
export function thunk_request_update () {
    return (dispatch, getState) => {
        dispatch({type: REQUEST_UPDATE});
        const url = APIConfig.apiroot + '/v1/update';
        return axios.get(url)
        .then((response) => {
            dispatch({
                type: REQUEST_UPDATE_SUCCESS,
                payload: response.data.response 
            })
        })
        .catch((error) => {
            dispatch({
                type: REQUEST_UPDATE_FAILURE,
                payload: error.data.response.error_message
            })
        })
    }
}

export function thunk_load_main () {
    return (dispatch, getState) => {
        dispatch({type: LOAD_MAIN});
        const url = APIConfig.apiroot + '/v1/gyms';
        return axios.get(url)
        .then((response) => {
            dispatch({
                type: LOAD_MAIN_SUCCESS,
                payload: response.data.response
            })
        })
        .catch((error) => {
            dispatch({
                type: LOAD_MAIN_SUCCESS,
                payload: "Error. Try reopening the app"
            })
        })
    }
}

// Action Creators
