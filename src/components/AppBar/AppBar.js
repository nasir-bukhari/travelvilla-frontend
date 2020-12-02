import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 4,
  },
  links: {
    marginRight: 15,
    textDecoration: "none",
  },
}));

const ButtonAppBar = ({ isAuthenticated, logout }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Travelvilla
          </Typography>
          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="baseline"
          >
            <Link href="#" color="primary" className={classes.links}>
              <b>Trips</b>
            </Link>
            <Link href="#" color="primary" className={classes.links}>
              <b>Travel</b>
            </Link>
            {isAuthenticated ? (
              <Button color="inherit" onClick={logout}>
                Logout
              </Button>
            ) : (
              <Button color="inherit" href="/login">
                Login
              </Button>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(ButtonAppBar);
