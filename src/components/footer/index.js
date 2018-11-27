import React, { Component } from "react"
import "./footer.scss"

class Footer extends React.Component {

  render() {
    return (
      <div className="footer">
        <div className="footer-container">
          <div className="footer-info">
            <div className="footer-header">
              <h4>Contact</h4>
            </div>
              <p>Charlotte Flygare</p>
              <p>+46(0)703223906</p>
              <a><p>charlotte.flygare@gmail.com</p></a>
            </div>
        <div className="footer-social">
          <div className="footer-header-soc">
            <h4>Social media</h4>
          </div>
            <a href="https://www.linkedin.com/in/charlotte-flygare/?originalSubdomain=se" target="_blank" rel="noopener"><p>LinkedIn</p></a>
            <a href="https://www.facebook.com/charlotte.flygare" target="_blank" rel="noopener"><p>Facebook</p></a>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
