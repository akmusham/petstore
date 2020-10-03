import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

function login() {
  return(
    <form className="login100-form validate-form">
      <span className="login100-form-title">
        Login
      </span>

    <div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
      <input className="input100" type="text" name="email" placeholder="Email" />
      <span className="focus-input100"></span>
      <span className="symbol-input100">
        <i className="fa fa-envelope" aria-hidden="true"></i>
      </span>
    </div>

    <div className="wrap-input100 validate-input" data-validate = "Password is required">
      <input className="input100" type="password" name="pass" placeholder="Password" />
      <span className="focus-input100"></span>
      <span className="symbol-input100">
        <i className="fa fa-lock" aria-hidden="true"></i>
      </span>
    </div>

    <div className="container-login100-form-btn">
      <button className="login100-form-btn">
        Login
      </button>
    </div>

    <div className="text-center p-t-12">
      <span className="txt1">
        Forgot
      </span>
      <a className="txt2" href="#">
        Username / Password?
      </a>
    </div>

      <div className="text-center p-t-136">
        <Link className="txt2" to="/auth/register">
          Create your Account
          <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
        </Link>
      </div>
    </form>
  )
}

export default login
