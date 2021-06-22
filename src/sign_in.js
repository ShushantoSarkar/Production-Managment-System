import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

class Sign extends React.Component {
    render() {
      return (
    <div class="row">
      <div class="col column_1">
        <img src="https://cdn.shortpixel.ai/client/q_lossy,ret_img,w_639/https://www.betterbuys.com/wp-content/uploads/2019/06/hero-intro.png"></img>
      </div>



      <div class="col column_2 ">
        <form class="login-heading">
          <div class="form-row">
            <div class="col-6">
            <a href="/sign_up" class="btn btn-primary btn-lg active  text-center no-outline disabled" role="button" aria-pressed="true">Sign Up</a>
            </div>
            <div class="col-6">
            <a href="/" class="btn btn-primary btn-lg  text-center no-outline " role="button" aria-pressed="true">Log in</a>
            </div>
          </div>
        </form>
    


        <div class="intro">
          <h1> Hello User ,</h1>
          <p>Welcome , Please Sign Up with your personal account information.</p>
        </div>
     


        <form class="login-form">
          <div class="form-row">
            <div class="col-sm-12 col-lg-6">
              <input class="input" type="text" class="no-outline" placeholder="Username"></input>
            </div>
            <div class="col-sm-12 col-lg-6">
              <input class="input" type="text" class="no-outline" placeholder="Email"></input>
            </div></div>
            <br></br>
            <div class="form-row">
            <div class="col-sm-12 col-lg-6">
              <input class="input" type="password" class="no-outline" placeholder="Password"></input>
            </div>
            <div class="col-sm-12 col-lg-6">
              <input class="input" type="password" class="no-outline" placeholder="Confirm Password"></input>
            </div></div>
            <br></br>
          <div class="form-row">
            <div class=" col-sm -12 col-lg-2">
              <a href="/dashboard" class="btn btn-primary btn-lg  text-center no-outline " role="button" aria-pressed="true">Sign Up</a>
            </div>
          </div>
        </form>


        
      </div>
    </div>
      );
    }
  }

  export default Sign;