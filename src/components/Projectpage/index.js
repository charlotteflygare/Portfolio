import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import "./projectpage.scss"
import projectsJson from "../../projects.json"
import Footer from "../Footer"
import Grid from "../Grid"
import Button from "../Button"
import Header from "../Header"

class Projectpage extends React.Component {

 render() {

   const id = this.props.match.params.id
   const project = projectsJson.projects[id - 1]

   return (
     <div className="projectpage-container">
     <Header />


       <div className="projectpage1">

          <div className="projectpage-text-top">
            <h4>{project.company}</h4>
            <h1>{project.title}</h1>
          </div>

          <div className="projectpage-image">
            <img src={project.image} alt="projectpage image"/>
          </div>

          <Grid>

          <div className="projectpage-text">
             <div className="projectpage-text-left">
              <p></p>
            </div>
             <div className="projectpage-text-right">
              <p>{project.description}</p>
              <p>{project.description2}</p>
            </div>
          </div>

          <div className="projectpage-image">
            <img src={project.image2} alt="projectpage image"/>
          </div>

          <div className="projectpage-image">
            <img src={project.image3} alt="projectpage image"/>
          </div>

       <div className="projectpage-tech-section">
        <h2>Skills</h2>
          <div className="projectpage-tech-list">
            <div className="projectpage-tech-list-code">
              <h4>Code</h4>
              <ul><li>{project.codespecs}</li></ul>
            </div>
            <div className="projectpage-tech-list-toolbox">
             <h4>Toolbox</h4>
             <ul><li>{project.toolboxspecs}</li></ul>
            </div>
            <div className="projectpage-tech-list-more">
              <h4>More</h4>
              <ul><li>{project.morespecs}</li></ul>
            </div>
            </div>
     </div>
     <div className="button-to-github">
       <a href= {project.link} target="_blank">
         <Button>View code/page</Button>
       </a>
        </div>

     </Grid>


   </div>
   <Footer />

    </div>


   )
 }

}

export default Projectpage
