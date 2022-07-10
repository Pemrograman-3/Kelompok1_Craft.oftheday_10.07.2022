import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

export default class SettingSinglePage extends Component {
    render() {
        return ( <
            Card className = "text-center" >
            <
            Card.Header > < /Card.Header>{" "} <
            Card.Body >
            <
            Card.Title > Craft.oftheday < /Card.Title>{" "} <
            p >
            Anisa Rizka Septiana 20411016 { " " } <
            Button variant = "link"
            href = "https://github.com/anisarizkas" > { " " }
            https: //github.com/anisarizkas{" "}
            <
            /Button>{" "} <
            /p>{" "} <
            p >
            Shelly Natalia Phirinds 20411017 { " " } <
            Button variant = "link"
            href = "https://github.com/shellynp" > { " " }
            https: //github.com/shellynp{" "}
            <
            /Button>{" "} <
            /p>{" "} <
            p >
            Source Code { " " } <
            Button variant = "link"
            href = "https://github.com/Pemrograman-3/Kelompok1_Craft.oftheday_10.07.2022" > { " " }
            https: //github.com/Pemrograman-3/Kelompok1_Craft.oftheday_10.07.2022{" "}
            <
            /Button>{" "} <
            /p>{" "} <
            Card.Text >
            Craft.oftheday merupakan UMKM yang bergerak dibidang jasa pembuatan mahar.Oleh karena itu dibutuhkanlah data client. { " " } <
            /Card.Text>{" "} <
            /Card.Body>{" "} <
            Card.Footer className = "text-muted" > < /Card.Footer>{" "} <
            /Card>
        );
    }
}