import React, { useState } from "react";
import './style.css';
import Cardproject from "./Cardproject";
import Projectdata from "./Projectdata";
import Navpro from "./Navpro";

const uniqueList = [
    ...new Set(
        Projectdata.map((curElem) =>{
            return curElem.category;
        })
    ),
    "all",
];
const Project =() => {
    const [projectData, setProjectData] = useState(Projectdata);
    const [menuList, setMenuList] = useState(uniqueList);
    const filterItem =(category) => {
        if(category=="all"){
            setProjectData(Projectdata);
            return;
        }
        const updatedList = Projectdata.filter((curElem) =>{
            return curElem.category==category;
        });
        setProjectData(updatedList);
    };
  return(
    <>
      <section id="project" className="d-flex align-items-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-12 mx-auto">
                                <h1>our <strong>project</strong></h1>
                            </div>
                            <Navpro filterItem={filterItem} menuList={menuList} />
                            {/* <Cardproject /> */}
                            <Cardproject projectData={projectData} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );

};
export default Project;