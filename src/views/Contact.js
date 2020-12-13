import React from "react";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Footer from '../components/Footer/Footer';
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
        height: 'auto',
        marginBottom: '20px'
      },
      fields: {
          margin: '10px 0px',
          width: '80%'
      }
}));
export default function Contact(){
    const classes = useStyles();
 return(
    <Layout>
      <ButtonAppBar color="primary" backgroundColor="rgba(39, 99, 42, 1)"></ButtonAppBar>
      <Container fixed>
      <Typography variant="h3" component="h2" style={{marginTop: '40px'}}>
       Contact and Feedback
      </Typography>
        <br></br>
        <br></br>
      <Grid container spacing={3} >
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
              <Typography variant='body1'>
              If you have any ideas, suggestions or questions please get in touch.
              </Typography>
              <br></br>

              <form noValidate autoComplete="off" style={{textAlign: 'right'}}>
                   
                <TextField id="outlined-basic" label="Enter Name" variant="outlined"  className={classes.fields}/> 
                <TextField id="outlined-basic" label="Enter Email" variant="outlined"  className={classes.fields}/> 
                <TextField
                    id="outlined-multiline-static"
                    label="Enter Comment"
                    multiline
                    rows={4}
                    variant="outlined"
                    className={classes.fields}
                    />
                <div>
                <Button variant="contained" color="secondary" style={{borderRadius: '15px', padding: '5px 20px'}}>
                        Send
                </Button>
                </div>    
              </form>
              
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper} style={{backgroundColor: 'lightyellow'}}>
            <Typography variant='h6'>
              Customer and Support
            </Typography>
            <Typography variant='subtitle1' style={{marginTop: '10px'}}>
                Please use our feedback form opposite to contact us and one of our team will get back to you within three working days.
                <Typography variant='subtitle1' style={{marginTop: '10px'}}>
                       If you prefer to write please address your letter to:
                </Typography>
            </Typography>
            <Typography variant='display1'>
               <b style={{marginLeft: '50px'}}> Customer Services
                Traveline Information Limited
                Fifth Floor (South)
                Chancery House
                53 – 64 PUCIT Mall Road,
                Pakistan WC2A 1QS</b>
            </Typography>
            <br></br>
            <Typography variant='subtitle1' style={{marginTop: '10px'}}>
                Alternatively, for support on all our services including on our 0871 200 22 33 telephone service and our 84268 text service, please call us on 0114 22 11 282.
            <br></br>
            
            <Typography variant='subtitle1' style={{marginTop: '10px'}}>
                Please note that  this number is available during office hours and that it is for customer support and cannot give advice on travel times or fares.
            </Typography>
                We charge 12 pence per minute from landlines and mobiles for a call to 0871 200 22 33; your phone company may add its own access charge but it will tell you about this.


            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container> 
      <Footer></Footer>
    </Layout> 
 );   
}
