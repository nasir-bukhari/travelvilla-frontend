import React, {useEffect} from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../theme";
import { connect } from 'react-redux';
import { checkAuthenticated, load_user } from '../actions/auth';

const Layout = (props) => {

  useEffect(() => {
    const fetchData = async () => {
        try {
            await props.checkAuthenticated();
            await props.load_user();
        } catch (err) {

        }
    }

    fetchData();
}, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
};

export default connect(null, { checkAuthenticated, load_user })(Layout);
