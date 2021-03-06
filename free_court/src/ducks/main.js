import axios from 'axios';

import APIConfig from '../config/api';

const mainAPIRoot = `${APIConfig.apiroot}`;

//Action Types
export const SUBSCRIBE = 'free_court/main/SUBSCRIBE';
export const SUBSCRIBE_SUCCESS = 'free_court/main/SUBSCRIBE_SUCCESS';
export const SUBSCRIBE_FAILURE = 'free_court/main/SUBSCRIBE_FAILURE';
export const LOAD_MAIN = 'free_court/main/LOAD_MAIN';
export const LOAD_MAIN_SUCCESS = 'free_court/main/LOAD_MAIN_SUCCESS';
export const LOAD_MAIN_FAILURE = 'free_court/main/LOAD_MAIN_FAILURE';
export const TOGGLE_MODAL = 'free_court/main/TOGGLE_MODAL';
export const PHONE_EDIT = 'free_court/main/PHONE_EDIT';
export const REQUEST_UPDATE = 'free_court/main/REQUEST_UPDATE';
export const REQUEST_UPDATE_SUCCESS = 'free_court/main/REQUEST_UPDATE_SUCCESS';
export const REQUEST_UPDATE_FAILURE = 'free_court/main/REQUEST_UPDATE_FAILURE';

const INITIAL_STATE = {
    availability: {},
    error_message: "",
    title: "Courts n' Shorts",
    gyms: [{
    }],
    is_modal_open: false,
    phone_number: "",
    current_gym: "",
    loading: false,
};

//Reducers
export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type){
        case LOAD_MAIN:
            return {
                ...state,
                error_message: "",
            }
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
        case TOGGLE_MODAL:
            return {
                ...state,
                is_modal_open: !state.is_modal_open,
                current_gym: action.payload
            }
        case PHONE_EDIT:
            return {
                ...state,
                phone_number: action.payload
            }
        case REQUEST_UPDATE:
            return {
                ...state,
                error_message: "",
            }
        case REQUEST_UPDATE_SUCCESS:
            return {
                ...state,
                error_message: "Successfully requested an update! It takes less than a minute, so refresh soon!"
            }
        case REQUEST_UPDATE_FAILURE:
            return {
                ...state,
                error_message: action.payload
            }
        case SUBSCRIBE:
            return {
                ...state,
                error_message: "",
            }
        case SUBSCRIBE_SUCCESS:
            return {
                ...state,
                is_modal_open: false,
                phone_number: "",
                error_message: "Successfully Subscribed!"
            }
        case SUBSCRIBE_FAILURE:
            return {
                ...state,
                error_message: action.payload,
                is_modal_open: false,
                phone_number: "",
            }
        default:
            return {
                ...state
            }
    }
}

// Thunk
export function thunk_subscribe () {
    return (dispatch, getState) => {
        var main = getState()['main']
        dispatch({type: SUBSCRIBE});

        const url = APIConfig.apiroot + '/v1/subscribe';
        return axios.post(url, {
            gym_name: main['current_gym'],
            phone_number: main['phone_number']
        })
        .then((response) => {
            dispatch({
                type: SUBSCRIBE_SUCCESS,
                payload: response.data.response 
            })
        })
        .catch((error) => {
            dispatch({
                type: SUBSCRIBE_FAILURE,
                payload: "You are already subscribed to " + main['current_gym']
            })
        })
    }
}

export function thunk_request_update (name) {
    return (dispatch, getState) => {
        dispatch({type: REQUEST_UPDATE});
        const url = APIConfig.apiroot + '/v1/update/' + name;
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

export const toggle_modal = (gym) => {
    return (dispatch) => {
        dispatch({
            type: TOGGLE_MODAL,
            payload: gym
        })
    }
}

export const phone_edit = (value) => {
      return (dispatch) => {
        dispatch({
            type: PHONE_EDIT, 
            payload: value
        })
    }
}
