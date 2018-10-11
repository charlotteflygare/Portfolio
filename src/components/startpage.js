import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import Footer from "./footer"
import Workexample from "./workexample/workexample.js"
import Skills from "./skills.js"
import Studies from "./studies.js"
import "./app.css"
import Projectpage from "./projectpage/projectpage"
import projectJSon from "../projects.json"




class Startpage extends React.Component {

  render() {
    return (
      <div className="LandingPage">
        <div className="About">
          <div className="About-image">
            <img src=""/>
          </div>
          <div className="About-text">
            <h2>Charlotte Flygare</h2>
            <h1>Frontend developer and graphic designer</h1>
            <p>I am an graphic designer with frontend developer skills in HTML, javascript and React.
               I love sneakers, to code and spend time with my family.</p>
          </div>
        </div>
        <div className="Tech">
          <h1>Tech</h1>
          <p>480 coding hours | 50+ individual task | HTML, CSS, Flexbox, Javascript, ES6, React, API:s | 3 sprints
             together with the companies Volumental, Bonnier and Comprens. </p>
        </div>
          <Workexample />
          <Skills />
          <Studies />
          <Footer />


        </div>
    )
  }

}

export default Startpage
