import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import "./header.css"
import Grid from "../Grid"


class Header extends React.Component {
  render() {
    return (
      <div className="header">

        <div className="header-container">
        <div className="header-info">

            <Link to="/"><h4>Charlotte Flygare</h4></Link>

            <ul className="header-list">
              <li>Work</li>
              <li>About</li>
              <li>Contact</li>
            </ul>

      </div>
      </div>
      </div>


    )
  }
}

export default Header
