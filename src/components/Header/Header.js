import React, { useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import ButtonAppBar from '../../components/AppBar/AppBar';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import {MenuItem} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Autocomplete from '@material-ui/lab/Autocomplete';
import DateFnsUtils from '@date-io/date-fns';
import Button from '@material-ui/core/Button';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import {useSelector,useDispatch} from 'react-redux';
import {addTrip,removeRoute,removeTrip} from '../../actions/map';

import image from '../../assets/images/LandingPage/headerImg.jpg';
import { useHistory } from "react-router";
import { Link } from "react-router-dom";




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
    const history = useHistory();

    const state  = useSelector(state=>state.map)
    //using the dispatch

    const dispatch = useDispatch();
   

    useEffect(()=>{
        dispatch(removeTrip());
        dispatch(removeRoute())
    },[])


    const cities = ['bahawalpur','faisalabad','gujranwala','lahore','multan','rawalpindi','Sialkot']

    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [selectedTime, setSelectedTime] =React.useState('');

    const handleDateChange = (date) => {

      setSelectedDate(date);

    };

    const handleTimeChange = (event) => {

        setSelectedTime(event.target.value);
  
      };
    
    let [city, setCity] = React.useState('');
    let [stops, setStops] = React.useState([]);
    let [fromAddress, setFromAddress] = React.useState('');
    let [toAddress, setToAddress] = React.useState('');

    //Update city

    const handleCityChange = (event) => {

        let city = event.target.value;
        setCity(city);

        //pass city to the dynamic address
        handleStops(city)
       
    };

   const handleStops= city=>{

        //fetch for city stops from assets
        fetch(`../../stops/${city}.json`)
        .then(response => response.json())
        .then(data =>{
            
            const stops = data.features
            setStops(stops)
           
        })
        
    }

     
    const handleSubmit=event=>{

        event.preventDefault()

        // Grab the user selections and update global state and send to API
        const fromName = fromAddress.properties.name;
        const fromLongitude  = fromAddress.geometry.coordinates[0];
        const fromLatitude  = fromAddress.geometry.coordinates[1];
        const fromID = fromAddress.properties.id;
        const toName = toAddress.properties.name;
        const toLongitude  = toAddress.geometry.coordinates[0];
        const toLatitude  = toAddress.geometry.coordinates[1];
        const toID = toAddress.properties.id;
        const date = selectedDate;
        const time = selectedTime;
        const selectedCity = city;

        const payload = {

            'fromName':fromName,
            'fromLongitude':fromLongitude,
            'fromLatitude':fromLatitude,
            'fromID':fromID,
            'toName':toName,
            'toLongitude':toLongitude,
            'toLatitude':toLatitude,
            'toID':toID,
            'date':date,
            'time':time,
            'selectedCity':selectedCity
        };

        
        //add the user selection to state

         dispatch(addTrip(payload));

         setTimeout(()=>{
            history.push('/plan-my-journey');
         },1000)
       
    }
   

    return(
        <Box component="div" className={classes.root}>
           <ButtonAppBar color="primary" backgroundColor="rgba(39, 99, 42, 0.3)"></ButtonAppBar>
           <Container maxWidth="lg" >
                <Box component="div" className={classes.box}>
                {/* onSubmit={(e) => updateCoordinates(e)} */}
                <form  noValidate autoComplete="off" className={classes.form} >

                    {/* City selection */}
                    

                    <TextField
                    select
                    id="outlined-basic"
                    value={city}
                    label='City'
                    variant="outlined" 
                    onChange={handleCityChange}
                    className={classes.formFields}
                    
                    >{
                        cities.map((city,id)=>{

                           return <MenuItem value={city} key={id}>{city.toUpperCase()}</MenuItem>
                        })
                    }
                   
                    </TextField>


                    {/* From Stops Selection */}

                    <Autocomplete
                        id="outlined-basic"
                        options={stops}
                        getOptionLabel={option => option.properties.name.toUpperCase()}
                        onChange={(event, value) => setFromAddress(value)}
                        className={classes.formFields}
                        renderInput={params => <TextField {...params} label="From" variant="outlined" />}
                        
                    />
                       

                    {/* To Stops Selection */}

                    <Autocomplete
                        id="outlined-basic"
                        options={stops}
                        getOptionLabel={option => option.properties.name.toUpperCase()}
                        onChange={(event, value) => setToAddress(value)}
                        className={classes.formFields}
                        renderInput={params => <TextField {...params} label="To" variant="outlined" />}
                        
                    />


                      {/* Date & Time Picker */}

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
                                className={classes.textField}
                                InputLabelProps={{
                                shrink: true,
                                }}
                                inputProps={{
                                step: 300, // 5 min
                                }}
                                value={selectedTime}
                                onChange={handleTimeChange}
                            
                                
                            />

                      
                            <Button type="submit" variant="contained" color="primary" className={classes.formBtn} onClick={handleSubmit}
                            disabled={
                                
                                selectedDate !== '' && selectedTime !== '' &&
                                fromAddress !== '' && toAddress !== '' ? false : true
                            }
                            >
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