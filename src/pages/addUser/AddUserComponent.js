// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Form } from 'react-bootstrap';
// import { postUsers } from '../../Redux/action/UserAction';
// import SignUpForm from '../../components/forms/SignUpForm';
// export function AddUserComponent() {
//     let name = '';
//     const dispatch = useDispatch();
//     const [data, setData] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         password: ''
//     });

//     function handleChange(e) {
//         setData({ ...data, [e.target.name]: e.target.value })
//     }

//     function saveForm() {
//         dispatch(postUsers(data))
//     }

//     return (
//         <div>
//             {/* <SignUpForm name='add' data={data} handleChange={handleChange} submit={saveForm}></SignUpForm> */}
//             <SignUpForm {...{ data, name: 'Add', handleChange, saveForm }} />
//         </div >
//     );
// }

// export default AddUserComponent