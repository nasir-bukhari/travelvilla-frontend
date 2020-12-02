import React from "react";
import Box from '@material-ui/core/Box';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';


export default function Footer(){

    return(
        <Box component="div" m={1} style={{backgroundColor: '#f2f2f2', height:'auto', padding:30}} >
            <Container>
            <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                    <Grid  item lg={1} xs={1}>
                        <Link href="#">
                            <TwitterIcon fontSize={"large"}></TwitterIcon>
                        </Link>
                    </Grid>
                    <Grid  item lg={1} xs={1}>
                        <Link href="#">
                            <InstagramIcon fontSize={"large"}></InstagramIcon>
                        </Link>
                    </Grid>
                    <Grid  item lg={1} xs={1}>
                        <Link href="#">
                            <FacebookIcon fontSize={"large"}></FacebookIcon>
                        </Link>
                    </Grid>
            </Grid>
            <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                <Grid  item lg={1} xs={3} md={1} sm={2}>
                    <Link href="#">
                    <h4>About Us</h4>
                    </Link>
                </Grid>
                <Grid  item lg={1} xs={3} md={1} sm={2}>
                    <Link href="#">
                    <h4>Support</h4>
                    </Link>
                </Grid>
                <Grid  item lg={1} xs={3} md={2} sm={2}>
                    <Link href="#">
                    <h4>Contact Us</h4>
                    </Link>
                </Grid>
                <Grid  item lg={1} xs={3} md={2} sm={2}>
                    <Link href="#">
                    <h4>Privacy Policy</h4>
                    </Link>
                </Grid>
                <Grid  item lg={1} xs={3} md={2} sm={2}>
                    <Link href="#">
                    <h4>Service Status</h4>
                    </Link>
                </Grid>
            </Grid>
            <Container maxWidth="md" style={{color:'black'}}>
                <span>All rights are reserved. </span> www.travelvilla.com
            </Container>
            </Container>
        </Box>
    );
}