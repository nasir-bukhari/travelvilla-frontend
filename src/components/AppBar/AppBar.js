import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 4,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: '70px',
    cursor: 'pointer'
  },
  links: {
    marginRight: 15,
    textDecoration: "none",
    color: 'white'
  },
}));

const ButtonAppBar = ({ isAuthenticated, logout , color, backgroundColor}) => {
  const classes = useStyles();

  const [redirect, setRedirect] = useState(false);

  const logout_user = () => {
    logout();
    setRedirect(true);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color={color} style={{backgroundColor: backgroundColor}}>
        <Toolbar>
          <Typography variant="h5" className={classes.title} component={Link} href="/">
            Travelvilla
          </Typography>
          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="baseline"
          >
            <Link href="/about" color="primary" className={classes.links}>
              <b>About</b>
            </Link>
            <Link href="/contact" color="primary" className={classes.links}>
              <b>Contact</b>
            </Link>
            {isAuthenticated ? (
              <Button color="inherit" onClick={logout_user}>
                Logout
              </Button>
            ) : (
              <Button color="inherit" href="/login" >
                Login
              </Button>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
      {redirect ? <Redirect to="/" /> : <div></div>}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(ButtonAppBar);
