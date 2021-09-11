import React, { useState } from "react";
import './style.css';

const Contact =() => {
  const [data,setData]=useState({
    fullname: "",
    mobile: "",
    email: "",
    message: "",
  });
  const InputEvent=(event)=>{
    const {name,value} = event.target;
    setData((preVal)=>{
      return{
        ...preVal,
        [name] : value,
      };
    });
  };
  const formSubmit=(e)=>{
    e.preventDefault();
    alert(
      `my name is ${data.fullname}. my mobile number is ${data.mobile}. my email is ${data.email}. my message is "${data.message}"`
    );
  };
  return(
    <>
      <section id="contact" className="d-flex align-items-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <h1 className="text-center">contact <strong>us</strong></h1>
                        <div className="row">
                            <div className="col-md-6 col-10 mx-auto mt-40">
                                <form onSubmit={formSubmit}>
                                  <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">your name</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" name="fullname" value={data.name} onChange={InputEvent} placeholder="enter your name"/>
                                  </div>
                                  <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">mobile number</label>
                                    <input type="number" className="form-control" id="exampleFormControlInput1" name="mobile" value={data.mobile} onChange={InputEvent} placeholder="enter mobile number"/>
                                  </div>
                                  <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="info@selimita.com"/>
                                  </div>
                                  <div className="mb-3">
                                    <label for="exampleFormControlTextarea1" className="form-label">your message</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="message" value={data.message} onChange={InputEvent} placeholder="enter your message"></textarea>
                                  </div>
                                  <div className="col-10">
                                    <button className="btn-submit">
                                      sent message
                                    </button>
                                  </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );

};
export default Contact;