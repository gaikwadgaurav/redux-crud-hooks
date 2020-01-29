import React, { useEffect } from 'react';
import { fetchUsers, deleteUser } from '../../Redux';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import SearchFilter from '../../components/searchFilter/SearchFilter';
import Tables from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Pagination from '../../components/Pagination/Pagination';
export const GetUserComponent = (props) => {

    const users = useSelector(state => state.UserReducer.users);

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUsers())
    }, []);

    const history = useHistory()

    function deleteUserRecord(userId, userIndex) {
        dispatch(deleteUser(userId, userIndex))
    }

    function Update(user) {
        history.push(`/user/edit/${user._id}`)
    }

    return (
        <div>
            <Tables>
                <TableHead>
                    <TableRow>
                        <TableCell>First Name</TableCell>
                        <TableCell>User Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Update</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users && users.map((user, userIndex) => (
                        <TableRow key={user._id}>
                            <TableCell>{user.firstName.toUpperCase()}</TableCell>
                            <TableCell>{user.lastName.toUpperCase()}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell><Button className="btnUpdate" onClick={() => Update(user)} variant="success" /></TableCell>
                            <TableCell><Button onClick={() => deleteUserRecord(user._id, userIndex)} className="btnDelete" variant="danger" /></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Tables>
            <SearchFilter {...props} />
        </div>

    );
}

export default GetUserComponent