import React from 'react';
import Eveniment from './Eveniment';
import Grid from '@material-ui/core/grid';
import {AppBar, Typography, Container} from "@material-ui/core";

const poza1 = "https://firebasestorage.googleapis.com/v0/b/mytestproject-d6bc5.appspot.com/o/wo" +
        "rkshop.JPG?alt=media&token=9a27be53-bf12-4bb4-b2c7-5f10b53d70b0";

const Evenimente = () => {
    return (
        <div id="evenimente">
            <Grid
                container
                spacing={3}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                alignContent="center">
                <Grid item md={12}>
                    <Typography
                        color="textPrimary"
                        variant="h3"
                        component="h1"
                        style={{
                        marginTop: 30
                    }}>
                        Evenimente
                    </Typography>
                </Grid>
            </Grid>
            <Grid
                container
                spacing={10}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                alignContent="center">
                <Eveniment
                    titlu="Webinar cu Radu Popescu"
                    descriere="Sfaturi pentru o cariera in IT."
                    data="Vineri, 2 Noiembrie"
                    poza={poza1}
                    ora="02:33PM"
                    formular="#"/>
                <Eveniment
                    titlu="Webinar cu Radu Popescu"
                    descriere="Sfaturi pentru o cariera in IT."
                    data="02.11.2020"
                    poza={poza1}
                    formular="#"/>
                <Eveniment
                    titlu="Webinar cu Radu Popescu"
                    descriere="Sfaturi pentru o cariera in IT."
                    data="02.11.2020"
                    poza={poza1}
                    formular="#"/>
                <Eveniment
                    titlu="Webinar cu Radu Popescu"
                    descriere="Sfaturi pentru o cariera in IT."
                    data="02.11.2020"
                    poza={poza1}
                    formular="#"/>
                <Eveniment
                    titlu="Webinar cu Radu Popescu"
                    descriere="Sfaturi pentru o cariera in IT."
                    data="02.11.2020"
                    poza={poza1}
                    formular="#"/>


            </Grid>
        </div>
    );
}
export default Evenimente;