import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from '../../pages/home/Home';
// import AddUserComponent from '../../pages/addUser/AddUserComponent';
import AsyncUserListComponent from '../../pages/getUser/AsyncComponent';
import Navbar from '../navBar/Navbar';
import SignUpForm from "../forms/SignUpForm";

export default function Routing() {
    return (<Router>
        <Navbar />
        <div>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/user/add" component={SignUpForm}></Route>
            <Route exact path="/user/list" component={AsyncUserListComponent}></Route>
            <Route exact path="/user/:id/edit" component={SignUpForm}></Route>
        </div>
    </Router>
    );
}



