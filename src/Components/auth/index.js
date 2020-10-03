import React from 'react'
import Login from './login'
import Register from './register'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

function Auth() {
  return(
    <div>
      <div className="limiter">
    		<div className="container-login100">
    			<div className="wrap-login100">
    				<div className="login100-pic js-tilt" data-tilt>
    					<img src="images/img-01.png" alt="IMG" />
    				</div>
            <div>
            <Router>
              <Switch>
              <Route exact path="/auth/register">
                <Register />
              </Route>
                <Route exact path="/auth/login">
                  <Login />
                </Route>
                </Switch>
            </Router>
            </div>

    			</div>
    		</div>
  	   </div>
    </div>
  )
}

export default Auth
