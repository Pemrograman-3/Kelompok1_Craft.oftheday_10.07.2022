import React, { Component } from "react";
import { EditClientPage, HeaderAdmin, Header, LoginPage } from "../Page";

export default class SettingEditPage extends Component {
    render() {
        const isLogin = localStorage.getItem("isLogin");

        if (isLogin === "true") {
            return ( <
                div >
                <
                HeaderAdmin / >
                <
                EditClientPage / >
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