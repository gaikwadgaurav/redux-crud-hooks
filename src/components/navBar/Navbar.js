import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <Nav variant="pills" defaultActiveKey="/list">
            <Nav.Item>
                <Link componentclass={Link} href="/login" to="/login" eventkey="1">Login</Link>
            </Nav.Item>
            <Nav.Item>
                <Link componentclass={Link} href="/home" to="/home" eventkey="2">Home</Link>
            </Nav.Item>
            <Nav.Item>
                <Link componentclass={Link} href="/user/add" to="/user/add" eventkey="3">Add</Link>
            </Nav.Item>
            <Nav.Item>
                <Link componentclass={Link} href="/user/list" to="/user/list" eventkey="4">List</Link>
            </Nav.Item>

        </Nav>
    );
}

