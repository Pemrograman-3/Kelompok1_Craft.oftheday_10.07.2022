import React, { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

export default class Header extends Component {
    render() {
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
            Nav.Link href = "/login" > Login < /Nav.Link>{" "} <
            Nav.Link href = "/register" > Register < /Nav.Link>{" "} <
            Nav.Link href = "/page" > Single Page < /Nav.Link>{" "} <
            /Nav>{" "} <
            /Container>{" "} <
            /Navbar>{" "} <
            /div>
        );
    }
}