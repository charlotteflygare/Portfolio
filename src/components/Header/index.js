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
                <li><Link to="/work">Work</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>  
            </ul>

      </div>
      </div>
      </div>


    )
  }
}

export default Header
