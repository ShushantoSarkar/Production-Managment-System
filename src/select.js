import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './report.css';
import Date from './datepick';


class Select extends React.Component {
    //set the statte default value
     constructor(props) {
       super(props);
       this.state = {value: 'hide'};
     }
     //set the state value based on select option value
     divstatus = (e) =>{
        console.log(e.target.value);
        if(e.target.value=="coustom")
            this.setState({value: "show"});
        else 
            this.setState({value: "hide"});
     }
     render() {
      
       return (
      <div>
          <div class="filter">
          <select onChange={this.divstatus}>
          <option value="date">Current Date</option>
          <option value="week">Current Week</option>
          <option value="month">Current Month</option>
          <option value="coustom">Coustom Date</option>
         </select>
         </div>
        <div className={this.state.value}>
            <Date />
        </div>
     </div>
   )
   };
   }

   export default Select;