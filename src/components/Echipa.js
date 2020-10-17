import React from 'react';
import MembruEchipa from './MembruEchipa';
import Grid from '@material-ui/core/grid';
import {AppBar, Typography, Container} from "@material-ui/core";

const poza1 = "https://firebasestorage.googleapis.com/v0/b/mytestproject-d6bc5.appspot.com/o/neli.jpg?alt=media&token=d12c5a32-e499-4a45-9829-9a50e50905d5";

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
                    titlu="Nume Prenume"
                    descriere="Responsabil cu responsabilitati"
                    mail="adf@ghj.com"
                    poza={poza1}
                    />
              
              <MembruEchipa echipa
                    titlu="Nume Prenume"
                    descriere="Responsabil cu responsabilitati"
                    mail="adf@ghj.com"
                    poza={poza1}
                    />
                     <MembruEchipa echipa
                    titlu="Nume Prenume"
                    descriere="Responsabil cu responsabilitati"
                    mail="adf@ghj.com"
                    poza={poza1}
                    />
                     <MembruEchipa echipa
                    titlu="Nume Prenume"
                    descriere="Responsabil cu responsabilitati"
                    mail="adf@ghj.com"
                    poza={poza1}
                    />
                     <MembruEchipa echipa
                    titlu="Nume Prenume"
                    descriere="Responsabil cu responsabilitati"
                    mail="adf@ghj.com"
                    poza={poza1}
                    />
                     <MembruEchipa echipa
                    titlu="Nume Prenume"
                    descriere="Responsabil cu responsabilitati"
                    mail="adf@ghj.com"
                    poza={poza1}
                    />
                     <MembruEchipa echipa
                    titlu="Nume Prenume"
                    descriere="Responsabil cu responsabilitati"
                    mail="adf@ghj.com"
                    poza={poza1}
                    />
                     <MembruEchipa echipa
                    titlu="Nume Prenume"
                    descriere="Responsabil cu responsabilitati"
                    mail="adf@ghj.com"
                    poza={poza1}
                    />
                     <MembruEchipa echipa
                    titlu="Nume Prenume"
                    descriere="Responsabil cu responsabilitati"
                    mail="adf@ghj.com"
                    poza={poza1}
                    />
                     <MembruEchipa echipa
                    titlu="Nume Prenume"
                    descriere="Responsabil cu responsabilitati"
                    mail="adf@ghj.com"
                    poza={poza1}
                    />

            </Grid>
        </div>
    );
}
export default Echipa;