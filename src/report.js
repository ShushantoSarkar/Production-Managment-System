import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './report.css';


import {Bar} from 'react-chartjs-2';

import Select from './select';

const state = {
    labels: ["1","2","3","4","5", "6"],
    datasets: [{
        label: "Shift A",
        backgroundColor: "orange",
        data: [1, 3, 4, 6, 8 ,5 ]
    }, {
        label: "Shift B",
        backgroundColor: "green",
        data: [4, 3 ,2 ,8 ,9 ,6 ]
    },]
}
const state2={
        labels: ["1","2","3","4","5", "6"],
        datasets: [{
            label: "Shift A",
            backgroundColor: "blue",
            data: [1, 3, 4, 6, 8 ,5 ]
        }, {
            label: "Shift B",
            backgroundColor: "red",
            data: [4, 3 ,2 ,8 ,9 ,6 ]
        },]
}
export default class Report extends React.Component {
  render() {
    return (
      <div class="graph">
        <div class="bar_graph production_graph">
        
        <div class=" shadow-lg p-3 mb-5 bg-white rounded">
         <div class="graph_text">
         <h3>Production</h3>
         </div>
         <Select />
        <Bar
          data={state}
          options={{
            responsive: true,
      legend: {
         position: 'right' // place legend on the right side of chart
      },
      scales: {
         xAxes: [{
            stacked: true // this should be set to make the bars stacked
         }],
         yAxes: [{
            stacked: true // this also..
         }]
      }
          }}
        />
        </div>
        </div>
        <div class="bar_graph efficience_graph">
        
        <div class="shadow-lg p-3 mb-5 bg-white rounded">
        <div class="graph_text">
        <h3>Efficiency</h3>
        </div>
        <Select />
        <Bar
          data={state2}
          options={{
            responsive: true,
      legend: {
         position: 'right' // place legend on the right side of chart
      },
      scales: {
         xAxes: [{
            stacked: true // this should be set to make the bars stacked
         }],
         yAxes: [{
            stacked: true // this also..
         }]
      }
          }}
        />
        </div>
        </div>
      </div>
    );
  }
}