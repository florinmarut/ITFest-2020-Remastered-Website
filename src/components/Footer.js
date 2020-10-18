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
                alignContent="center">
                <Grid item xs={12} md={6} lg={4}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/mytestproject-d6bc5.appspot.com/o/logos_cne.png?alt=media&token=d4216087-e665-4760-9516-dd67b3c195b2&fbclid=IwAR2hOVzcPkiSknD3gV799A0YOXFGFZaaMLZSt6FNV-PiOKjFPsnbeRrRvig" 
                    
                    style={{width:"100%",maxWidth:"160px",display:"block"}}/>
                    Tel: 0123131231231<br />
                    Email: @!#!@#!@#12312<br />

                </Grid>
                <Grid item xs={12} md={6} lg={4}>

                <img src="https://abc.osut.ro/img/logouri%202020/12-01.png?fbclid=IwAR05zlb_tFLtxO5ONaSywkCnliJUZekjwp9NjXr5x0CWzwMoNlRsycreSNY" 
                    
                    style={{width:"100%",maxWidth:"160px",display:"block"}}/>
                    Tel: 0123131231231<br/>
                    Email: @!#!@#!@#12312<br/>
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
                
                    <Button color="light"><a href=""><InstagramIcon color="primary" /></a></Button>
                    <Button color="light"><a href=""><FacebookIcon color="primary" /></a></Button>

                </Grid>
            </Grid>
            </Container>
        </div>
    );
}
export default Footer;