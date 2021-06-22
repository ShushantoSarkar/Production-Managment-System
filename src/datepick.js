import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './report.css';


class Date extends React.Component {

     render() {
       return (
        <div class="date_range">
        <span class="cal">
            <input class="calender calender_from rounded" type="date" min="2020-01-01" max="3020-01-01"></input>
         </span>
         <span class="cal"> 
                <h4>To</h4>
         </span>
         <span class="cal"> 
            <input class="calender calender_to rounded" type="date" min="2020-01-01" max="3020-01-01"></input>
         </span>
         <span class="cal"> 
            <button class="btn filter_text">Filter</button>
         </span>
         </div>
   )
   };
   }

   export default Date;
   
