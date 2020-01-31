import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from '../../pages/home/Home';
// import AddUserComponent from '../../pages/addUser/AddUserComponent';
import GetUserComponent from '../../pages/getUser/GetUserComponent';
import Navbar from '../navBar/Navbar';
import SignUpForm from "../forms/SignUpForm";
import Login from '../../pages/login/Login'
import { PrivateRoute } from '../routing/PrivateRouting';
import { PublicRoute } from '../routing/PublicRouting';
export default function Routing() {
    return (<Router>
        <Navbar />
        <div>

            <Route path="/user/add" component={SignUpForm}></Route>
            <Route path="/user/list" component={GetUserComponent}></Route>
            <Route path="/user/edit/:id" component={SignUpForm}></Route>
            <PrivateRoute exact path="/login" component={Login}></PrivateRoute>
            <PublicRoute exact path="/home" component={Home}></PublicRoute>
        </div>
    </Router>
    );
}



