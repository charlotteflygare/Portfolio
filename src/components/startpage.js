import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import Footer from "./Footer"
import Workexample from "./Workexample"
import Skills from "./Skills"
import Studies from "./Studies"
import "./app.css"
import Projectpage from "./Projectpage"
import projectJSon from "../projects.json"
import Grid from "./Grid"

class Startpage extends React.Component {

  render() {
    return (
      <div className="LandingPage">
      <Grid>
        <div className="About">
        <div className="About-text">
          <h1>Frontend developer and graphic designer</h1>
          <p>My name is Charlotte Flygare and I am a graphic designer with frontend developer skills in HTML, javascript and React.
             I love sneakers, to code and spend time with my family.</p>
        </div>

          <div className="About-image">
            <img src=""/>
          </div>

        </div>
        <div className="Tech">
          <h2>Tech</h2>
          <p>480 coding hours | 50+ individual task | HTML, CSS, Flexbox, Javascript, ES6, React, API:s | 3 sprints
             together with the companies Volumental, Bonnier and Comprens. </p>
        </div>
          <Workexample />
          <Skills />
          <Studies />
          </Grid>

          <Footer />


        </div>
    )
  }

}

export default Startpage
