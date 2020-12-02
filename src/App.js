import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./views/LandingPage/LandingPage";
import Login from "./views/Login";
import SignUp from "./views/SignUp";
import ResetPassword from "./views/ResetPassword";
import ResetPasswordConfirm from "./views/ResetPasswordConfirm";
import Activate from "./views/Activate";
import { Provider } from "react-redux";
import store from "./store";

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/reset-password" component={ResetPassword} />
        <Route
          exact
          path="/password/reset/confirm/:uid/:token"
          component={ResetPasswordConfirm}
        />
        <Route exact path="/activate/:uid/:token" component={Activate} />
      </Switch>
    </Router>
  </Provider>
);
export default App;
