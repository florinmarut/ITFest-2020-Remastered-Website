import React from 'react';
import Eveniment from './Eveniment';
import Grid from '@material-ui/core/grid';
import {AppBar, Typography, Container} from "@material-ui/core";

const workshop1 = "https://firebasestorage.googleapis.com/v0/b/mytestproject-d6bc5.appspot.com/o/workshop.JPG?alt=media&token=9a27be53-bf12-4bb4-b2c7-5f10b53d70b0";

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
                spacing={3}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                alignContent="center">
                <Grid item md={12}>
                    <Typography
                        color="textPrimary"
                        variant="h4"
                        component="h3"
                        style={{
                        marginTop: 30,
                        borderBottom: "1px solid rgba(120, 120, 120, 0.25)",
                        marginBottom: 18,
                        paddingBottom: 6
                    }}>
                        Workshopuri și conferințe
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
                    poza={workshop1}
                    ora="02:33PM"
                    formular="#"/>
                <Eveniment
                    titlu="Webinar Ramon Năstase"
                    descriere="Cum sa obții un job în IT în 12 luni fără nicio experiență anterioară."
                    data="02.11.2020"
                    poza={workshop1}
                    formular="#"/>
                <Eveniment
                    titlu="Webinar Cristian Dascalu"
                    descriere="Despre bani în freelancing."
                    data="02.11.2020"
                    poza={workshop1}
                    formular="#"/>
                <Eveniment
                    titlu="Webinar Te Fac Programator"
                    descriere=""
                    data="02.11.2020"
                    poza={workshop1}
                    formular="#"/>
                <Eveniment
                    titlu="Webinar Amber"
                    descriere=""
                    data="02.11.2020"
                    poza={workshop1}
                    formular="#"/>
            </Grid>

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
                        variant="h4"
                        component="h3"
                        style={{
                        marginTop: 30,
                        borderBottom: "1px solid rgba(120, 120, 120, 0.25)",
                        marginBottom: 18,
                        paddingBottom: 6
                    }}>
                        Concursuri
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
                    titlu="Hackathon"
                    descriere="Hackathonul organizat de noi este un concurs de programare cu o durată de 24 de ore pe o temă stabilită de sponsorul competiției. Participanții formează echipe și aplică toate cunoștințele dobândite anterior, urmând a fi premiat cel mai inovativ produs și creatorii ei."
                    data="Sâmbătă, 14 Noiembrie"
                    poza={workshop1}
                    formular="#"/>
                <Eveniment
                    titlu="Concurs de algoritmică"
                    descriere="Acest concurs este o competiție desemnată elevilor din liceu, ce îșî propune să testeze și să recompenseze agilitatea și inventivitatea de a aplica diferiți algoritmi în probleme de actualitate."
                    data="Vineri, 13 Noiembrie"
                    poza={workshop1}
                    formular="#"/>
                <Eveniment
                    titlu="Capture the flag"
                    descriere="Concursul constă în exploatarea unui anumit site pentru a găsi vulnerabilități atât în front/backend-ul acestuia, cât și în baza sa de date."
                    data="Duminică, 15 Noiembrie"
                    poza={workshop1}
                    formular="#"/>

            </Grid>

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
                        variant="h4"
                        component="h3"
                        style={{
                        marginTop: 30,
                        borderBottom: "1px solid rgba(120, 120, 120, 0.25)",
                        marginBottom: 18,
                        paddingBottom: 6
                    }}>
                        LAN Party
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
                    titlu="Rocket League"
                    descriere=""
                    data="Vineri, 6 Noiembrie"
                    poza={workshop1}
                    formular="#"/>
                    <Eveniment
                    titlu="Hearthstone"
                    descriere=""
                    data="Vineri, 6 Noiembrie"
                    poza={workshop1}
                    formular="#"/>
                    <Eveniment
                    titlu="League of Legends"
                    descriere=""
                    data="Sâmbătă, 7 Noiembrie"
                    poza={workshop1}
                    formular="#"/>
                    <Eveniment
                    titlu="Board Games"
                    descriere=""
                    data="Sâmbătă, 7 Noiembrie"
                    poza={workshop1}
                    formular="#"/>
                    <Eveniment
                    titlu="CS:GO"
                    descriere=""
                    data="Duminică, 8 Noiembrie"
                    poza={workshop1}
                    formular="#"/>

                </Grid>

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
                        variant="h4"
                        component="h3"
                        style={{
                        marginTop: 30,
                        borderBottom: "1px solid rgba(120, 120, 120, 0.25)",
                        marginBottom: 18,
                        paddingBottom: 6
                    }}>
                        iConical
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
                    titlu="iConical"
                    descriere=""
                    data="Duminică, 15 Noiembrie"
                    poza={workshop1}
                    formular="#"/>

                </Grid>
        </div>
    );
}
export default Evenimente;