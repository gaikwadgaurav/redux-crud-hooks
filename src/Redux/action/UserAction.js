import {
    USER_FETCH_LOADING,
    USER_FETCH_SUCCESS,
    USER_FETCH_ERROR,
    USER_POST_FETCH_LOADING,
    USER_POST_FETCH_SUCCESS,
    USER_POST_FETCH_ERROR
} from '../types/EventTypes';
import axios from 'axios';
import { log } from 'util';


///************GET*************//
export const userLoading = () => {
    return {
        type: USER_FETCH_LOADING,
    }
}

export const userSuccess = users => {
    return {
        type: USER_FETCH_SUCCESS,
        payload: users
    }
}

export const userError = error => {
    return {
        type: USER_FETCH_ERROR,
        payload: error
    }
}


///************POST*************//
export const postUserLoading = () => {
    return {
        type: USER_POST_FETCH_LOADING,
    }
}
export const postUserSuccess = (users) => {
    return {
        type: USER_POST_FETCH_SUCCESS,
        payload: users
    }
}
export const postUserError = (error) => {
    return {
        type: USER_POST_FETCH_ERROR,
        payload: error
    }
}
///************POST*************//



//GET API ACTION CREATOR
export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(userLoading)
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                console.log(response)
                const users = response.data
                dispatch(userSuccess(users))
            }).catch(error => {
                const errorMsg = error.message
                dispatch(userError(errorMsg))
            })
    }
}

//POST API ACTION CREATOR
export const postUsers = () => {
    return (dispatch) => {
        dispatch(postUserLoading)
        axios.post('http://192.168.1.37:5000/api/v1/user')
            .then(response => {
                const postUser = response.data;
                dispatch(postUserSuccess(postUser))
            })
            .catch(error => {
                const postErrmsg = error.message
                dispatch(postUserSuccess(errorMsg))
            })
    }
}



