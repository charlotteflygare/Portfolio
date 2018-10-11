import React from "react"
import "./workexample.css"
import { HashRouter as Router, Route, Link } from "react-router-dom"


class Workexample extends React.Component {

  render() {
    return (
      <div className="Workexample-container">
        <div className="workexample">
           <h4>Flight form with CSS written with SASS.</h4>
           <Link to="/projectpage/1"><img src="./images/flightform.jpg" /></Link>
         </div>

         <div className="workexample">
            <h4>Flight form with CSS written with SASS.</h4>
            <Link to="/projectpage/1"><img src="./images/flightform.jpg" /></Link>
          </div>

          <div className="workexample">
             <h4>Flight form with CSS written with SASS.</h4>
             <Link to="/projectpage/1"><img src="./images/flightform.jpg" /></Link>
           </div>

           <div className="workexample">
              <h4>Flight form with CSS written with SASS.</h4>
              <Link to="/projectpage/1"><img src="./images/flightform.jpg" /></Link>
            </div>

        </div>


    )
  }

}

export default Workexample
