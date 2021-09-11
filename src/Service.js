import React from "react";
import './style.css';
import Card from "./Card";
import Servicedata from "./Servicedata";

const Service =() => {
  return(
    <>
      <section id="service" className="d-flex align-items-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-12 mx-auto">
                                <h1>our <strong>services</strong></h1>
                            </div>
                            {
                                Servicedata.map((value,index)=>{
                                    return <Card key={index}
                                        imgsrc={value.imgsrc}
                                        title={value.title}
                                     />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );

};
export default Service;