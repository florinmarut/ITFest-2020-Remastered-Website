import React from 'react';
import Eveniment from './Eveniment';
import Grid from '@material-ui/core/grid';
import {AppBar, Typography, Container, } from "@material-ui/core";

// Conferinte
const iconical = "https://itfest.osut.ro/media/events/iconical_small.png"
const workshop1 = "https://itfest.osut.ro/media/events/default.JPG";
const hackthezone = "https://itfest.osut.ro/media/events/HackTheZone.jpg";
const drinkIT = "https://itfest.osut.ro/media/events/drinkIT.jpg";
const libertate_init = "https://itfest.osut.ro/media/events/libertate_init.jpg";
const in_sites_consulting = "https://itfest.osut.ro/media/events/InSites_consulting.jpg";
const vlogit = "https://itfest.osut.ro/media/events/vlogit.jpg";
const te_fac_programator = "https://itfest.osut.ro/media/events/te_fac_programator.jpg";
const ramon_nastase = "https://itfest.osut.ro/media/events/ramon_nastase.jpg";

// Concursuri
const hackathon = "https://itfest.osut.ro/media/events/hackathon.png";
const algoritmica = "https://itfest.osut.ro/media/events/algo.png";
const ctf = "https://itfest.osut.ro/media/events/ctf_small.png";
const rocket_league = "https://itfest.osut.ro/media/events/rocket_league_small.png";
const hearthstone = "https://itfest.osut.ro/media/events/HS_small.png";
const lol = "https://itfest.osut.ro/media/events/LOL_small.png";
const board_games = "https://itfest.osut.ro/media/events/boardsgames_small.png";
const csgo = "https://itfest.osut.ro/media/events/CSGO_small.png";



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
                    titlu="Sfaturi pentru o carieră de succes in IT"
                    descriere="Radu Popescu are peste 14 ani de experienta in IT, trecand prin mai multe joburi de la Game Testing sau Game Developer si pana la UI/UX Designer. Pe parcursul acestor ani a fost implicat in mai multe proiecte de tip Startup (precum BuyAndHelp) dar si in zona de freelance avand astfel o experienta completa asupra IT-ului din Romania. In ultimii 3 ani, acesta se ocupa si de comunitatea VlogDeIT care aduna in total peste 20.000 de tineri pasionati de IT si programare. In cadrul evenimentului nostru, Radu va vorbi despre cum poate orice tanar student sa isi creeze o cariera de succes. Pe parcursul prezentarii vor fi discutate mai multe tips & tricks care va vor putea ajuta sa gasiti un job mai usor sau sa creati un proiect de succes."
                    data="Luni, 2 Noiembrie"
                    poza={vlogit}
                    ora="19:00"
                    invitat="Radu Popescu"
                    formular="#"/>
                <Eveniment
                    titlu="Cum sa obții un job în IT în 12 luni fără nicio experiență anterioară"
                    descriere="Ramon Năstase, trainer IT, autor si fondatorul companiei TeachBit, îți va arăta care sunt cele top 5 cele mai cautate job-uri de IT din Romania și  cum poți să obții job-ul din IT ales urmând un proces concret de angajare în IT format din 3 pași."
                    data="Marți, 3 Noiembrie"
                    poza={ramon_nastase}
                    ora="18:00"
                    invitat="Ramon Năstase"
                    formular="#"/>
                <Eveniment
                    titlu="Despre bani in freelancing"
                    descriere=""
                    data="Miercuri, 4 Noiembrie"
                    poza={libertate_init}
                    ora="18:00"
                    invitat="Cristian Dascălu"
                    formular="#"/>
                <Eveniment
                    titlu="DrinkIT"
                    descriere=""
                    data="Joi, 5 Noiembrie"
                    poza={drinkIT}
                    ora=""
                    invitat="cei de la DrinkIT"
                    formular="#"/>
                <Eveniment
                    titlu="Ethical Hacking"
                    descriere="HackTheZone, unic în Europa, nu doar în România, este rezultatul muncii asidue a întregii echipe HTZ, iar scopul lui este unul imens: de a contribui la crearea unei comunități a celor pasionați de Ethical Hacking. Deci se adresează doar celor din industria IT ce pot face față cu succes simulării unui atac cibernetic, interesați să-și dovedească abilitățile de pen-testing, scripting, crypto și social engineering."
                    data="Joi, 12 Noiembrie"
                    poza={hackthezone}
                    ora="18:00"
                    invitat="cei de la HackTheZone"
                    formular="#"/>
                <Eveniment
                    titlu="Webinar despre Insites Consulting"
                    descriere=""
                    data="Luni, 9 Noiembrie"
                    poza={in_sites_consulting}
                    ora="18:00"
                    invitat="cei de la Insites Consulting"
                    formular="#"/>
                <Eveniment
                    titlu="Despre educație, vocație și modele în era digitală"
                    descriere="Academia Te Fac Programator este o inițiativă pornită de către câțiva tineri entuziaști în urmă cu un an și jumătate, cu o misiune ambițioasă: să formeze noi profesioniști în domeniul IT din România, cât și să educe societatea pentru provocările epocii digitale. Începută în urmă cu doar un an și jumătate, pragul academiei a fost trecut până în prezent de aproximativ 300 de persoane, iar cei mai buni studenți și-au găsit de lucru în domeniu. Programul de formare al academiei are o durată de un an, și presupune formarea în programare de la zero. Mai multe detalii despre proiect: https://stirileprotv.ro/stiri/ilikeit/ilikeit-cursuri-care-te-fac-programator-in-doar-1-an-costul-acoperit-din-primul-salariu.html"
                    data="Marți, 10 Noiembrie"
                    poza={te_fac_programator}
                    ora="19:00"
                    invitat="cei de la Te Fac Programator"
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
                    descriere="Hackathonul organizat de noi este un concurs de programare cu o durată de 12 de ore pe o temă stabilită de echipa ITFest Timișoara. Participanții formează echipe și concurează, urmând a fi premiat cel mai inovativ produs și creatorii ei."
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
                    descriere="Acest concurs constă în exploatarea unui site, pentru a găsi vulnerabilități în front/back end-ul acestuia, cât și în baza sa de date. Scopul jocului este de a găsi un hash, mai exact un șir de caractere codate numit ‘flag’."
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
                    descriere="Competiția de Rocket League se va desfăşura în totalitate online, prin intermediul platformelor Epic Games sau Steam. Echipa va fi alcătuită din 3 membri, o rezervă (opţional) și un antrenor (opțional), dintre care unul va fi ales căpitan de echipă."
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
                    descriere="Competiția de League of Legends se va desfăşura prin intermediul platformei Faceit în regim online. Echipe de câte cinci jucători și două rezerve (opțional) ce vor concura pentru câteva premii fascinante oferite de echipa ITFest Timișoara!"
                    data="Sâmbătă, 7 Noiembrie"
                    poza={lol}
                    formular="#"/>
                    <Eveniment
                    titlu="Board Games"
                    descriere="O serie de jocuri de societate care îți oferă oportunitatea de a cunoaște oameni noi și de a te relaxa distra în regim online. Printre jocurile incluse se enumeră: Among Us, Uno, Mafia Online și altele."
                    data="Sâmbătă, 7 Noiembrie"
                    poza={board_games}
                    formular="#"/>
                    <Eveniment
                    titlu="CS:GO"
                    descriere="Competiția de CSGO din cadrul proiectului ITFest 2020 se organizează în regim online prin intermediul platformei Faceit. Echipa va fi alcătuită din 5 membri, 2 rezerve (opţional) și un antrenor (opțional), dintre care unul va fi ales căpitan de echipă."
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
                    descriere="Convenția iCONical este printre cele mai recente secțiuni ale proiectului. Evenimentul de tip Comic Con are ca atracție principală un concurs de cosplay, ce adună pasionați de personaje din cărți, seriale, filme, jocuri sau alte creații ficționale. "
                    data="Duminică, 15 Noiembrie"
                    poza={iconical}
                    formular="#"/>

                </Grid>
        </div>
    );
}
export default Evenimente;