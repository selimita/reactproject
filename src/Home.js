import React from "react";
import './style.css';
import arafa from "../src/img/arafa.png";
import babu from "../src/img/babu.jpg";
import { NavLink } from "react-router-dom";
import Common from "./Common";
import arafa1 from "../src/img/1.jpg";

const Home =() => {
  return(
    <>
        <Common 
        title="grow your business with"
        subtitle="selimita"
        description="grow your business with selimita grow your business with selimita" 
        imgsrc={arafa1} 
        btn="get started" 
        link="/about" />
    </>
  );

};
export default Home;