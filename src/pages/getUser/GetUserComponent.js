import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { userLoading, userSuccess, userError, fetchUsers, deleteUser } from '../../Redux';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { clearStateMsg } from '../../Redux/action/UserAction';

export const GetUserComponent = () => {
    //console.log(props);
    const users = useSelector(state => state.UserReducer.users);
    const usersState = useSelector(state => state.UserReducer);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUsers())
    }, []);

    useEffect(() => {
        if (usersState.loading === false) {
            dispatch(clearStateMsg())
        }
    }, [usersState.loading]);


    const history = useHistory()

    function deleteUserRecord(userId, userIndex) {
        dispatch(deleteUser(userId, userIndex))
    }

    function Update(user) {
        history.push(`/user/edit/${user._id}`)
    }


    const renderTable = users && users.map((user, userIndex) => {
        return (
            <tr key={user._id}>
                <td>{user.firstName.toUpperCase()}</td>
                <td>{user.lastName.toUpperCase()}</td>
                <td>{user.email}</td>
                <td><Button className="btnUpdate" onClick={() => Update(user)} variant="success" /></td>
                <td><Button onClick={() => deleteUserRecord(user._id, userIndex)} className="btnDelete" variant="danger" /></td>
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

export default GetUserComponent