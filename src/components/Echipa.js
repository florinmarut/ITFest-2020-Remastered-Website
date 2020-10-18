import React from 'react';
import MembruEchipa from './MembruEchipa';
import Grid from '@material-ui/core/grid';
import {AppBar, Typography, Container} from "@material-ui/core";

const adela = "https://firebasestorage.googleapis.com/v0/b/mytestproject-d6bc5.appspot.com/o/team%2Fadela.png?alt=media&token=4f5141ea-ddb6-4a52-be11-2a2fcd59d26a";
const breha = "https://firebasestorage.googleapis.com/v0/b/mytestproject-d6bc5.appspot.com/o/team%2Fbreha.png?alt=media&token=378467de-4513-4b6a-a431-f8fb60341f08";
const delia = "https://firebasestorage.googleapis.com/v0/b/mytestproject-d6bc5.appspot.com/o/team%2Fdelia.png?alt=media&token=4e7b0cbf-25ae-43aa-b183-8b66f18cdb06";
const gabe = "https://firebasestorage.googleapis.com/v0/b/mytestproject-d6bc5.appspot.com/o/team%2Fgabe.png?alt=media&token=f0d4ca2f-737b-42fd-ae83-669da3d114c8";
const stefan = "https://firebasestorage.googleapis.com/v0/b/mytestproject-d6bc5.appspot.com/o/team%2Fstefan.png?alt=media&token=4de6bb3c-5f11-4b1b-9b30-5b138695f4b0";
const voda = "https://firebasestorage.googleapis.com/v0/b/mytestproject-d6bc5.appspot.com/o/team%2Fvoda.png?alt=media&token=77bf74bc-10c1-4a1c-92bb-b73b464d5231"
const sergiu = "https://firebasestorage.googleapis.com/v0/b/mytestproject-d6bc5.appspot.com/o/sergiu.jpg?alt=media&token=a46909cf-fe80-4460-b6e2-dc2736bbb2ca";
const paul = "https://firebasestorage.googleapis.com/v0/b/mytestproject-d6bc5.appspot.com/o/paul.jpg?alt=media&token=0f73ccec-dbe2-4432-a7b3-d17dbf358b2a";
const neli = "https://firebasestorage.googleapis.com/v0/b/mytestproject-d6bc5.appspot.com/o/neli.jpg?alt=media&token=d12c5a32-e499-4a45-9829-9a50e50905d5";
const teo = "https://firebasestorage.googleapis.com/v0/b/mytestproject-d6bc5.appspot.com/o/team%2Fteo.png?alt=media&token=6da5a071-91af-49d4-ad2a-430a3abc9cfd";

const Echipa = () => {
    return (
        <div id="evenimente">
            <Grid
                container
                spacing={12}
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
                        marginTop: 30,
                        marginBottom:30
                    }}>
                        Echipa
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
                <MembruEchipa echipa
                    titlu="Darian-Florian Vodă"
                    descriere="Coordonator General"
                    mail="darian.voda00@e-uvt.ro"
                    poza={voda}
                    telefon="43883929"
                    />
              
                <MembruEchipa echipa
                    titlu="Gabriela Mariuțac"
                    descriere="Responsabil Fundraising"
                    mail="gabriela.mariutac01@e-uvt.ro"
                    poza={gabe}
                    />
                <MembruEchipa echipa
                    titlu="Nelea Angheleanu"
                    descriere="Responsabil Public Relations"
                    mail="nelea.angheleanu00@e-uvt.ro"
                    poza={neli}
                    />
                <MembruEchipa echipa
                    titlu="Sergiu Răchițeanu"
                    descriere="Responsabil Concursuri"
                    mail="sergiu.rachiteanu01@e-uvt.ro"
                    poza={sergiu}
                    />
                <MembruEchipa echipa
                    titlu="Ștefan Alex Jieanu"
                    descriere="Responsabil IT"
                    mail="stefan.jieanu00@e-uvt.ro"
                    poza={stefan}
                    />
                <MembruEchipa echipa
                    titlu="Mihaela-Teodora Dița"
                    descriere="Responsabil Imagine"
                    mail="mihaela.dita98@e-uvt.ro"
                    poza={teo}
                    />
                <MembruEchipa echipa
                    titlu="Adela Diana Dînșorean"
                    descriere="Responsabil Task Management"
                    mail="adela.dinsorean00@e-uvt.ro"
                    poza={adela}
                    />
                <MembruEchipa echipa
                    titlu="Delia Andreea Didița"
                    descriere="Responsabil Conferințe și Workshopuri"
                    mail="delia.didita00@e-uvt.ro"
                    poza={delia}
                    />
                <MembruEchipa echipa
                    titlu="Paul Borbiro"
                    descriere="Responsabil LAN Party"
                    mail="paul.borbiro99@e-uvt.ro"
                    poza={paul}
                    />
                <MembruEchipa echipa
                    titlu="Adrian-Alexandru Breha"
                    descriere="Președinte OSUT"
                    mail="adrian@osut.ro"
                    poza={breha}
                    telefon="9933838"
                    />

            </Grid>
        </div>
    );
}
export default Echipa;