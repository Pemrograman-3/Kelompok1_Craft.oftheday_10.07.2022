import React from "react";
import { Routes, Route } from "react-router-dom";
import {
    SettingHomePage,
    SettingLoginPage,
    SettingRegisterPage,
    SettingClientView,
    SettingClientAdd,
    SettingEditPage,
    SettingSinglePage,
} from "../Setting";

export default function ClassRouter() {
    return ( <
        Routes >
        <
        Route path = "/"
        element = { < SettingHomePage / > }
        />{" "} <
        Route path = "/login"
        element = { < SettingLoginPage / > }
        />{" "} <
        Route path = "/register"
        element = { < SettingRegisterPage / > }
        />{" "} <
        Route path = "/add"
        element = { < SettingClientAdd / > }
        />{" "} <
        Route path = "/view"
        element = { < SettingClientView / > }
        />{" "} <
        Route path = "/edit"
        element = { < SettingEditPage / > }
        />{" "} <
        Route path = "/page"
        element = { < SettingSinglePage / > }
        />{" "} <
        /Routes>
    );
}