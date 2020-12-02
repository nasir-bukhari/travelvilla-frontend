import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import ButtonAppBar from '../../components/AppBar/AppBar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Grid from '@material-ui/core/Grid';
import { Button } from "@material-ui/core";
import image from '../../assets/images/LandingPage/headerImg.jpg';
import HotelIcon from '@material-ui/icons/Hotel';
import FlightIcon from '@material-ui/icons/Flight';
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';
import AllOutIcon from '@material-ui/icons/AllOut';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
const useStyles = makeStyles({
    root: {
      backgroundImage: `url(${image})`,
      color: 'black',
      height: 700,
      backgroundRepeat: 'none',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    },
    space:{
        marginTop:70,
        borderRadius:15,
        backgroundColor: 'white',
        height: 'auto'
    },
});

export default function Header(){
    const classes = useStyles();
    const [value, setValue] = React.useState(2);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const top100Locations = [
        { title: 'Lahore', year: 1994 },
        { title: 'Sialkot', year: 1972 },
        { title: 'Sindh', year: 1974 },
        { title: 'Balochistan', year: 2008 }];
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
    setSelectedDate(date);
  };
    return(
        <Box component="div" className={classes.root}>
           <ButtonAppBar></ButtonAppBar>
           <Container maxWidth="md" >
                <Typography component="div" className={classes.space} >
                    <TabContext value={value}>
                        <Paper style={{marginBottom:20}}>
                            <TabList onChange={handleChange} aria-label="simple tabs example" centered>
                                <Tab label="Stays" value="1" icon={<HotelIcon />}/>
                                <Tab label="Flights" value="2" icon={<FlightIcon />}/>
                                <Tab label="Cars" value="3" icon={<LocalTaxiIcon/>}/>
                                <Tab label="Packages" value="4" icon={<EmojiTransportationIcon/>}/>
                                <Tab label="Things to do" value="5" icon={<AllOutIcon/>}/>
                            </TabList>
                        </Paper>
                        <TabPanel value="1">
                        <Grid container spacing={3}>
                            <Grid item xs={12} lg={8}>
                                <Autocomplete
                                id="combo-box-demo"
                                options={top100Locations}
                                getOptionLabel={(option) => option.title}
                                
                                renderInput={(params) => <TextField {...params} label="Going To" variant="outlined" />}
                                />
                            </Grid>
                            <Grid item xs={6} lg={2}>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <Grid container justify="space-around">
                                        <KeyboardDatePicker
                                        disableToolbar
                                        variant="inline"
                                        format="MM/dd/yyyy"
                                        margin="normal"
                                        id="date-picker-inline"
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                        />
                                    
                                    </Grid>
                                </MuiPickersUtilsProvider>
                            </Grid>
                            <Grid item xs={6} lg={2}>
                                        
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <Grid container justify="space-around">
                                        <KeyboardDatePicker
                                        disableToolbar
                                        variant="inline"
                                        format="MM/dd/yyyy"
                                        margin="normal"
                                        id="date-picker-inline"
                                        
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                        />
                                    
                                    </Grid>
                                </MuiPickersUtilsProvider>
                            </Grid>
                            
                        </Grid>
                            
                            <Grid
                                container
                                direction="row"
                                justify="center"
                                alignItems="center" style={{marginTop:40}}>
                               <Button variant="contained" color="primary" size="large">
                                    Search
                                </Button>
                            </Grid>
                        </TabPanel>
                        <TabPanel value="2">Hotels</TabPanel>
                        <TabPanel value="3">Cars</TabPanel>
                        <TabPanel value="4">Packages</TabPanel>
                        <TabPanel value="5">Things to do</TabPanel>
                    </TabContext>
                </Typography>
            </Container>
        </Box>
        
    );
}