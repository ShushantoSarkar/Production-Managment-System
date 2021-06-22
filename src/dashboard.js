import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Report from './report';
import Sidebar from './sidebar';
import Notification from './notification';


class Dashboard extends React.Component {
    render() {
      return (
        <div class="row">
        <div class="col-2 column_1 sidebar_column">
        <Sidebar />
        </div>
        <div class="col-10 ">
          <div class="row body_row">
            <div class="col-9">
            <div class="top_bar"></div> 
            
            <div class="column_2 graph_column">
            <Report />
            </div>
            </div>
            <div class="col-3 column_ 1 notification_column">
            <Notification />
            </div>
          </div>
        </div>
      </div>
    
          
      );
    }
  }

  export default Dashboard;
  /*
   <div class="row ">
        <div class="col-2 col_1">
          <Sidebar />
      </div>
      <div class="col-8 colu_2">
        <Report />
      </div>*/