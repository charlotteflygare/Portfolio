import React from "react"
import "./skills.css"

class Skills extends React.Component {

  render() {
    return (
  <div className="Skills">
    <h1>Skills</h1>
    <div className="SkillsContainer">
      <div className="List">
        <ul>
          <li><h3>Code</h3></li>
          <li><p>HTML 5</p></li>
          <li><p>CS3</p></li>
          <li><p>Javascript ES6</p></li>
          <li><p>React</p></li>
          <li><p>SASS</p></li>
          <li><p>GitHub</p></li>
          <li><p>Node.js</p></li>
        </ul>
      </div>

      <div className="List">
        <ul>
          <li><h3>Toolbox</h3></li>
          <li><p>Atom</p></li>
          <li><p>Postman</p></li>
          <li><p>Adobe Photoshop</p></li>
          <li><p>Adobe InDesign</p></li>
          <li><p>Adobe Illustrator</p></li>
          <li><p>Keynote</p></li>
          <li><p>Slack</p></li>
        </ul>
      </div>

      <div className="List">
        <ul>
          <li><h3>More</h3></li>
          <li><p>Branding</p></li>
          <li><p>Identity work</p></li>
          <li><p>Digital design</p></li>
          <li><p>Service design</p></li>
          <li><p>Sales</p></li>
        </ul>
      </div>

    </div>
    </div>



  )
  }

}

export default Skills
