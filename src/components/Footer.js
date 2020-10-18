import React from 'react';
import Eveniment from './Eveniment';
import Grid from '@material-ui/core/grid';
import {AppBar, Typography, Container} from "@material-ui/core";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

const Footer = () => {
    return (
        <div id="footer">
              <Container maxWidth="lg">

            <Grid
                container
                spacing={3}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                alignContent="center"
                id="contact">
                <Grid item xs={12} md={6} lg={4}>
                    <img src="https://itfest.osut.ro/media/it_fest_logo_sized.png"    
                        style={{width:"100%",maxWidth:"160px",display:"block"}}/>
                    <br/>
                    <Typography
                        color="textLight"
                        variant="body1"
                        component="h1"
                        >
                        <img src="https://itfest.osut.ro/media/icon_call.png" alt="Tel:"/> (+40) 256-592-181
                    </Typography>
                    <Typography
                        color="textLight"
                        variant="body1"
                        component="h1"
                        >
                        <img src="https://itfest.osut.ro/media/icon_email.png" alt="Email:"/> itfest@osut.ro
                    </Typography>
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                    <img src="https://itfest.osut.ro/media/logo_osut_sized.png" 
                        style={{width:"100%",maxWidth:"160px",display:"block"}}/>
                    <br/>
                    <Typography
                        color="textLight"
                        variant="body1"
                        component="h1"
                        style={{
                            padding: 0
                        }}
                        >
                        <img src="https://itfest.osut.ro/media/icon_call.png" alt="Tel:"/> (+40) 256-592-181
                    </Typography>
                    <Typography
                        color="textLight"
                        variant="body1"
                        component="h1"
                        >
                        <img src="https://itfest.osut.ro/media/icon_email.png" alt="Email:"/> office@osut.ro
                    </Typography>
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                <Typography
                        color="textLight"
                        variant="h4"
                        component="h6"
                        >
                        Social media
                    </Typography>
                    <Typography
                        color="textLight"
                        variant="body1"
                        component="p"
                        style={{
                        marginTop: 10,
                        marginBottom: 10
                    }}>
                                        Urmărește-ne și pe rețelele de socializare pentru a fi la curent cu noutățile!

                    </Typography>
                
                    <Button color="light"><a href="https://www.instagram.com/itfest.timisoara/"><InstagramIcon color="primary" /></a></Button>
                    <Button color="light"><a href="https://www.facebook.com/ITFestTimisoara"><FacebookIcon color="primary" /></a></Button>

                </Grid>
            </Grid>
            </Container>
        </div>
    );
}
export default Footer;