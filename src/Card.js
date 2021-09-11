import React from "react";
import './style.css';
import { NavLink } from "react-router-dom";

const Card =(props) => {
  return(
    <>
        <div className="col-md-4 gy-4 single-service">
            <img src={props.imgsrc} className="image-fluid" alt={props.imgsrc} />
            <h4>{props.title}</h4>
            <p>start web design course with selimita start web design course with selimitastart web design course with selimita</p>
            <NavLink to="/single-service" className="btn-read-more">read more</NavLink>
        </div>
    </>
  );

};
export default Card;