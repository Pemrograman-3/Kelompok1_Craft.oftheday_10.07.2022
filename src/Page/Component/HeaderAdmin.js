import React, { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import SweetAlert from "sweetalert";

export default class HeaderAdmin extends Component {
    constructor() {
        super();
        this.state = {
            redirectToReffer: false,
        };
    }

    Logout() {
        SweetAlert({
            title: "Apakah Anda Yakin?",
            text: "Ingin Logout",
            icon: "warning",
            dangerMode: true,
        }).then((yes) => {
            if (yes) {
                localStorage.clear();
                this.setState({ redirectToReffer: true });
                window.location.reload(true);
            }
        });
    }
    render() {
        if (this.state.redirectToReffer) {
            return <Navigate to = { "/" }
            />;
        }
        return ( <
            div >
            <
            Navbar bg = "light"
            variant = "light" >
            <
            Container >
            <
            Navbar.Brand href = "/" > Beranda < /Navbar.Brand>{" "} <
            Nav className = "me-auto" >
            <
            Nav.Link href = "/add" > Add Client < /Nav.Link>{" "} <
            Nav.Link href = "/view" > Data Client < /Nav.Link>{" "} <
            Nav.Link onClick = {
                (e) => this.Logout() } > Logout < /Nav.Link>{" "} <
            /Nav>{" "} <
            /Container>{" "} <
            /Navbar>{" "} <
            /div>
        );
    }
}