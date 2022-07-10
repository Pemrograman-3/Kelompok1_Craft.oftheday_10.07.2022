import React, { Component } from "react";
import { ViewClientPage, HeaderAdmin, Header, LoginPage } from "../Page";

export default class SettingClientView extends Component {
    render() {
        const isLogin = localStorage.getItem("isLogin");
        if (isLogin === "true") {
            return ( <
                div >
                <
                HeaderAdmin / >
                <
                ViewClientPage / >
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