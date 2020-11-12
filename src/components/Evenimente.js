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
const daniel_cristea = "https://itfest.osut.ro/media/events/daniel_cristea.png";
const amber = "https://itfest.osut.ro/media/events/amber.jpg";

// Concursuri
const hackathon = "https://itfest.osut.ro/media/events/hackathon.png";
const algoritmica = "https://itfest.osut.ro/media/events/algo.png";
const ctf = "https://itfest.osut.ro/media/events/ctf_small.png";
const rocket_league = "https://itfest.osut.ro/media/events/rocket_league_small.png";
const hearthstone = "https://itfest.osut.ro/media/events/HS_small.png";
const lol = "https://itfest.osut.ro/media/events/LOL_small.png";
const board_games = "https://itfest.osut.ro/media/events/boardsgames_small.png";
const csgo = "https://itfest.osut.ro/media/events/CSGO_small.png";
const savnet = "https://itfest.osut.ro/media/events/savnet-eveniment.jpg";
// Castigatori
const lol_1 = "Izi Pizi Lemon Squeezee";
const lol_2 = "Tractoriștii";
const lol_3 = "MobaFire Builder";

const cs_1 = "RedFear eSports";
const cs_2 = "daupttm";
const cs_3 = "RedFear Academy";

const hs_1 = "WeMoloz";
const hs_2 = "Tili";
const hs_3 = "MoiseAlex";

