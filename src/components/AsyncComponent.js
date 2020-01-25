import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { userLoading, userSuccess, userError, fetchUsers } from '../Redux';
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'react-bootstrap';

export const AsyncUserListComponent = () => {
    const users = useSelector(state => state.asyncUser.users);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUsers())
    }, []);


    const renderTable = users && users.map(user => {
        console.log("user", user)
        return (
                <tr key={user.id}>
                    <td>{user.name.toUpperCase()}</td>
                    <td>{user.username.toUpperCase()}</td>
                    <td>{user.email}</td>
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
                </tr>
            </thead>
            <tbody>
                {renderTable}
            </tbody>
        </Table>
    );
}

export default AsyncUserListComponent