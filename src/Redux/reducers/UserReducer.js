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
    FETCH_SINGLE_USER_ERROR,
    DELETE_USER_PROFILE_LOADING,
    DELETE_USER_PROFILE_SUCCESS,
    DELETE_USER_PROFILE_ERROR,
    CLEAR_STATE_MESSAGE
} from '../types/EventTypes';

const initialState = {
    status: '',
    users: [],
    selectedUser: null,
    error: '',
    // createdAt: '',
    // updatedAt: '',
    loading: ''
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_FETCH_LOADING:
            return {
                ...state,
                loading: true,
            }
        case USER_FETCH_SUCCESS:
            return {
                users: action.payload,
                loading: false,
                error: '',
                createdAt: '',
                updatedAt: ''
            }
        case USER_FETCH_ERROR:
            return {
                users: [],
                error: action.payload,
                loading: true,
            }
        case USER_POST_LOADING: {
            return {
                ...state,
                loading: true
            }
        }
        case USER_POST_SUCCESS: {
            const userClone = state.users;
            userClone.push(action.payload)
            return {
                users: userClone,
                error: '',
                loading: false,
                createdAt: '',
                updatedAt: ''
            }
        }
        case USER_POST_ERROR: {
            return {
                createdAt: false,
                updateadAt: false,
                users: [],
                error: action.payload,
                loading: true
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
                users: action.payload,
                error: '',
                loading: false,
                createdAt: '',
                updatedAt: ''
            }
        }
        case UPDATE_USER_PROFILE_ERROR: {
            return {
                users: [],
                error: action.payload,
                loading: true
            }
        }
        case FETCH_SINGLE_USER_LOADING: {
            return {
                ...state,
                loading: true
            }
        }
        case FETCH_SINGLE_USER_SUCCESS: {
            //console.log('action.payload.data', action.payload.data)
            return {
                ...state,
                selectedUser: action.payload.data,
                error: '',
                loading: false,
                createdAt: '',
                updatedAt: ''
            }
        }
        case FETCH_SINGLE_USER_ERROR: {
            return {
                selectedUser: [],
                error: action.payload,
                loading: true
            }
        }
        case DELETE_USER_PROFILE_LOADING: {
            return {
                ...state,
                loading: true
            }
        }
        case DELETE_USER_PROFILE_SUCCESS: {
            const userIndex = action.payload;
            let users = state.users.slice();
            if (userIndex > -1) {
                users.splice(userIndex, 1);
            }
            return {
                ...state,
                users,
                error: '',
                loading: false
            }
        }
        case DELETE_USER_PROFILE_ERROR: {
            return {
                ...state,
                users: [],
                error: action.payload,
                loading: true
            }
        }
        case CLEAR_STATE_MESSAGE: {
            return {
                ...state,
                loading: 'true',
            }
        }
        default:
            return state;
    }
}
export default UserReducer