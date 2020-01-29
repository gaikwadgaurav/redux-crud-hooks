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
    FILTER_USERLIST,
} from '../types/EventTypes';
import { updateUser } from '../action/UserAction';

const initialState = {
    status: '',
    users: [],
    clonedUsers: [],
    selectedUser: null,
    error: '',
    loading: '',
    updatedUserList: []
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
                clonedUsers: action.payload,
                loading: false,
                error: '',
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
            const userClone = state.users.slice();
            userClone.push(action.payload)
            return {
                users: userClone,
                clonedUsers: userClone,
                error: '',
                loading: false,

            }
        }
        case USER_POST_ERROR: {
            return {
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
            const cloneUser = state.users.slice();
            const cloneUserIndex = cloneUser.findIndex((user) => user._id === action.payload._id)
            if (cloneUserIndex > -1) {
                cloneUser[cloneUserIndex] = action.payload
            }
            return {
                ...state,
                users: cloneUser,
                clonedUsers: cloneUser,
                error: '',
                loading: false,

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
                clonedUsers:users,
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
        case FILTER_USERLIST: {
            const searchValue = action.payload;
            let clonedUser = state.clonedUsers;
            if (searchValue) {
                clonedUser = clonedUser.filter(user => {
                    return (
                        (user &&
                            user.firstName &&
                            user.firstName.toLowerCase().search(searchValue.toLowerCase()) !==
                            -1) ||
                        (user &&
                            user.lastName &&
                            user.lastName.toLowerCase().search(searchValue.toLowerCase()) !==
                            -1) ||
                        (user &&
                            user.email &&
                            user.email.toLowerCase().search(searchValue.toLowerCase()) !==
                            -1)
                    )
                })
            } else {
                clonedUser = clonedUser
            }
            return {
                ...state,
                users: clonedUser
            }
        }
        default:
            return state;
    }
}
export default UserReducer