import React from "react"
import "./studies.css"

class Studies extends React.Component {

  render() {
    return (
  <div className="Studies">
    <h1>Studies</h1>
    <div className="StudiesContainer">
      <div className="StudiesList">
          <h3>Frontend Developer</h3>
          <p>Technigo Bootcamp Sep-Nov 2018</p>

      </div>

      <div className="StudiesList">
          <h3>Graphic Designer</h3>
          <p>Berghs School of Communication</p>

      </div>

      <div className="StudiesList">
        <h3>HTML and CSS</h3>
        <p>3 day intensive course in HTML/CSS. Build your own portfolios.</p>
      </div>

    </div>
    </div>



  )
  }

}

export default Studies
