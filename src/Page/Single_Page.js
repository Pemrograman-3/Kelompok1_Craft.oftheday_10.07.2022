import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

export default class SinglePage extends Component {
    render() {
        return ( <
            Card className = "text-center" >
            <
            Card.Header > Featured < /Card.Header>{" "} <
            Card.Body >
            <
            Card.Title > Special title treatment < /Card.Title>{" "} <
            Card.Text >
            With supporting text below as a natural lead - in to additional content. { " " } <
            /Card.Text>{" "} <
            p >
            Belum Punya Akun ? { " " } <
            Button variant = "link"
            href = "https://github.com/anisarizkas" > Anisa Rizka Septiana < /Button>{" "} <
            /p>{" "} <
            /Card.Body>{" "} <
            Card.Footer className = "text-muted" > 2 days ago < /Card.Footer>{" "} <
            /Card>
        );
    }
}