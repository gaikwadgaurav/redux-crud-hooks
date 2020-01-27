import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postUsers, updateUser, fetchUser } from '../../Redux/action/UserAction';
import { Form, Button } from 'react-bootstrap';

export default function SignUpForm(props) {
    const selectedUser = useSelector(state => state.UserReducer.selectedUser)
    const dispatch = useDispatch();
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });
    const [userId, setUserId] = useState(null)
    function handleChange(e) {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    function saveForm() {
        dispatch(postUsers(data))
    }
    const history = props.history;

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
            <Form.Group controlId="formBasicName">
                <Form.Label>Name </Form.Label>
                <Form.Control type="text" name="firstName" value={data.firstName} onChange={handleChange} placeholder="Enter name" />
            </Form.Group>

            <Form.Group controlId="formBasicLastName">
                <Form.Label>LastName</Form.Label>
                <Form.Control type="text" name="lastName" value={data.lastName} onChange={handleChange} placeholder="Enter lastName" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" value={data.email} onChange={handleChange} placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicLastPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" value='' onChange={handleChange} placeholder="Enter password" />
            </Form.Group>

            <Button variant="primary" type="button" onClick={saveForm}>
                {userId ? "Update" : "Save"}
            </Button>
        </Form>
    )
}