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
    CLEAR_STATE_MESSAGE
} from '../types/EventTypes';
import axios from 'axios';
// import { history } from 'useHistory';

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
export const clearMsg = () => {
    return {
        type: CLEAR_STATE_MESSAGE,

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
export const postUsers = (data) => {
    return (dispatch) => {
        dispatch(postUserLoading)
        axios.post('http://192.168.1.45:5000/api/v1/user', data)
            .then(response => {
                const users = response.data;
                dispatch(postUserSuccess(users))
            })
            .catch(error => {
                const postErrmsg = error.message
                dispatch(postUserError(postErrmsg))
            })
    }
}

//DELETE API ACTION CREATOR
export const deleteUser = (userId, userIndex) => {
    console.log()
    return (dispatch) => {
        dispatch(deleteUserLoading)
        axios.delete('http://192.168.1.45:5000/api/v1/user/' + userId)
            .then(response => {
                if (response.status === 200) {
                    // let cloneData = data.slice()
                    // const idFilter = cloneData.findIndex(data => data._id === id)
                    // clonedDta.splice(idFilter, 1)
                    // setData(clonedDta)
                    dispatch(deleteUserSuccess(userIndex))
                }
            })
            .catch(error => {
                const postErrmsg = error.message
                dispatch(deleteUserError(postErrmsg))
            })
    }
}

export const clearStateMsg = () => {
    return (dispatch) => {
        dispatch(clearMsg())
    }
}


// //PUT API ACTION CREATOR
// export const updateUser = (data) => {
//     return (dispatch) => {
//         dispatch(userUpdateLoading)
//         axios.put('http://192.168.1.45:5000/api/v1/user' + data._id, data)
//             .then(response => {
//                 if (response.status === 200) {
//                     const updateUser = response.data
//                     dispatch(userUpdateSuccess(updateUser))
//                 }
//             })
//             .catch(error => {
//                 const postErrmsg = error.message
//                 dispatch(userUpdateError(postErrmsg))
//             })
//     }
// }



