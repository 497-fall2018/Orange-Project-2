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
    is_modal_open: false,
    phone_number: "",
    current_gym: "",
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
        case TOGGLE_MODAL:
            return {
                ...state,
                is_modal_open: !state.is_modal_open
            }
        case PHONE_EDIT:
            return {
                ...state,
                phone_number: action.payload
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
        dispatch({type: SUBSCRIBE});
        var main = getState()['main']

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
                payload: error.data.response.error_message
            })
        })
    }
}

//Action Creators
export const load_main = () => {
    const url = `${mainAPIRoot}/v1/gyms`;
    return (dispatch) => {
        dispatch({
            type: LOAD_MAIN
        });
        axios.get(url)
          .then((response) => load_main_success(dispatch, response))
          .catch((error) => load_main_failure(dispatch, error))
    }
}

export const load_main_success = (dispatch, response) => {
    dispatch({
        type: LOAD_MAIN_SUCCESS,
        payload: response.data.response,
    });
}

export const load_main_failure = (dispatch, error) => {
    dispatch({
        type: LOAD_MAIN_FAILURE,
        payload: error.data
    });
}

export const toggle_modal = () => {
    return (dispatch) => {
        dispatch({
            type: TOGGLE_MODAL,
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
