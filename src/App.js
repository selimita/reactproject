import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './style.css';
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Navbar from "./Navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import Project from "./Project";
import Footer from "./Footer";
import UseReducer from "./UseReducer";
import Todo from "./todoreact/todo";
import ProgressBar from "./todoreact/ProgressBar";
import Temp from "./weather/Temp";

const App =() => {
  return(
    <>
    <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/temp" component={Temp} />
        <Redirect to="/" />
      </Switch>
    <Project />
    <UseReducer />
    <ProgressBar />
    <Todo />
    <Contact />
    <Footer/>
    </>
  );

};
export default App;
