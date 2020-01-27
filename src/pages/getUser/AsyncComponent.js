import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { userLoading, userSuccess, userError, fetchUsers } from '../../Redux';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
export const AsyncUserListComponent = (props) => {
    console.log(props);
    const users = useSelector(state => state.UserReducer.users);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUsers())
    }, []);

    const history = useHistory()

    function Update(user) {
        history.push(`/user/${user._id}/edit`)
    }

    const renderTable = users && users.map(user => {
        return (
            <tr key={user._id}>
                <td>{user.firstName.toUpperCase()}</td>
                <td>{user.lastName.toUpperCase()}</td>
                <td>{user.email}</td>
                <td><Button className="btnUpdate" onClick={() => Update(user)} variant="success" /></td>
                {/* <td><Button onClick={() => remove(users._id)} className="btnDelete" variant="danger" /></td> */}
            </tr>
        );
    });

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {renderTable}
            </tbody>
        </Table>
    );
}

export default AsyncUserListComponent