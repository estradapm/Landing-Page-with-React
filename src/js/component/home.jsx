import React from "react";
import Navbar from "./navbar";
import { Carrusel } from "./carrusel";
import { Cards } from "./cards";
import { Footer } from "./footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
    return (
        <div>
            <Navbar/>
            <Carrusel/>
            <Cards/>
            <Footer/>
        </div>
    );
};

export default Home;