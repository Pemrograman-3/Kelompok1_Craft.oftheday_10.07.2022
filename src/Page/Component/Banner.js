import React, { Component } from "react";
import AliceCarousel from "react-alice-carousel";
import gambar1 from "../../Assets/img/1.jpeg";
import gambar2 from "../../Assets/img/2.jpeg";
import gambar3 from "../../Assets/img/3.jpeg";
import gambar4 from "../../Assets/img/4.jpeg";
import gambar5 from "../../Assets/img/5.jpeg";
import gambar6 from "../../Assets/img/6.jpeg";
import "../../Css/Banner.css";
import "react-alice-carousel/lib/alice-carousel.css";

export default class Banner extends Component {
    render() {
        return ( <
            div className = "banner" >
            <
            AliceCarousel autoPlayInterval = "10000" >

            <
            center > { " " } <
            img src = { gambar1 }
            alt = ""
            className = "banner" / > { " " } <
            /center>{" "} <
            center > { " " } <
            img src = { gambar2 }
            alt = ""
            className = "banner" / > { " " } <
            /center>{" "} <
            center > { " " } <
            img src = { gambar3 }
            alt = ""
            className = "banner" / > { " " } <
            /center>{" "} <
            center > { " " } <
            img src = { gambar4 }
            alt = ""
            className = "banner" / > { " " } <
            /center>{" "} <
            center > { " " } <
            img src = { gambar5 }
            alt = ""
            className = "banner" / > { " " } <
            /center>{" "} <
            center > { " " } <
            img src = { gambar6 }
            alt = ""
            className = "banner" / > { " " } <
            /center> <
            /AliceCarousel>{" "} <
            /div>
        );
    }
}