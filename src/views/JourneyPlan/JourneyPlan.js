import React from "react";
import ButtonAppBar from '../../components/AppBar/AppBar';
import Footer from "../../components/Footer/Footer";
import Layout from "../../hoc/Layout";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import { makeStyles } from '@material-ui/core/styles';
import TrainIcon from '@material-ui/icons/Train';
import MapContainer from '../../components/MapContainer/MapContainer';
const useStyles = makeStyles((theme) => ({
  paper: {
    textAlign: 'left',
    borderRadius: 0,
    padding: '20px',
    color: theme.palette.text.secondary,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  spacingLeft: {
    marginLeft: '10px'
  },
  spacingTop: {
    marginTop: '20px'
  },
  directionDiv: {
    padding: '10px 30px 10px 10px',
    width: '80%'
  }
}));
export default function JourneyPlan() {
  const classes = useStyles();

  return (
    <Layout>
      <ButtonAppBar color="primary" backgroundColor="rgba(39, 99, 42, 1)"></ButtonAppBar>
      <Container >
      <Typography variant="h3" component="h2" style={{marginTop: '20px'}}>
        Journey Results
      </Typography>
      <Box component="span" m={1}>
      <Grid container spacing={3}>
        <Grid item md={6} xs={12}>
          <Paper className={classes.paper}>
          <Typography variant="h6" component="span" >
            From: 
          </Typography> 
          <Typography variant="subtitle1" component="span" className={classes.spacingLeft}>
             Lahore
          </Typography>
          <br></br>
          <Typography variant="h6" component="span" >
            To: 
          </Typography>
          <Typography variant="subtitle1" component="span" className={classes.spacingLeft}>
             Islamabad
          </Typography>
          <br></br>
          <Typography variant="h6" component="span" >
            Leaving Date/Time: 
          </Typography>
          <Typography variant="subtitle1" component="span" className={classes.spacingLeft}>
             23 March 2020 / 3:12 pm
          </Typography>
          <br></br>
          <br></br>
          <Button variant="contained" color="secondary" href='/'>
              Edit Journey
          </Button>
          </Paper>
        </Grid>
        <Grid item md={6} xs={12}>
          <Paper className={classes.paper}>
          <Typography variant="h6" component="div" >
            Travel Preferences and Accessiblity
          </Typography>
          <Typography variant="subtitle1" component="div">
            Showing the fastest routes Using all transport modes Max walk time 60 mins
          </Typography>
          <br></br>
          
          <Button variant="contained" color="secondary" className={classes.spacingTop}>
              Edit Preferences
          </Button> 
          </Paper>
        </Grid>
        
      </Grid>
      </Box>
      <br></br>
      <br></br>
      <Typography variant="h6" component="span" >
            THE FOLLOWING JOURNEYS DEPART ON WED 9 DEC By Public Transport
      </Typography>
      
      <Accordion className={classes.spacingTop} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Route 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Container maxWidth="lg" style={{backgroundColor: 'lightgrey', padding: '10px'}}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <Box component="div">
                <Typography className={classes.heading} variant='h6' component="span">Leave At: </Typography>
                <Typography className={classes.heading}  component="span">2:41pm</Typography> 
                <br></br>
                <Typography className={classes.heading}  variant='h6' component="span">Arrive At: </Typography>
                <Typography className={classes.heading}  component="span">10:23 am </Typography>
                </Box>
                <br></br>
                <Box component="div" >
                <DirectionsWalkIcon ></DirectionsWalkIcon>
                <span className={classes.directionDiv}>
                  
                  <Typography className={classes.heading} variant='h6' component="span">
                    Board Ride-On Bus 61 - 15 mins
                    <br></br>
                    Departs from ODEND HAL AVE & LOST KNIFE RD
                  </Typography>
                  
                </span>
                  <hr></hr>

                </Box>
              </Paper>
              <br></br>
              <Paper className={classes.paper}>
               
                <Box component="div" >
                <TrainIcon></TrainIcon>
                <span className={classes.directionDiv}>
                  
                  <Typography className={classes.heading} variant='h6' component="span">
                    Board Ride-On Bus 61 - 15 min
                    <br></br>
                    Departs from ODEND HAL AVE & LOST KNIFE RD
                  </Typography>
                  
                </span>
                  <hr></hr>

                </Box>
              </Paper>
              <br></br>
              <Paper className={classes.paper}>
               
                <Box component="div" >
                <DirectionsWalkIcon></DirectionsWalkIcon>
                <span className={classes.directionDiv}>
                  
                  <Typography className={classes.heading} variant='h6' component="span">
                    Walk - 3 min - 0.1 miles

                    <br></br>
                    to SHADY GROVE METRO STATION
                  </Typography>
                  
                </span>
                  <hr></hr>

                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
              <Button variant="contained" color="primary">
                View Map
              </Button>
              {/* <Box component="div"> */}
                  <MapContainer ></MapContainer>

              {/* </Box> */}
              </Paper>
            </Grid>
            
          </Grid>
        </Container>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Route 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      </Container>
      <Footer/>
    </Layout>
  );
}
