import React, { useEffect } from 'react';
import { fetchUsers, deleteUser } from '../../Redux';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import SearchFilter from '../../components/searchFilter/SearchFilter';
import GetUserGlobalCss from '../getUser/GetUserGlobalCss';
import { Table, TableRow, TableHead, TableCell, TableBody, TablePagination, Paper, TableContainer, Button, withStyles } from '@material-ui/core';

export const GetUserComponent = (props) => {

    const users = useSelector(state => state.UserReducer.users);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, users.length - page * rowsPerPage);
    const dispatch = useDispatch()

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value));
    };

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
            <Paper>
                <GetUserGlobalCss />
                <TableContainer>
                    <Table>
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
                            {users && users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user, userIndex) => (
                                <TableRow key={user._id}>
                                    <TableCell>{user.firstName.toUpperCase()}</TableCell>
                                    <TableCell>{user.lastName.toUpperCase()}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell><Button className="btnUpdate" onClick={() => Update(user)} variant="contained" color='primary'>Update</Button></TableCell>
                                    <TableCell><Button onClick={() => deleteUserRecord(user._id, userIndex)} className="btnDelete" variant='contained' color="secondary" >Delete</Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 15, { value: users.length, label: 'All' }]}
                    component="div"
                    count={users.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>

            <SearchFilter {...props} />
        </div >

    );
}

export default GetUserComponent