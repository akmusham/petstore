import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Login from '../Components/auth/login'
import Home from '../Components/Home/'
import NavBar from '../Components/Home/NavBar'
import Auth from '../Components/auth/'
import Shop from '../Components/Shop/'
import AboutUs from '../Components/AboutUs/'
import '../Css/index.css'

function Routes() {
  return(
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/About">
          <AboutUs />
        </Route>
        <Route exact path="/shop">
          <Shop />
        </Route>
        <OAuth />
      </Switch>
    </Router>
  )
}

function OAuth() {
  return(
    <Router>
      <Switch>
      <Route path="/auth">
        <Auth />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
    </Router>
  )
}

export default Routes
