import {
    USER_FETCH_LOADING,
    USER_FETCH_SUCCESS,
    USER_FETCH_ERROR,
    USER_POST_FETCH_LOADING,
    USER_POST_FETCH_SUCCESS,
    USER_POST_FETCH_ERROR
} from '../types/EventTypes';

const initialState = {
    loading: false,
    users: [],
    error: ''
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_FETCH_LOADING:
            return {
                ...state,
                loading: true
            }
        case USER_FETCH_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
        case USER_FETCH_ERROR:
            return {
                loading: false,
                users: [],
                error: action.payload
            }
        case USER_POST_FETCH_LOADING: {
            return {
                ...state,
                loading: true
            }
        }
        case USER_POST_FETCH_SUCCESS: {
            return {
                loading: false,
                users: [],
                error: action.payload
            }
        }
        case USER_POST_FETCH_ERROR: {
            return {
                loading: false,
                users: [],
                error: action.payload
            }
        }
        default:
            return state;
    }
}
export default UserReducer