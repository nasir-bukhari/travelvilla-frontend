import React from "react";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import ButtonAppBar from '../components/AppBar/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Layout from "../hoc/Layout";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(3),
        textAlign: 'left',
        color: theme.palette.text.secondary,
        height: '440px',
      },
      fields: {
          margin: '10px 0px',
          width: '500px'
      }
}));
export default function About(){
    const classes = useStyles();
 return(
    <Layout>
      <ButtonAppBar color="primary" backgroundColor="rgba(39, 99, 42, 1)"></ButtonAppBar>
      <Container fixed>
      <Typography variant="h3" component="h2" style={{marginTop: '40px'}}>
        Who we are
      </Typography>
        <br></br>
        <br></br>
          <Paper className={classes.paper}>
              <Typography variant='body1'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              <br>
              </br>
              <br>
              </br>
          
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
              <br></br>
              <br></br>
              We receive no public funding and if we make a profit we put it all back into making our services better. We do this by listening to what our customers want and by using the latest technology and our years of experience to keep costs down and quality up.
              </Typography>
              <br></br>

              
          </Paper>
    </Container> 
    </Layout> 
 );   
}
