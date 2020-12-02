import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import image1 from '../../../assets/images/LandingPage/image1.jpg'
import image2 from '../../../assets/images/LandingPage/image2.jpg'
import image3 from '../../../assets/images/LandingPage/image3.jpg'
const useStyles = makeStyles({
    root: {
      maxWidth: 800,
    },
  });
export default function IdeasSection(){
    const classes = useStyles();
    return(
        <Container maxWidth="lg" fixed >
            <h1>Ideas for your next trip</h1>
            <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={3}>
                <Grid item lg={8}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt="Ideas for your next trip"
                            height="610"
                            image={image1}
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Your retreat awaits
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Explore our variety of cottage escapes - featuring the comforts of home whilst taking you worlds away.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item lg={4} xs={12}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt="Free Cancelation"
                            height="250"
                            image={image2}
                            title="Free cancelation"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Free Cancelation on most hotels
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Because flexibiliy matters.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <br></br>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt="Free Cancelation"
                            height="250"
                            image={image3}
                            title="Free cancelation"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Free Cancelation on most hotels
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Because flexibiliy matters.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card> 
                </Grid>
            </Grid>

            
        </Container>
    );
}