import React from "react"
import Footer from "./Footer"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import Workexample from "./Workexample"
import Skills from "./Skills"
import Studies from "./Studies"
import "./app.scss"
import Startpage from "./startpage"
import Projectpage from "./Projectpage"
import About from "./About"
import Workpage from "./Workpage"
import Contact from "./Contact"




class App extends React.Component {

  render() {
    return (
    <Router onUpdate={() => window.scrollTo(0, 0)}>

      <div>
        <Route path="/" exact="true" component={Startpage}/>
        <Route path="/projectpage/:id" exact="true" component={Projectpage}/>
        <Route path="/about" exact="true" component={About}/>
        <Route path="/work" exact="true" component={Workpage}/>
        <Route path="/contact" exact="true" component={Contact}/>
      </div>

    </Router>

    )
  }

}

export default App
