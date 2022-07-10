import React, { Component } from "react";
import { AddClientPage, HeaderAdmin, Header, LoginPage } from "../Page";

export default class SettingClientAdd extends Component {
    render() {
        const isLogin = localStorage.getItem("isLogin");
        if (isLogin === "true") {
            return ( <
                div >
                <
                HeaderAdmin / >
                <
                AddClientPage / >
                <
                /div>
            );
        } else {
            return ( <
                div >
                <
                Header / >
                <
                LoginPage / >
                <
                /div>
            );
        }
    }
}