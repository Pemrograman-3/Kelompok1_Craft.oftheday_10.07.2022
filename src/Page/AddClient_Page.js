import React, { Component } from "react";
import {
    FormControl,
    FormLabel,
    Button,
    Col,
    Row,
    Form,
} from "react-bootstrap";
import "../Css/Login.css";
import logo from "../Assets/img/add.png";
import SweetAlert from "../Utils/SweetAlert";
import services from "../Services/services";
import { Navigate } from "react-router-dom";

export default class AddClientPage extends Component {
    constructor() {
        super();
        this.state = {
            nama: "",
            email: "",
            nomorpesanan: "",
            telp: "",
            jeniskelamin: "",
            pekerjaan: "",
            redirectTo: false,
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.validasi = this.validasi.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.addclient = this.addclient.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }
    validasi() {
        //console.log("uji coba tombol");
        var nama = this.state.nama;
        var email = this.state.email;
        var nomorpesanan = this.state.nomorpesanan;
        var telp = this.state.telp;
        var jeniskelamin = this.state.jeniskelamin;
        var pekerjaan = this.state.pekerjaan;
        var data = {
            nama: nama,
            email: email,
            nomorpesanan: nomorpesanan,
            telp: telp,
            jeniskelamin: jeniskelamin,
            pekerjaan: pekerjaan,
        };
        if (nama === "") {
            SweetAlert.Error("Kolom Nama Tidak Boleh Kosong");
        } else if (email === "") {
            SweetAlert.Error("Kolom Nama Tidak Boleh Kosong");
        } else if (nomorpesanan === "") {
            SweetAlert.Error("Kolom Nomor Pesanan Tidak Boleh Kosong");
        } else if (telp === "") {
            SweetAlert.Error("Kolom Nomor Telpon Tidak Boleh Kosong");
        } else if (jeniskelamin === "") {
            SweetAlert.Error("Kolom Jenis Kelamin Tidak Boleh Kosong");
        } else if (pekerjaan === "") {
            SweetAlert.Error("Kolom Pekerjaan Tidak Boleh Kosong");
        } else {
            this.addclient(data);
        }
    }
    addclient(data) {
        //console.log(data);
        services
            .AddStudent(data)
            .then((res) => {
                if (res.data.status) {
                    SweetAlert.Succes(res.data.message);
                    this.setState({ redirectTo: true });
                } else {
                    SweetAlert.Error(res.data.message);
                }
            })
            .catch((e) => {
                console.log(e);
            });
    }

    render() {
        var nama = this.state.nama;
        var email = this.state.email;
        var nomorpesanan = this.state.nomorpesanan;
        var telp = this.state.telp;
        var jeniskelamin = this.state.jeniskelamin;
        var pekerjaan = this.state.pekerjaan;
        if (this.state.redirectTo) {
            return <Navigate to = { "/view" }
            />;
        }
        return ( <
            div className = "Login" >
            <
            Row >
            <
            Col className = "left-side" >
            <
            h2 > Tambah Data Client < /h2> <FormLabel> Nama </FormLabel > { " " } <
            FormControl type = "text"
            className = "input"
            placeholder = "Masukan Nama Lengkap"
            name = "nama"
            value = { nama }
            onChange = { this.handleInputChange }
            />{" "} <
            FormLabel > Email < /FormLabel>{" "} <
            FormControl type = "text"
            className = "input"
            placeholder = "Masukan Email"
            name = "email"
            value = { email }
            onChange = { this.handleInputChange }
            />{" "} <
            FormLabel > Nomor Pesanan < /FormLabel>{" "} <
            FormControl type = "number"
            className = "input"
            placeholder = "Masukan Nomor Pesanan"
            name = "nomorpesanan"
            value = { nomorpesanan }
            onChange = { this.handleInputChange }
            />{" "} <
            FormLabel > Nomor Telpon < /FormLabel>{" "} <
            FormControl type = "number"
            className = "input"
            placeholder = "Masukan Nomor Telpon"
            name = "telp"
            value = { telp }
            onChange = { this.handleInputChange }
            />{" "} <
            FormLabel > Jenis Kelamin < /FormLabel>{" "} <
            Form.Select arialabel = "Jenis Kelamin"
            className = "input"
            name = "jeniskelamin"
            value = { jeniskelamin }
            onChange = { this.handleInputChange } >
            <
            option value = "" > Jenis Kelamin < /option>{" "} <
            option value = "laki-laki" > Laki - Laki < /option>{" "} <
            option value = "perempuan" > Perempuan < /option>{" "} < /
            Form.Select > { " " } <
            FormLabel > Pekerjaan < /FormLabel>{" "} <
            FormControl type = "text"
            className = "input"
            placeholder = "Masukan Pekerjaan"
            name = "pekerjaan"
            value = { pekerjaan }
            onChange = { this.handleInputChange }
            />{" "} <
            Button variant = "outline-warning"
            className = "button"
            onClick = {
                (e) => this.validasi()
            } >
            Add Data { " " } <
            /Button>{" "} < /
            Col > { " " } <
            Col className = "right-side" >
            <
            div >
            <
            center >
            <
            img className = "add-img"
            src = { logo }
            />{" "} < /
            center > { " " } <
            /div>{" "} < /
            Col > { " " } <
            /Row>{" "} < /
            div >
        );
    }
}