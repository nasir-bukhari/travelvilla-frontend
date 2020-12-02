import React from "react";

import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import image4 from '../../../assets/images/LandingPage/image4.jpg';

export default function ExploreSection(){
    return(
        <Container maxWidth="lg" fixed >
            <h1>Explore Discover And Save</h1>
            <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={3}>
                <Grid item  xs={12}>
                    <Card >
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt="Plan Ahead and Save"
                            height="auto"
                            image={image4}
                            title="Discover"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Plan Ahead And Save
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Book 60 days in advance for 20% off select stays.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>           
        </Container>
    );
}