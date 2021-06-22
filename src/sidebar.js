import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './report.css';
import Report from './report';


export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'drop'};
    this.state1={value: 'drop-show material-icons'};
    this.state2={value: 'drop material-icons'};
  }
  function1= ()=> {
    if(this.state.value=="drop"){
            this.setState({value: "drop-show"});
            this.state1={value: 'drop material-icons'};
            this.state2={value: 'drop-show material-icons'};
    }
        else {
            this.setState({value: "drop"});
            this.state1={value: 'drop-show material-icons'};
            this.state2={value: 'drop material-icons'};
        }
  } 
    render() {
      return (
        <section class="side_bar">
        <div class="side_bar_container">
          <div class="company_name">
            <h1>aparasoft</h1>
          </div>
        <div class="menu_item">
        <ul>
        <li ><svg xmlns="http://www.w3.org/2000/svg" width="32" height="48" fill="white" class="bi bi-file-earmark-bar-graph" viewBox="0 0 16 16">
            <path d="M10 13.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v6zm-2.5.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1zm-3 0a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1z"/>
            <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
            </svg>
            <a href="/dashboard">Report</a>
        </li>
        
      

  

        
        <li class="dropdown" onClick={this.function1} ><svg xmlns="http://www.w3.org/2000/svg" width="32" height="48" fill="white" class="bi bi-clipboard-data" viewBox="0 0 16 16">
              <path d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0V9z"/>
              <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
              <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
            </svg>
            <button >Data </button>
            <span  className={this.state1.value} >keyboard_arrow_down</span><span   className={this.state2.value} >keyboard_arrow_up</span>

              
          </li>
          <div class="text-center">
          <li className={this.state.value}>
            
        <a href="#" >View Data </a>
        </li>
  
        <li className={this.state.value}>
        <a href="/Update">Update Data</a>
        </li>
       
          </div>
          
        <li ><svg xmlns="http://www.w3.org/2000/svg" width="32" height="48" fill="white" class="bi bi-file-person" viewBox="0 0 16 16">
            <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
            <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
          </svg>
          <a href="/">About</a></li>
        <li><svg xmlns="http://www.w3.org/2000/svg" width="32" height="48" fill="white" class="bi bi-info-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
          </svg>
          <a href="/">Help</a></li>
        </ul>
        </div>
      </div>  
    </section>

        );
    }
  }