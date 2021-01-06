import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import ButtonAppBar from '../../components/AppBar/AppBar';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import Button from '@material-ui/core/Button';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import image from '../../assets/images/LandingPage/headerImg.jpg';
// import { Link } from "react-router-dom";
const useStyles = makeStyles({
    root: {
      background: `url(${image}) `,
      color: 'black',
      height: 700,
      backgroundRepeat: 'none',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    },
    box:{
        marginTop: '90px',
        backgroundColor: 'rgba(39, 99, 42, 0.3)',
        padding: '20px 30px',
        width: '500px',
        margin: 'auto'
    },
    form:{
        backgroundColor: 'white',
        padding: '20px'
    },
    formFields:{
        width: '100%',
        marginBottom: '20px',
      
    },
    formBtn:{
        borderRadius: '30px',
        marginTop: '30px'
    }
});

const Header = () =>{
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
    let [fromLatitude, setfromLatitude] = React.useState(null);
    let [fromLongitude, setfromLongitude] = React.useState(null);
    let [toLatitude, settoLatitude] = React.useState(null);
    let [toLongitude, settoLongitude] = React.useState(null);
    
    let [fromAddress, setFromAddress] = React.useState('');
    let [toAddress, setToAddress] = React.useState('');
    // searches for new locations
    const updateCoordinates = (e) => {
        e.preventDefault()

        const encodedFromAddress = encodeURI(fromAddress);
        const encodedToAddress = encodeURI(toAddress);
        // fetches data from our api
        fetch(`https://google-maps-geocoding.p.rapidapi.com/geocode/json?language=en&address=${encodedFromAddress}`, {
            "method": "GET",
            "headers": {
            "x-rapidapi-host": "google-maps-geocoding.p.rapidapi.com",
            "x-rapidapi-key": "53a15eb743msh3cdbb02c5482110p1cf9d2jsn3127424c9011"
            }
        })
        .then(response => response.json())
        .then(response => {
            console.log(response.results);
            setfromLatitude(response.results[0].geometry.location.lat);
            setfromLongitude(response.results[0].geometry.location.lng);
        })
        .catch(err => console.log(err));
        fetch(`https://google-maps-geocoding.p.rapidapi.com/geocode/json?language=en&address=${encodedToAddress}`, {
            "method": "GET",
            "headers": {
            "x-rapidapi-host": "google-maps-geocoding.p.rapidapi.com",
            "x-rapidapi-key": "53a15eb743msh3cdbb02c5482110p1cf9d2jsn3127424c9011"
            }
        })
        .then(response => response.json())
        .then(response => {
            console.log(response.results);
            settoLatitude(response.results[0].geometry.location.lat);
            settoLongitude(response.results[0].geometry.location.lng);

            // alert("From Latitude:"+ fromLatitude + " | From Longitude: " + fromLongitude + "\n"
            // + "To Latitude:"+ toLatitude + " | To Longitude: " + toLongitude );
        })
        .catch(err => console.log(err));

      
    }

    return(
        <Box component="div" className={classes.root}>
           <ButtonAppBar color="primary" backgroundColor="rgba(39, 99, 42, 0.3)"></ButtonAppBar>
           <Container maxWidth="lg" >
                <Box component="div" className={classes.box}>
                <form onSubmit={(e) => updateCoordinates(e)} noValidate autoComplete="off" className={classes.form} >
                    <TextField 
                    value={fromAddress}
                    onChange={(e) => setFromAddress(e.target.value)}
                    id="outlined-basic" label="From" variant="outlined"  className={classes.formFields}/>
                    <TextField 
                    value={toAddress}
                    onChange={(e) => setToAddress(e.target.value)}
                    
                    id="outlined-basic" label="To" variant="outlined" className={classes.formFields}/>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justify="space-around">
                            <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                           
                            id="date-picker-inline"
                            label="Select Date"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                            />
                           <TextField
                                id="time"
                                label="Select Time"
                                type="time"
                                defaultValue="07:30"
                                className={classes.textField}
                                InputLabelProps={{
                                shrink: true,
                                }}
                                inputProps={{
                                step: 300, // 5 min
                                }}
                            />
                        <Button type="submit" variant="contained" color="primary" className={classes.formBtn}>
                          Plan my Journey
                        </Button>     
                        </Grid>
                        
                    </MuiPickersUtilsProvider>
                    
                </form>
                </Box>
            </Container>
        </Box>
        
    );
}

export default Header;