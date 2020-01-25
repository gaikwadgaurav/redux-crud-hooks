import { USER_FETCH_LOADING, USER_FETCH_SUCCESS, USER_FETCH_ERROR } from '../types/EventTypes';
import axios from 'axios';
import { log } from 'util';


//Action Creator
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

export const postUserLoading = () => {
    return {

    }
}

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

export const postUsers = () => {

}

