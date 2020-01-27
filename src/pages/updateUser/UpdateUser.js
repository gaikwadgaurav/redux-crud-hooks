import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { history } from 'react-router-dom'
import SignUpForm from '../../components/forms/SignUpForm';
export function UpdateUserComponent(props) {
    const dispatch = useDispatch();

    const [data, setData] = useState(props.location.state.user);


    function handleChange(e) {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    function saveForm() {
        dispatch(updateUser(data))
    }

    return (
        <div>
            <SignUpForm {...{ data, name: 'Update', handleChange, saveForm }} />
        </div>
    );
}

export default UpdateUserComponent