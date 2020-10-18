import React from 'react';
import MembruEchipa from './MembruEchipa';
import Grid from '@material-ui/core/grid';
import {AppBar, Typography, Container} from "@material-ui/core";

const adela = "http://itfest.osut.ro/media/team/adela.png";
const breha = "http://itfest.osut.ro/media/team/breha.png";
const delia = "http://itfest.osut.ro/media/team/delia.png";
const gabe = "http://itfest.osut.ro/media/team/gabe.png";
const stefan = "http://itfest.osut.ro/media/team/stefan.png";
const voda = "http://itfest.osut.ro/media/team/voda.png"
const sergiu = "http://itfest.osut.ro/media/team/sergiu.png";
const patricia = "http://itfest.osut.ro/media/team/patricia.png";
const paul = "https://firebasestorage.googleapis.com/v0/b/mytestproject-d6bc5.appspot.com/o/paul.jpg?alt=media&token=0f73ccec-dbe2-4432-a7b3-d17dbf358b2a";
const neli = "http://itfest.osut.ro/media/team/neli.png";
const teo = "https://firebasestorage.googleapis.com/v0/b/mytestproject-d6bc5.appspot.com/o/team%2Fteo.png?alt=media&token=6da5a071-91af-49d4-ad2a-430a3abc9cfd";

const Echipa = () => {
    return (
        <div id="echipa">
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
                        marginTop: 65,
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
                    telefon="0764-621-390"
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
                    titlu="Delia Andreea Didiță"
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
                    titlu="Patricia Văleanu"
                    descriere="Vicepreședinte Intern OSUT"
                    mail="patricia.valeanu@osut.ro"
                    poza={patricia}
                    />
                <MembruEchipa echipa
                    titlu="Adrian-Alexandru Breha"
                    descriere="Președinte OSUT"
                    mail="adrian@osut.ro"
                    poza={breha}
                    telefon="0748-322-663"
                    />

            </Grid>
        </div>
    );
}
export default Echipa;