const rl_1 = "Freestyle La Sol";
const rl_2 = "NXTG - Pheonix";
const rl_3 = "Inglourious";

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
                        Workshopuri și conferințe - Online
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
                    titlu="Sfaturi pentru o carieră de succes în IT"
                    descriere="Radu Popescu are peste 14 ani de experiență în IT, trecând prin mai multe joburi de la Game Testing sau Game Developer și până la UI/UX Designer. Pe parcursul acestor ani a fost implicat în mai multe proiecte de tip Startup (precum BuyAndHelp), dar și în zona de freelance, având, astfel, o experiență completă asupra IT-ului din România. În ultimii 3 ani, acesta s-a ocupat și de comunitatea VlogDeIT care a adunat în total peste 20.000 de tineri pasionați de IT și programare. "
                    data="Luni, 2 Noiembrie"
                    poza={vlogit}
                    ora="19:00"
                    deadline="Sâmbătă, 31 Octombrie"
                    invitat="Radu Popescu"
                    formular="http://www.123formbuilder.com/form-5678332/form"/>
                <Eveniment
                    titlu="Cum să obții un job în IT în 12 luni fără nicio experiență anterioară"
                    descriere="Ramon Năstase, trainer IT, autor si fondatorul companiei TeachBit, îți va arăta care sunt cele top 5 cele mai cautate joburi de IT din Romania și  cum poți să obții job-ul din IT ales urmând un proces concret de angajare în IT format din 3 pași."
                    data="Marți, 3 Noiembrie"
                    poza={ramon_nastase}
                    ora="18:00"
                    deadline="Duminică, 1 Noiembrie"
                    invitat="Ramon Năstase"
                    formular="http://www.123formbuilder.com/form-5687550/form"/>
                <Eveniment
                    titlu="Internet sub microscop. Cum construiesc prima mea rețea?"
                    descriere="Savnet dispune de o experiență de predare globală și de formatori recunoscuți la nivel internațional. Cursurile oferite de aceștia te pregătesc de cerințele companiilor și îți asigură prezența la interviuri de angajare, oportunități puse la dispoziție de partenerii Savnet. În cadrul workshopului, ei îți vor arăta cum se construiește o rețea la nivel practic."
                    data="Marți, 3 Noiembrie"
                    poza={savnet}
                    ora="19:30"
                    deadline="Duminică, 1 Noiembrie"
                    invitat="cei din echipa Savnet"
                    formular="http://www.123formbuilder.com/form-5696053/itfest-2020-workshop-savnet"/>
                <Eveniment
                    titlu="Despre bani în freelancing"
                    descriere="Contactat de Google și Facebook, olimpic la informatică, devenit vlogger, el a vrut să se întoarcă în România. Își dorește să se dezvolte în direcții diferite, dar și utile și să ajute cu orice putință țara din în care s-a născut. Nimeni altul decât Cristian Dascălu este cel care își va împărtăși cunoștințele sale despre freelancing, sperând să motiveze și alți tineri să opteze pentru asta în cariera lor."
                    data="Miercuri, 4 Noiembrie"
                    poza={libertate_init}
                    ora="18:00"
                    deadline="Luni, 2 Noiembrie"
                    invitat="Cristian Dascălu"
                    formular="http://www.123formbuilder.com/form-5678337/form"/>
                <Eveniment
                    titlu="Tips&Tricks CV și posibilități de carieră în domeniul IT"
                    descriere="La webinar te așteaptă doi programatori cu experiență de ani buni în IT, doi oameni trecuți prin câteva companii ce vor vorbi despre posibilitățile de carieră: Database, Embedded, Security ș.a.m.d. Vor povesti inclusiv despre experiența de creare de conținut pe canalul lor de Youtube. Cei doi speakeri au învățat totul de la zero de unii singuri și sunt gata să împărtășească, la o halbă, tot ce au învățat aceștia."
                    data="Joi, 5 Noiembrie"
                    poza={drinkIT}
                    ora="18:00"
                    deadline="Marți, 3 Noiembrie"
                    invitat="cei de la DrinkIT"
                    formular="http://www.123formbuilder.com/form-5687582/form"/>
                <Eveniment
                    titlu="Roadmap for your tech trip"
                    descriere="Insites Consulting este o agenție de marketing internațională care vine în ajutorul brandurilor pentru a le promova la nivel local. Echipa agenției este formată din marketeri pasionați, cercetători inovativi și entuziaști în ale marketingului. Pentru a-și îndeplini misiunea, ei folosesc cele mai recente tehnologii din domeniul IT și reușesc să-și facă treaba pe măsură."
                    data="Luni, 9 Noiembrie"
                    poza={in_sites_consulting}
                    ora="18:00"
                    deadline="Sâmbătă, 7 Noiembrie"
                    invitat="cei de la Insites Consulting"
                    formular="http://www.123formbuilder.com/form-5687601/form"/>
                <Eveniment
                    titlu="Cum să începi o carieră în Web Design"
                    descriere="Daniel Cristea este UI Designer cu o experiență de 8 ani în domeniu, în tot acest timp adunând suficiente cunoștințe pentru a le da mai departe la rândul său. El a luat parte la multiple proiecte pentru companii de renume mondial, printre care se numără și MrPuffs, C2 Marketing, Synetik și altele. În cadrul workshopului, Daniel va împărtăși noile tendințe în materie de web design și va prezenta în pași cât mai simpli procesul de creare a unui site web."
                    data="Luni, 9 Noiembrie"
                    poza={daniel_cristea}
                    ora="19:30"
                    deadline="Sâmbătă, 7 Noiembrie"
                    invitat="Daniel Cristea"
                    formular="http://www.123formbuilder.com/form-5678341/form"/>
                <Eveniment
                    titlu="Despre educație, vocație și modele în era digitală"
                    descriere="Academia Te Fac Programator este o inițiativă pornită de către câțiva tineri entuziaști în urmă cu un an și jumătate, cu o misiune ambițioasă: să formeze noi profesioniști în domeniul IT din România, cât și să educe societatea pentru provocările epocii digitale. Începută în urmă cu doar un an și jumătate, pragul academiei a fost trecut până în prezent de aproximativ 300 de persoane, iar cei mai buni studenți și-au găsit de lucru în domeniu. Programul de formare al academiei are o durată de un an, și presupune formarea în programare de la zero. "
                    data="Marți, 10 Noiembrie"
                    poza={te_fac_programator}
                    ora="19:00"
                    deadline="Duminică, 8 Noiembrie"
                    invitat="cei de la Te Fac Programator"
                    formular="http://www.123formbuilder.com/form-5687598/form"/>
                <Eveniment
                    titlu="Introducere în Game Development"
                    descriere="Amber este o agenție internațională bazată pe game development. Invitații - angajați în cadrul Amber - vor povesti despre industria de gaming și despre întregul proces de concepere a unui joc prin etape -  Production, Game Design și Arta. Urmează apoi o discuție amplă despre oportunitățile așteptate în domeniul ingineriei IT și zona de QA (Quality Assurance). Un alt aspect interesant pe care îl vor aborda se referă la cum te poți alătura industriei de gaming prin departamentul de Testare."
                    data="Miercuri, 11 Noiembrie"
                    poza={amber}
                    ora="18:00"
                    deadline="Luni, 9 Noiembrie"
                    invitat="cei de la Amber"
                    formular="http://www.123formbuilder.com/form-5687613/form"/>
                <Eveniment
                    titlu="Ethical Hacking"
                    descriere="HackTheZone, unic în Europa, nu doar în România, este rezultatul muncii asidue a întregii echipe HTZ, iar scopul lui este unul imens: de a contribui la crearea unei comunități a celor pasionați de Ethical Hacking. Deci se adresează doar celor din industria IT ce pot face față cu succes simulării unui atac cibernetic, interesați să-și dovedească abilitățile de pen-testing, scripting, crypto și social engineering."
                    data="Joi, 12 Noiembrie"
                    poza={hackthezone}
                    ora="18:00"
                    deadline="Marți, 10 Noiembrie"
                    invitat="cei de la HackTheZone"
                    formular="http://www.123formbuilder.com/form-5678344/form"/>
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
                        Concursuri - Online
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
                    deadline="Vineri, 13 Noiembrie"
                    ora="10:00"
                    formular="http://www.123formbuilder.com/form-5678357/form"/>
                <Eveniment
                    titlu="Concurs de algoritmică"
                    descriere="Acest concurs este o competiție desemnată studenților, dar și elevilor din liceu, ce își propune să testeze și să recompenseze agilitatea și inventivitatea de a aplica diferiți algoritmi în probleme de actualitate."
                    data="Vineri, 13 Noiembrie"
                    poza={algoritmica}
                    deadline="Joi, 12 Noiembrie"
                    ora="17:00"
                    formular="http://www.123formbuilder.com/form-5678360/form"/>
                <Eveniment
                    titlu="Capture the flag"
                    descriere="Acest concurs constă în exploatarea unui sistem informatic vulnerabil (program, website, rețea) în scopul obținerii unui „flag” (cod/fișier). Concursul va avea echipe de maxim 3 membri."
                    data="Duminică, 15 Noiembrie"
                    poza={ctf}
                    deadline="Sâmbătă, 14 Noiembrie"
                    ora="17:00"
                    formular="http://www.123formbuilder.com/form-5688080/form"/>

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
                        LAN Party - Online
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
                    deadline="Miercuri, 4 Noiembrie"
                    // regulament="https://drive.google.com/file/d/1TWpf05uIb5dhxsNxE0HyBGLipv2TyOB6/view?usp=sharing"
                    // formular="http://www.123formbuilder.com/form-5687524/itfest-2020-rocket-league"
                    locul1={rl_1}
                    locul2={rl_2}
                    locul3={rl_3}
                    />
                    <Eveniment
                    titlu="Hearthstone"
                    descriere="Competiția de Hearthstone din cadrul ediției curente va avea loc în regim online. Numărul de participanți este destul de mare, iar formatul concursului este de tip Conquest Bo3. Tipul meciurilor: Standard."
                    data="Vineri, 6 Noiembrie"
                    poza={hearthstone}
                    deadline="Miercuri, 4 Noiembrie"
                    // regulament="https://drive.google.com/file/d/1ZV1Ae3RjboNJJ_c0i4rZ_wzdWVNwwq-P/view?usp=sharing"
                    // formular="http://www.123formbuilder.com/form-5679895/form"
                    locul1={hs_1}
                    locul2={hs_2}
                    locul3={hs_3}
                    />
                    <Eveniment
                    titlu="League of Legends"
                    descriere="Competiția de League of Legends se va desfăşura prin intermediul platformei Faceit în regim online. Echipe de câte cinci jucători și două rezerve (opțional) ce vor concura pentru câteva premii fascinante oferite de echipa ITFest Timișoara!"
                    data="Sâmbătă, 7 Noiembrie"
                    poza={lol}
                    deadline="Joi, 5 Noiembrie"
                    // regulament="https://drive.google.com/file/d/1WJlSE7rwBVBXjCfrF-ilBKfE5VCd1UEu/view?usp=sharing"
                    // formular="http://www.123formbuilder.com/form-5678372/itfest-2020-league-of-legends"
                    locul1={lol_1}
                    locul2={lol_2}
                    locul3={lol_3}
                    />
                    <Eveniment
                    titlu="Board Games"
                    descriere="O serie de jocuri de societate care îți oferă oportunitatea de a cunoaște oameni noi și de a te relaxa, distra în regim online. Printre jocurile incluse se enumeră: Among Us, Uno, Mafia Online și altele."
                    data="Sâmbătă, 7 Noiembrie"
                    poza={board_games}
                    deadline="Joi, 5 Noiembrie"
                    formular="http://www.123formbuilder.com/form-5687186/itfest-2020-board-games"/>
                    <Eveniment
                    titlu="CS:GO"
                    descriere="Competiția de CS:GO din cadrul proiectului ITFest 2020 se organizează în regim online prin intermediul platformei Faceit. Echipa va fi alcătuită din 5 membri, 2 rezerve (opţional) și un antrenor (opțional), dintre care unul va fi ales căpitan de echipă."
                    data="Duminică, 8 Noiembrie"
                    poza={csgo}
                    deadline="Vineri, 6 Noiembrie"
                    // regulament="https://drive.google.com/file/d/1jNClUWl7hnDXfUVr3qM459KyQZgEeB-S/view?usp=sharing"
                    // formular="http://www.123formbuilder.com/form-5678365/form"
                    locul1={cs_1}
                    locul2={cs_2}
                    locul3={cs_3}
                    />
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
                        iCONical - Online
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
                    titlu="iCONical"
                    descriere="Convenția iCONical este printre cele mai recente secțiuni ale proiectului. Evenimentul de tip Comic Con are ca atracție principală un concurs de cosplay, ce adună pasionați de personaje din cărți, seriale, filme, jocuri sau alte creații ficționale. "
                    data="Duminică, 15 Noiembrie"
                    poza={iconical}
                    deadline="Marți, 10 Noiembrie"
                    formular="http://www.123formbuilder.com/form-5678380/form"/>

                </Grid>
        </div>
    );
}
export default Evenimente;