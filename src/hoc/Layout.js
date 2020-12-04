import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../theme";
import { connect } from "react-redux";
import {
  checkAuthenticated,
  load_user,
  googleAuthenticate,
} from "../actions/auth";
import queryString from "query-string";

const Layout = (props) => {
  let location = useLocation();

  useEffect(() => {
    const values = queryString.parse(location.search);
    const state = values.state ? values.state : null;
    const code = values.code ? values.code : null;

    console.log("State: " + state);
    console.log("Code: " + code);

    if (state && code) {
      props.googleAuthenticate(state, code);
    } else {
      props.checkAuthenticated();
      props.load_user();
    }
  }, [location]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
};

export default connect(null, {
  checkAuthenticated,
  load_user,
  googleAuthenticate,
})(Layout);
