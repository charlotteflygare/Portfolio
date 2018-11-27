import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import Footer from "./Footer"
import Workexample from "./Workexample"
import Skills from "./Skills"
import Studies from "./Studies"
import Projectpage from "./Projectpage"
import projectJSon from "../projects.json"
import Grid from "./Grid"
import Header from "./Header"
import "./app.scss"


class Startpage extends React.Component {

  render() {
    return (
      <div className="landing-page">
        <Grid>
          <Header />
            <div className="about">
              <div className="about-text">
                <h1>Front-end developer and graphic designer</h1>
                <p>Currently I am studing a 12-week bootcamp at Technigo to explore the world of code. Otherwise I work as a graphic designer
                at the design- and advertising agency FamiljenPangea. There I do everything from branding to designing websites.
                Besides art, form and fashion my newest interest is to code in Atom, especially in the framework React.

                I love problemsolving and looking in to details is on of my favourite things.</p>
              </div>
            </div>
            <div className="work">
              <h2>Work</h2>
              <p>12 weeks bootcamp of coding | 50+ individual task | HTML, CSS, Flexbox, Javascript, ES6, React, API:s | 3 sprints
                 together with the companies Volumental, Bonnier and Comprend. </p>
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
