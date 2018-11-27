import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import Footer from "../Footer"
import Header from "../Header"
import Grid from "../Grid"
import "./contact.scss"

class Contact extends React.Component {

  render() {
    return (
      <div className="landing-page-contact">
      <Grid>
      <Header />

          <div className="contact-container">
              <h2>Please contact me at:</h2>
              <p>Charlotte Flygare</p>
              <p>+46(0)703223906</p>
              <p>charlotte.flygare@gmail.com</p>
              <a href="https://www.linkedin.com/in/charlotte-flygare/?originalSubdomain=se" target="_blank" rel="noopener"><p>LinkedIn</p></a>
              <a href="https://www.facebook.com/charlotte.flygare" target="_blank" rel="noopener"><p>Facebook</p></a>
            </div>
            </Grid>
            <Footer />

        </div>



    )
  }
}

export default Contact
