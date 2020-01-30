import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postUsers, updateUser, fetchUser } from '../../Redux/action/UserAction';
import { Form } from 'react-bootstrap';
import { TextField, Button, Paper, Typography } from '@material-ui/core';
import GetUserGlobalCss from '../../pages/getUser/GetUserGlobalCss';


export default function SignUpForm(props) {
    const selectedUser = useSelector(state => state.UserReducer.selectedUser)
    const dispatch = useDispatch();
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });
    const [emailError, setEmailError] = useState({ value: false, message: "" })
    const history = props.history;
    const [userId, setUserId] = useState(null)

    function handleChange(e) {
        if (e.target.name === "email") {
            const emailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value)
            setEmailError({ value: !emailValid, message: emailValid ? "" : "Invalid Email." })
        }
        setData({ ...data, [e.target.name]: e.target.value })
    }

    function saveForm() {
        if (userId) {
            dispatch(updateUser(data, props))
        } else {
            dispatch(postUsers(data, props))
        }
    }

    useEffect(() => {
        const id = props.match.params.id;
        if (id) {
            setUserId(id)
            dispatch(fetchUser(id))
        }
    }, [])

    useEffect(() => {
        if (selectedUser)
            setData(selectedUser)
    }, [selectedUser])

    return (
        <Form>
            <GetUserGlobalCss />
            <Form.Group controlId="formBasicName">
                <TextField fullWidth label='FirstName' type="text" name="firstName" value={data.firstName} onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="formBasicLastName">
                <TextField fullWidth label='LastName' type="text" name="lastName" value={data.lastName} onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <TextField fullWidth label='Email' type="email" name="email" value={data.email} onChange={handleChange} />
                {emailError.value ? <Typography>{emailError.message}</Typography> : ""}
            </Form.Group>

            <Form.Group controlId="formBasicLastPassword">
                <TextField fullWidth label='Password' type="password" name="password" value={data.password} onChange={handleChange} />
            </Form.Group>

            <Button variant="contained" color='primary' type="button" onClick={saveForm}>
                {userId ? "Update" : "Save"}
            </Button>

        </Form >

    )
}