import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import Footer from "../Footer"
import Workexample from "../Workexample"
import Skills from "../Skills"
import Studies from "../Studies"
import Experience from "../Experience"
import Grid from "../Grid"
import Header from "../Header"
import "./about.scss"


class About extends React.Component {

  render() {
    return (
      <div className="landing-page-about">
      <Grid>
      <Header />
      <div className="about-image">
        <img src="" alt="about image"/>
      </div>
        <div className="about">
        <div className="about-text">
          <h1>Front-end developer and graphic designer</h1>
          <p>My name is Charlotte Flygare, I am 36 years old and live in Gröndal in Stockholm with my husband and daugther.
          Today I am studying a 3 months bootcamp at Technigo to learn all about front-end development. Coding in React/HTML
          and CSS is my new greatest interest. Otherwise I work as a graphic designer on the FamilenPangea, a design and advertising agency at Södermalm in Stockholm.
          </p>
        </div>



        </div>

          <Studies />
          <Experience />

          </Grid>

          <Footer />


        </div>
    )
  }

}

export default About
