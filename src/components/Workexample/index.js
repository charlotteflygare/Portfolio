import React from "react"
import "./workexample.css"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import projectsJson from "../../projects.json"
import Footer from "../Footer"
import Grid from "../Grid"

class Workexample extends React.Component {

  render() {
    return (
      <div className="Workexample-container">
        <div className="workexample">
        <div className="workexample-image1">
         <Link to="/projectpage/1"><img src="./images/comprend/workexample_comprend.jpg" /></Link>
       </div>
          <div className="workexample-text1">
            <h4>Career page for Comprend</h4>
          </div>

         </div>

         <div className="workexample">
          <div className="workexample-text2">
            <h4>Techspressen</h4>
          </div>
          <div className="workexample-image2">
            <Link to="/projectpage/2"><img src="./images/flightform.jpg" /></Link>
          </div>
           </div>


          <div className="workexample">
          <div className="workexample-text3">
            <h4>Form</h4>
          </div>
          <div className="workexample-image3">
            <Link to="/projectpage/3"><img src="./images/flightform.jpg" /></Link>
           </div>
           </div>


           <div className="workexample">
           <div className="workexample-text4">
             <h4>Clock</h4>
           </div>
           <div className="workexample-image4">
              <Link to="/projectpage/4"><img src="./images/flightform.jpg" /></Link>
            </div>
            </div>


        </div>


    )
  }

}

export default Workexample
