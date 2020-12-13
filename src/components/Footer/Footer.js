import React from "react";
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles({
    rightSpacing: {
        marginRight: '20px'
    }
});

export default function Footer(){
    const classes = useStyles();
   
    return(
        <Box component="div" m={1} style={{backgroundColor: '#f2f2f2', height:'auto', padding:30}} >
            <Container>
            <Grid container direction="row" justify="flex-end" alignItems="flex-end">
                    <Grid  item >
                        <Link href="#">
                            <TwitterIcon fontSize={"large"} style={{color: '#00acee'}}></TwitterIcon>
                        </Link>
                    </Grid>
                    <Grid  item >
                        <Link href="#">
                            <InstagramIcon fontSize={"large"} style={{color: '#3f729b'}}></InstagramIcon>
                        </Link>
                    </Grid>
                    <Grid  item >
                        <Link href="#">
                            <FacebookIcon fontSize={"large"} style={{color: '#3b5998'}}></FacebookIcon>
                        </Link>
                    </Grid>
            </Grid>
            <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                <Grid  item  className={classes.rightSpacing}>
                    <Link href="#" >
                    <h4>About Us</h4>
                    </Link>
                </Grid>
                <Grid  item className={classes.rightSpacing}>
                    <Link href="#">
                    <h4>Support</h4>
                    </Link>
                </Grid>
                <Grid  item className={classes.rightSpacing}>
                    <Link href="#">
                    <h4>Contact Us</h4>
                    </Link>
                </Grid>
                <Grid  item className={classes.rightSpacing}>
                    <Link href="#">
                    <h4>Privacy Policy</h4>
                    </Link>
                </Grid>
                <Grid  item className={classes.rightSpacing}>
                    <Link href="#">
                    <h4>Service Status</h4>
                    </Link>
                </Grid>
            </Grid>
            <Container maxWidth="sm" style={{color:'black'}}>
                <span>All rights are reserved. &#169; </span> www.travelvilla.com
            </Container>
            </Container>
        </Box>
    );
}