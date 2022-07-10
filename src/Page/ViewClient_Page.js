import React, { Component } from "react";
import { Container, Table, Button } from "react-bootstrap";
import services from "../Services/services";
import SweetAlert from "../Utils/SweetAlert";

export default class ViewClientPage extends Component {
    constructor() {
        super();
        this.state = {
            students: [],
        };
        this.hapus = this.hapus.bind(this);
        this.edit = this.edit.bind(this);
    }

    componentDidMount() {
        services
            .GetStudent()
            .then((res) => {
                const students = res.data.data;
                this.setState({ students });
                //console.log(client);
            })
            .catch((e) => {
                console.log(e);
            });
    }
    hapus(data) {
        //console.log(data);
        var id = data._id;
        services
            .DeleteStudent(id)
            .then((res) => {
                if (res.data.status) {
                    SweetAlert.Succes(res.data.message);
                    window.location.reload(false);
                } else {
                    SweetAlert.Error(res.data.message);
                }
            })
            .catch((e) => {
                console.log(e);
            });
    }
    edit(student) {
        //console.log(student);
        localStorage.setItem("student", JSON.stringify(student))
    }
    renderTable() {
        return this.state.students.map((student, index) => {
            const { _id, nama, email, nomorpesanan, telp, jeniskelamin, pekerjaan } =
            student;
            return ( <
                tr key = { _id } > { " " } <
                td > { nama } < /td> <td> {email} </td > < td > { nomorpesanan } < /td>{" "} <
                td > { telp } < /td> <td> {jeniskelamin} </td > < td > { pekerjaan } < /td>{" "} <
                td > { " " } <
                Button variant = "primary"
                href = '/edit'
                onClick = {
                    (e) => this.edit(student) } > { " " }
                Edit Data { " " } <
                /Button>{" "} <
                /td>{" "} <
                td > { " " } <
                Button variant = "secondary"
                onClick = {
                    (e) => this.hapus(student) } > { " " }
                Hapus Data { " " } <
                /Button>{" "} <
                /td>{" "} <
                /tr>
            );
        });
    }

    render() {
        return ( <
            div >
            <
            Container >
            <
            h3 > Data Client < /h3>{" "} <
            Table striped bordered hover size = "sm" >
            <
            thead >
            <
            tr >
            <
            th > Nama < /th> <th> Email </th > < th > Nomor Pesanan < /th>{" "} <
            th > Telpon < /th> <th> Jenis Kelamin </th > < th > Pekerjaan < /th>{" "} <
            th > Edit < /th> <th>Hapus</th >
            <
            /tr>{" "} <
            /thead>{" "} <
            tbody > { this.renderTable() } < /tbody>{" "} <
            /Table>{" "} <
            /Container>{" "} <
            /div>
        );
    }
}