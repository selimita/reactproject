import React from "react";
import './style.css';
import arafa from "../src/img/arafa.png";
import babu from "../src/img/babu.jpg";
import { NavLink } from "react-router-dom";

const Common =(props) => {
  return(
    <>
        <section id="header" className="d-flex align-items-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                <h1>{props.title} <strong>{props.subtitle}</strong></h1>
                                <h2 className="my-3">{props.description}</h2>
                                <div className="mt-3"><NavLink to={props.link} className="btn-get-started">{props.btn}</NavLink></div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 header-img">
                                <img src={props.imgsrc} className="image-fluid animated" alt="banner image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );

};
export default Common;