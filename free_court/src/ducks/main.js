import axios from 'axios';

import APIConfig from '../config/api';

const mainAPIRoot = `${APIConfig.apiroot}`;

//Action Types
export const LOAD_MAIN = 'free_court/main/LOAD_MAIN';
export const LOAD_MAIN_SUCCESS = 'free_court/main/LOAD_MAIN_SUCCESS';
export const LOAD_MAIN_FAILURE = 'free_court/main/LOAD_MAIN_FAILURE';


const INITIAL_STATE = {
    availability: {},
    error_message: "",
    title: "Courts n' Shorts",
    gyms: [{
        title: "SPAC",
        open: "Full",
        body: "hi"
    }],
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
                gyms: [{
                    title: "SPAC",
                    open: "Full",
                    body: "hi"
                }],
                error_message: action.payload
            }
        default:
            return {
                ...state
            }
    }
}


//Action Creators
export const load_main = () => {
    const url = `${mainAPIRoot}/v1/api/gym`;
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
        payload: response.data,
    });
}

export const load_main_failure = (dispatch, error) => {
    console.log("hi");
    dispatch({
        type: LOAD_MAIN_FAILURE,
        payload: error.data
    });
}
