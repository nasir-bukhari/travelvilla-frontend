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

export default function Header(){
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
    return(
        <Box component="div" className={classes.root}>
           <ButtonAppBar color="primary" backgroundColor="rgba(39, 99, 42, 0.3)"></ButtonAppBar>
           <Container maxWidth="lg" >
                <Box component="div" className={classes.box}>
                <form noValidate autoComplete="off" className={classes.form} >
                    <TextField id="outlined-basic" label="From" variant="outlined"  className={classes.formFields}/>
                    <TextField id="outlined-basic" label="To" variant="outlined" className={classes.formFields}/>
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
                        <Button href="/plan-my-journey" variant="contained" color="primary" className={classes.formBtn}>
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