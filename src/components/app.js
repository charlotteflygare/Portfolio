import React from "react"
import Footer from "./Footer"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import Workexample from "./Workexample"
import Skills from "./Skills"
import Studies from "./Studies"
import "./app.css"
import Startpage from "./startpage"
import Projectpage from "./Projectpage"



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
