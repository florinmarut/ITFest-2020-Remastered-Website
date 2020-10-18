import React from 'react';
import Eveniment from './Eveniment';
import Grid from '@material-ui/core/grid';
import {AppBar, Typography, Container, } from "@material-ui/core";

const workshop1 = "https://firebasestorage.googleapis.com/v0/b/mytestproject-d6bc5.appspot.com/o/workshop.JPG?alt=media&token=9a27be53-bf12-4bb4-b2c7-5f10b53d70b0";
const hackathon = "http://itfest.osut.ro/media/events/hackathon.png";
const algoritmica = "http://itfest.osut.ro/media/events/algo.png";
const ctf = "http://itfest.osut.ro/media/events/algo.png";
const rocket_league = "http://itfest.osut.ro/media/events/rocket_league_small.png";
const hearthstone = "http://itfest.osut.ro/media/events/HS_small.png";
const lol = "http://itfest.osut.ro/media/events/LOL_small.png";
const board_games = "http://itfest.osut.ro/media/events/boardsgames_small.png";
const csgo = "http://itfest.osut.ro/media/events/CSGO_small.png";
const iconical = "http://itfest.osut.ro/media/events/iconical_small.png"


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
                    poza={hackathon}
                    formular="#"/>
                <Eveniment
                    titlu="Concurs de algoritmică"
                    descriere="Acest concurs este o competiție desemnată elevilor din liceu, ce îșî propune să testeze și să recompenseze agilitatea și inventivitatea de a aplica diferiți algoritmi în probleme de actualitate."
                    data="Vineri, 13 Noiembrie"
                    poza={algoritmica}
                    formular="#"/>
                <Eveniment
                    titlu="Capture the flag"
                    descriere="Concursul constă în exploatarea unui anumit site pentru a găsi vulnerabilități atât în front/backend-ul acestuia, cât și în baza sa de date."
                    data="Duminică, 15 Noiembrie"
                    poza={ctf}
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
                    poza={rocket_league}
                    formular="#"/>
                    <Eveniment
                    titlu="Hearthstone"
                    descriere=""
                    data="Vineri, 6 Noiembrie"
                    poza={hearthstone}
                    formular="#"/>
                    <Eveniment
                    titlu="League of Legends"
                    descriere=""
                    data="Sâmbătă, 7 Noiembrie"
                    poza={lol}
                    formular="#"/>
                    <Eveniment
                    titlu="Board Games"
                    descriere=""
                    data="Sâmbătă, 7 Noiembrie"
                    poza={board_games}
                    formular="#"/>
                    <Eveniment
                    titlu="CS:GO"
                    descriere=""
                    data="Duminică, 8 Noiembrie"
                    poza={csgo}
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
                    descriere="Una dintre cele mai recente secțiuni ale proiectului este chiar convenția numită iCONical. Evenimentul de tip Comic Con este printre singurele de acest tip din România. Atracția principală a convenției este un concurs de cosplay. Tineri de toate vârstele se costumează în personajul preferat din cărți, seriale, filme, jocuri sau alte creații ficționale, urmând a fi jurizați de trei cunoscători în domeniu."
                    data="Duminică, 15 Noiembrie"
                    poza={iconical}
                    formular="#"/>

                </Grid>
        </div>
    );
}
export default Evenimente;