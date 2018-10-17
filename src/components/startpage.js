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
          <p>My name is Charlotte Flygare, I am 36 years old and live in Gröndal in Stockholm with my husband and daugther.
          Currently I work as a graphic designer at the design- and advertising agency FamiljenPangea. There I do
          everything from branding to designing websites. Besides art, form and fashion my newest interest is to code in Atom,
          especially in React. I love problemsolving but mostly details in making websites</p>
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
