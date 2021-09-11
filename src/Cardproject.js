import React from "react";
import './style.css';
import { NavLink } from "react-router-dom";
import Projectdata from "./Projectdata";

const Cardproject =({projectData}) => {
  return(
    <>
        {projectData.map((curElem)=>{
          /* curElem.id | curElem.category | curElem.imgsrc | curElem.title OR const {id, category, imgsrc, title} = curElem;*/
          const {id, category, imgsrc, title} = curElem;
            return(
                <>
                <div className="col-md-4 gy-4 single-service" key={id}>
                    <img src={imgsrc} className="image-fluid" alt={imgsrc} />
                    <h4>{title}</h4>
                    <p>{id} | {category} start web design course with selimita start web design course with selimitastart web design course with selimita</p>
                    <NavLink to="/single-service" className="btn-read-more">read more</NavLink>
                </div>
                </>
            );
        })}
    </>
  );

};
export default Cardproject;