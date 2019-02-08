import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import projectsJson from "../../projects.json"
import Grid from "../Grid"
import "./workexample.scss"

class Workexample extends React.Component {

  render() {
    return (
      <div className="workexample-container-workexample">


      <div className="workexample">
        <div className="workexample-image">
         <Link to="/projectpage/1"><img src="./images/somn/somn_thumb.jpg" alt="workexample comprend thumbnail"/></Link>
        </div>
        <div className="workexample-text">
          <h4>Min doktor</h4>
          <p>Campaign page</p>
        </div>
       </div>

        <div className="workexample">
          <div className="workexample-image1">
           <Link to="/projectpage/2"><img src="./images/comprend/comprend_thumb.jpg" alt="workexample comprend thumbnail"/></Link>
          </div>
          <div className="workexample-text1">
            <h4>Comprend</h4>
            <p>Career page</p>
          </div>
         </div>



           <div className="workexample">
           <div className="workexample-text4">
           </div>
           <div className="workexample-image4">
              <Link to="/projectpage/3"><img src="./images/form/form_thumb.jpg" alt="workexample form thumbnail"/></Link>
              <h4>Signup form</h4>
              <p>Posts the data into a HTTPbin</p>
            </div>
            </div>


            <div className="workexample">
            <div className="workexample-text5">
            </div>
            <div className="workexample-image5">
               <Link to="/projectpage/4"><img src="./images/todo/todoapp_thumb.jpg" alt="workexample todoapp thumbnail"/></Link>
               <h4>Todo App</h4>
               <p>Add things todo and store them in a list</p>
             </div>
             </div>


             <div className="workexample">
             <div className="workexample-text4">
             </div>
             <div className="workexample-image4">
                <Link to="/projectpage/5"><img src="./images/form/form_thumb.jpg" alt="workexample form thumbnail"/></Link>
                <h4>VAT calculator</h4>
                <p>Built with controlled components in React</p>
              </div>
              </div>

              <div className="workexample">
              <div className="workexample-text2">
              </div>
              <div className="workexample-image2">
                <Link to="/projectpage/6"><img src="./images/techspressen/techspressen_thumb.jpg" alt="workexample techspressen thumbnail"/></Link>
                 <h4>Techspressen</h4>
                 <p>A remake of the newspaper Expressen</p>
               </div>
                </div>

        </div>


    )
  }

}

export default Workexample
