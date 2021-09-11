import React from "react";
import './style.css';
import { NavLink } from "react-router-dom";

const Footer =() => {
  return(
    <>
        <section id="footer" className="text-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <footer>
                            <p>@copy 2021 <strong>selimita.</strong> all rights reserved.</p>
                        </footer>
                    </div>
                </div>
            </div>
        </section>
    </>
  );

};
export default Footer;