import React from "react";
import './style.css';
import arafa from "../src/img/arafa.png";
import babu from "../src/img/babu.jpg";
import selim from "../src/img/selim.jpg";
import { NavLink } from "react-router-dom";
import Common from "./Common";
import arafa1 from "../src/img/1.jpg";

const About =() => {
  return(
    <>
        <Common 
        title="start your business with"
        subtitle="selimita"
        description="start your business with selimita start your business with selimita" 
        imgsrc={selim} 
        btn="more about" 
        link="/service" />
    </>
  );

};
export default About;