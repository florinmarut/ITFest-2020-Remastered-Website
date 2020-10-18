import React, { useState, useEffect, useRef } from 'react'
import NET from './vanta/src/vanta.net'
import './App.css';
import Header from './components/Header';
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes
} from '@material-ui/core/styles';
import Grid from '@material-ui/core/grid';
import {AppBar, Typography,Container,Paper} from "@material-ui/core";
import Button from '@material-ui/core/Button';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Evenimente from './components/Evenimente';
import Echipa from './components/Echipa';
import Footer from './components/Footer';
import Hidden from '@material-ui/core/Hidden';

let theme = createMuiTheme({
  overrides: {
    MuiCardContent: {
      root: {
        marginTop:0,
        "&:first-child": {
          paddingTop: 0,
       },
      },
    },
  },
  palette: {
    primary: {
      main: "#0C2948"
    },
  },
  typography: {
    fontFamily:"Roboto",
    h1:{
      fontFamily: 'Lora',
    },
    h2:{
      fontFamily: 'Lora',
    },
    h3:{
      fontFamily: 'Lora',
    },
    h4:{
      fontFamily: 'Lora',
    },
    h5:{
      fontFamily: 'Lora',
    },
   
    body1:{
      fontSize: "1.07rem",
      lineHeight: 1.60,
    },
   
  }

});
theme = responsiveFontSizes(theme);

 const App = (props) => {
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null);
  useEffect(() => {
      if (!vantaEffect) {
        setVantaEffect(NET({
          el: myRef.current
        }))
      }
      return () => {
        if (vantaEffect) vantaEffect.destroy()
      }
    
 
  }, [vantaEffect])


  const Spacer = ()=>(<div style={{margin:"45px auto"}}></div>);
  return (<>
         <ThemeProvider theme={theme} >

  <Paper>
  <Header />
  
  <div ref={myRef} id="wrapper" style={{overflow:"hidden"}}>
   <div class="wrapper">
  <h1 class="glitch">ITFEST</h1>
</div>

  </div>
 
  <div id="continut">
  <Container maxWidth="lg">
    <Grid
    container
    spacing={10}
    direction="row"
    justify="space-between"
    alignItems="flex-start"
    alignContent="center">
      <Grid item xs={12} md={8}>
      <Typography
      color="textPrimary"
      variant="h3"
      component="h1"
      gutterbottom
      style={{marginTop:30,marginBottom:15}}
      id="despre"
      >
        Despre ITFest
      </Typography>
      <Typography
      color="textSecondary"
      variant="body1"
      component="p">
        ITFest este un proiect dedicat tinerilor pasionați de IT. Proiectul își propune, în primul rând, crearea unui spațiu eficient de învățare și transfer de cunoștințe printr-o serie de activități ce includ workshopuri și competiții dedicate tinerilor pasionați de IT. ITFest propune, de asemenea, și evenimente orientate către socializare: LAN Party-uri pentru gameri, precum și concursul iCONical pentru iubitorii de cosplay.
        <br /><br />
        <Button color="primary" variant="contained">înscrie-te <ArrowRightAltIcon /></Button>
      </Typography>
      </Grid>
      <Grid item md={4} xs={false}></Grid>
      </Grid>
   <Spacer />
      <Evenimente />
      <Spacer />
      <Echipa />
      <Spacer />
      <Grid
        container
        spacing={12}
        direction="row"
        justify="center"
        alignItems="flex-start"
        alignContent="center">
        <Grid item xs={12}>
          <Typography
              color="textPrimary"
              variant="h3"
              component="h1"
              id="contact"
              style={{
              marginTop: 30,
              marginBottom:30,
              textAlign:"center"
          }}>
              Parteneri 
          </Typography>
          </Grid>
            <Grid item xs={6} md={2}>
              <img src="http://itfest.osut.ro/media/Parteneri/anosr_small.png" style={{height:"90px",margin:"auto",display:"block"}} alt="uvt" />
            </Grid>
            <Grid item xs={6} md={2}>
              <img src="http://itfest.osut.ro/media/Parteneri/loolish-85x85-blue.png" style={{height:"90px",margin:"auto",display:"block"}} alt="uvt" />
            </Grid>
            <Grid item xs={6} md={2}>
              <img src="http://itfest.osut.ro/media/Parteneri/my_pc_small.png" style={{height:"90px",margin:"auto",display:"block"}} alt="uvt" />
            </Grid>
            <Grid item xs={6} md={2}>
              <img src="http://itfest.osut.ro/media/Parteneri/uvt_mic.png" style={{height:"90px",margin:"auto",display:"block"}} alt="uvt" />
            </Grid>
          </Grid>
          <Grid>
          <Grid item xs={12} style={{marginTop: 30}}>
              <img src="http://itfest.osut.ro/media/Parteneri/cjt_mic.png" style={{height:"90px",margin:"auto",display:"block"}} alt="uvt" />
            </Grid>
          </Grid>
          </Container>
          <Footer />
    
  </div>
  </Paper>
  </ThemeProvider>
  </>
  );
}
export default App;