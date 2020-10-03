import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
function NavBar() {
  return(
    <nav class="">
          <div class="container">
            <div class="nav-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navi">
                <span class="sr-only"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <Link class="navbar-brand" to="/">PawSale</Link>
            </div>

          <div class="collapse navbar-collapse pull-right " id="navi">
            <ul class="nav navbar-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/About">About us</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/auth/login">Login</Link></li>
            </ul>
          </div>
        </div>
      </nav>
  )
}

export default NavBar
