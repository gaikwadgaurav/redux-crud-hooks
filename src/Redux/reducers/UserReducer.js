import {
    USER_FETCH_LOADING,
    USER_FETCH_SUCCESS,
    USER_FETCH_ERROR,
    USER_POST_LOADING,
    USER_POST_SUCCESS,
    USER_POST_ERROR,
    UPDATE_USER_PROFILE_LOADING,
    UPDATE_USER_PROFILE_SUCCESS,
    UPDATE_USER_PROFILE_ERROR,
    FETCH_SINGLE_USER_LOADING,
    FETCH_SINGLE_USER_SUCCESS,
    FETCH_SINGLE_USER_ERROR
    // DELETE_USER_PROFILE_LOADING,
    // DELETE_USER_PROFILE_SUCCESS,
    // DELETE_USER_PROFILE_ERROR
} from '../types/EventTypes';

const initialState = {
    loading: false,
    users: [],
    selectedUser: null,
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
        case USER_POST_LOADING: {
            return {
                ...state,
                loading: true
            }
        }
        case USER_POST_SUCCESS: {
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
        }
        case USER_POST_ERROR: {
            return {
                loading: false,
                users: [],
                error: action.payload
            }
        }
        case UPDATE_USER_PROFILE_LOADING: {
            return {
                ...state,
                loading: true
            }
        }
        case UPDATE_USER_PROFILE_SUCCESS: {
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: ''
            }
        }
        case UPDATE_USER_PROFILE_ERROR: {
            return {
                loading: false,
                users: [],
                error: action.payload
            }
        }
        case FETCH_SINGLE_USER_LOADING: {
            return {
                ...state,
                loading: true
            }
        }
        case FETCH_SINGLE_USER_SUCCESS: {
            console.log('action.payload.data', action.payload.data)
            return {
                ...state,
                loading: false,
                selectedUser: action.payload.data,
                error: ''
            }
        }
        case FETCH_SINGLE_USER_ERROR: {
            return {
                loading: false,
                user: [],
                error: action.payload
            }
        }
        default:
            return state;
    }
}
export default UserReducer