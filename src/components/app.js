import React from "react"
import Footer from "./footer"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import Workexample from "./workexample/workexample.js"
import Skills from "./skills.js"
import Studies from "./studies.js"
import "./app.css"
import Startpage from "./startpage"
import Projectpage from "./projectpage/projectpage"



class App extends React.Component {

  render() {
    return (
    <Router>
      <div className="navigation">
        <Route path="/" exact="true" component={Startpage}/>
        <Route path="/projectpage/:id" exact="true" component={Projectpage}/>
      </div>
    </Router>

    )
  }

}

export default App
