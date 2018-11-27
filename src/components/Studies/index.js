import React from "react"
import "./studies.css"


class Studies extends React.Component {

  render() {
    return (

  <div className="studies">
    <h2>Studies</h2>
    <div className="studies-container">
      <div className="studies-list">
          <h4>Frontend Developement Bootcamp at Technigo</h4>
          <p>Sep — Nov 2018</p>
          <p>Studying fundamental programming concepts, tools and techniques, structuring web projects,
          programming languages like HTML, CSS, JavaScript, React and Node.js.</p>
      </div>

      <div className="studies-list">
          <h4>Build a portfolio in HTML and CSS at Tjejerkodar</h4>
          <p>April 2018 (3 day course)</p>
          <p>Studied basics of web development in HTML5 and CSS3. Got knowledge in how to publish websites online,
          how to customize web pages for different screen sizes and make it responsive and how to use Github.</p>
      </div>

      <div className="studies-list">
          <h4>Graphic Design at Berghs School of Communication</h4>
          <p>2010 — 2012</p>
          <p>Studied typography, package design, branding, brandstrategy, identity work and motion design.
          Often work in the programs: Sketch, InDesign, Illustrator, Photoshop and AfterEffects.</p>
      </div>

      <div className="studies-list">
        <h4>Design courses at Åsö Vuxengymnasium</h4>
        <p>January 2010 — June 2010</p>
        <p>Studied the courses digital image, illustration, graphic Communication and media production. Worked in
        different Adobe programs like Photoshop, Illustrator, InDesign, Dreamweaver and Audacity.</p>
      </div>


      <div className="studies-list">
        <h4>Mediateknik at Linköpings Universitet, (LIU)</h4>
        <p>2003 — 2006</p>
        <p>Master of Science. Studied grade 1-3 in the civil engineer education MediaTeknik.
        Studied programming languages like Javascript and Ada, other technical subjects like regulatory technology,
        vector-graphics, computer science and courses like linear algebra and single variable analysis.</p>
      </div>


    </div>
    </div>




  )
  }

}

export default Studies
