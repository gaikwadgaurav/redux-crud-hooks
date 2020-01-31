import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { TextField, Button } from '@material-ui/core';
import { signIn } from '../../Redux/action/UserAction';
export default function Login(props) {
    const [data, setData] = useState({
        email: '',
        password: ''
    });
    // const signInUser = useSelector(state => state.UserReducer)
    // console.log(signInUser)
    const dispatch = useDispatch();

    function handleChange(e) {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    function saveForm(e) {
        e.preventDefault()
        dispatch(signIn(data, props))
    }

    return (
        <Form>
            <Form.Group controlId="loginEmail">
                <TextField normal={"true"} label='Email' type="email" name="email" value={data.email} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="loginPassword">
                <TextField normal={'true'} label='Password' type="password" name="password" value={data.password} onChange={handleChange} />
            </Form.Group>
            <Button variant="contained" color='primary' type="submit" onClick={saveForm}>
                Login
            </Button>
        </Form>

    )
}
