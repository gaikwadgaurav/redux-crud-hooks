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
    DELETE_USER_PROFILE_LOADING,
    DELETE_USER_PROFILE_SUCCESS,
    DELETE_USER_PROFILE_ERROR,
    FETCH_SINGLE_USER_LOADING,
    FETCH_SINGLE_USER_SUCCESS,
    FETCH_SINGLE_USER_ERROR,
    FILTER_USERLIST,
    SIGN_IN_BEGIN,
    SIGN_IN_SUCCESS,
    SIGN_IN_ERROR,
    SIGN_OUT_BEGIN,
    SIGN_OUT_SUCCESS,
    SIGN_OUT_ERROR
} from '../types/EventTypes';
import axios from 'axios';

///**************SIGN-IN**************///
export const signInBegin = () => {
    return {
        type: SIGN_IN_BEGIN,
    }
}

export const signInSuccess = user => {
    return {
        type: SIGN_IN_SUCCESS,
        payload: user
    }
}

export const signInError = error => {
    return {
        type: SIGN_IN_ERROR,
        payload: error
    }
}

///**************SIGN-OUT**************///
export const signOutBegin = () => {
    return {
        type: SIGN_OUT_BEGIN,
    }
}

export const signOutSuccess = user => {
    return {
        type: SIGN_OUT_SUCCESS,
        payload: user
    }
}

export const signOutError = error => {
    return {
        type: SIGN_OUT_ERROR,
        payload: error
    }
}


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
        type: USER_POST_LOADING,
    }
}
export const postUserSuccess = (users) => {
    return {
        type: USER_POST_SUCCESS,
        payload: users
    }
}
export const postUserError = (error) => {
    return {
        type: USER_POST_ERROR,
        payload: error
    }
}

///************PUT*************//
export const userUpdateLoading = () => {
    return {
        type: UPDATE_USER_PROFILE_LOADING,
    }
}
export const userUpdateSuccess = (updateUser) => {
    return {
        type: UPDATE_USER_PROFILE_SUCCESS,
        payload: updateUser
    }
}
export const userUpdateError = (error) => {
    return {
        type: UPDATE_USER_PROFILE_ERROR,
        payload: error
    }
}

///************DELETE*************//
export const deleteUserLoading = () => {
    return {
        type: DELETE_USER_PROFILE_LOADING,
    }
}
export const deleteUserSuccess = (userIndex) => {
    return {
        type: DELETE_USER_PROFILE_SUCCESS,
        payload: userIndex
    }
}
export const deleteUserError = (error) => {
    return {
        type: DELETE_USER_PROFILE_ERROR,
        payload: error
    }
}

///************GET SINGLE USER*************//
export const singleUserLoading = () => {
    return {
        type: FETCH_SINGLE_USER_LOADING,
    }
}
export const singleUserSuccess = (user) => {
    return {
        type: FETCH_SINGLE_USER_SUCCESS,
        payload: user
    }
}
export const singleUserError = (error) => {
    return {
        type: FETCH_SINGLE_USER_ERROR,
        payload: error
    }
}


///////////////FILTER USER////////////
export const filterUserList = value => {
    return {
        type: FILTER_USERLIST,
        payload: value
    }
}


//SIGN - IN API ACTION CREATOR
const options = {
    headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
    }
};
export const signIn = (data, props) => {

    return (dispatch) => {
        dispatch(signInBegin)
        axios.post('http://192.168.1.45:3000/front/v1/user/login',
            data,
            options)
            .then(response => {
                if (response.data.token) {
                    localStorage.setItem('token', response.data.token)
                    dispatch(signInSuccess(response.data))
                    props.history.push('/user/list')
                }
            })
            .catch(error => {
                const postErrmsg = error.message
                dispatch(signInError(postErrmsg))
            })
    }
}

//GET API ACTION CREATOR
export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(userLoading)
        axios.get('http://192.168.1.45:5000/api/v1/user/list')
            .then(response => {
                const users = response.data
                dispatch(userSuccess(users))
            }).catch(error => {
                const errorMsg = error.message
                dispatch(userError(errorMsg))
            })
    }
}

//GET API FOR SINGLE USER
export const fetchUser = (id) => {
    return (dispatch) => {
        dispatch(singleUserLoading)
        axios.get('http://192.168.1.45:5000/api/v1/user/' + id)
            .then(response => {
                const user = response
                dispatch(singleUserSuccess(user))
            }).catch(error => {
                const errorMsg = error.message
                dispatch(userError(errorMsg))
            })
    }
}

//POST API ACTION CREATOR
export const postUsers = (data, props) => {
    return (dispatch) => {
        dispatch(postUserLoading)
        axios.post('http://192.168.1.45:5000/api/v1/user', data)
            .then(response => {
                if (response.status === 200) {
                    const users = response.data;
                    dispatch(postUserSuccess(users))
                    props.history.push('/user/list/')
                }
            })

            .catch(error => {
                const postErrmsg = error.message
                dispatch(postUserError(postErrmsg))
            })
    }
}

//DELETE API ACTION CREATOR
export const deleteUser = (userId, userIndex) => {
    return (dispatch) => {
        dispatch(deleteUserLoading)
        axios.delete('http://192.168.1.45:5000/api/v1/user/' + userId)
            .then(response => {
                if (response.status === 200) {
                    dispatch(deleteUserSuccess(userIndex))
                }
            })
            .catch(error => {
                const postErrmsg = error.message
                dispatch(deleteUserError(postErrmsg))
            })
    }
}


//PUT API ACTION CREATOR
export const updateUser = (data, props) => {
    console.log(data)
    return (dispatch) => {
        dispatch(userUpdateLoading)
        axios.put('http://192.168.1.45:5000/api/v1/user/' + data._id, data)
            .then(response => {
                if (response.status === 200) {
                    const updateUser = response.data;
                    dispatch(userUpdateSuccess(updateUser));
                    props.history.push('/user/list');
                }
            })
            .catch(error => {
                const postErrmsg = error.message
                dispatch(userUpdateError(postErrmsg));
            })
    }
}







