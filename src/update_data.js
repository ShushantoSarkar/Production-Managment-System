import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './data.css';
import Sidebar from './sidebar';
import Notification from './notification';

class Update_data extends React.Component {
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

                <div class="column_2 graph_column form_col">
                  <form action="#" method="POST" class="form">
                    <div class="shift divison">
                      <label for="shift">Shift </label>
                      <br></br>
                      <select id="shift">
                        <option value="shiftA">A</option>
                        <option value="shiftB">B</option>
                      </select>
                    </div>
                    <div class="loomNumber divison">
                      <label for="loomNumber">Loom Number </label>
                      <br></br>
                      <input type="number" name="loomNumber" id="loomNumber" />
                    </div>
                    <div class="peakValue divison">
                      <label for="peakValue">Peak Value </label>
                      <br></br>
                      <input type="number" name="peakValue" id="peakValue" />
                    </div>
                    <div class="closingReading divison">
                      <label for="closingReading">Closing Reading </label>
                      <br></br>
                      <input
                        type="number"
                        name="closingReading"
                        id="closingReading"
                      />
                    </div>
                    <div class="rpm divison">
                      <label for="rpm">RPM </label>
                      <br></br>
                      <input type="number" name="rpm" id="rpm" />
                    </div>
                    <div class="submit divison">
                      <input type="submit" name="submit" id="submit" />
                    </div>
                  </form>
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

  export default Update_data;