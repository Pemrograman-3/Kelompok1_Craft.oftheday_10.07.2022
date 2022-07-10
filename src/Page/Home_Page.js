import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class HomePage extends Component {
    render() {
        return ( <
            div >
            <
            center >
            <
            h1 > Welcome To Craft.oftheday < /h1>{" "} <
            p >
            Belum Punya Akun ? { " " } <
            Button variant = "link"
            href = "register" > { " " }
            Daftar { " " } <
            /Button>{" "} <
            /p>{" "} <
            /center>{" "} <
            /div>
        );
    }
}