import React from "react";
import { NavLink } from "react-router-dom";

const Navbar =() => {
  return(
    <>
    <div className="container-fluid nav_bg">
        <div className="row">
            <div className="col-10 mx-auto">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="/">selimita</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                selimita
                            </NavLink>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><NavLink className="dropdown-item" to="/about">About</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/service">Service</NavLink></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><NavLink className="dropdown-item" to="/contact">Contact</NavLink></li>
                            </ul>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link disabled" to="/" tabindex="-1" aria-disabled="true">selimita</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" to="/temp">Weather</NavLink>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
    </>
  );

};
export default Navbar;
