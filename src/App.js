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
      style={{marginBottom:15,paddingTop:60}}
      id="despre"
      >
        Despre ITFest Timișoara
      </Typography>
      <Typography
      color="textSecondary"
      variant="body1"
      component="p">
        ITFest Timișoara este unul dintre proiectele de succes ale Organizației 
        Studenților din Universitatea de Vest din Timișoara (OSUT), adresându-se în 
        special pasionaților de tehnologii din IT și jocuri în rețea. 
        <br /><br />
        {/* <Button color="primary" variant="contained">înscrie-te <ArrowRightAltIcon /></Button> */}
      </Typography>
      <Typography
      color="textSecondary"
      variant="body1"
      component="p">
        Anul acesta cea de-a XV-a ediţie se desfășoară în regim online și offline în perioada 2 - 15 noiembrie. 
        Echipa ITFest pregătește atât conferințe și workshopuri pe subiectele de tendință ale comunității IT, 
        cât și concursuri și LAN Party-uri cu premii pe măsură. Mai mult decât atât, se organizează și un concurs 
        de cosplay pentru fanii producțiilor animate. 
        <br /><br />
        {/* <Button color="primary" variant="contained">înscrie-te <ArrowRightAltIcon /></Button> */}
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
              id="parteneri"
              style={{
              marginTop: 15,
              marginBottom:30,
              paddingTop: 60,
              textAlign:"center"
          }}>
              Parteneri 
          </Typography>
        </Grid>


            <Grid item xs={6} md={2} >
            <a href="https://www.anosr.ro/" style={{marginBottom: "20px"}}>
              <img src="https://itfest.osut.ro/media/Parteneri/Black_ANOSR.png" style={{height:"80px",margin:"auto",display:"block",}} alt="anosr" />
            </a>
            </Grid>
            <Grid item xs={6} md={2} style={{marginBottom: "20px"}}>
            <a href="https://loolish.ro/">
              <img src="https://itfest.osut.ro/media/Parteneri/loolish-85x85-blue.png" style={{height:"80px",margin:"auto",display:"block"}} alt="loolish" />
            </a>
            </Grid>
            <Grid item xs={6} md={2}>
              <a href="https://mypctm.ro/" style={{marginBottom: "20px"}}>
                <img src="https://itfest.osut.ro/media/Parteneri/logo-mypctm.png" style={{height:"80px",margin:"auto",display:"block"}} alt="mypctm" />
              </a>
            </Grid>
            <Grid item xs={6} md={2} style={{marginBottom: "20px"}}>
              <a href="https://www.uvt.ro/ro/">
              <img src="https://itfest.osut.ro/media/Parteneri/Black_uvt.png" style={{height:"80px",margin:"auto",display:"block"}} alt="uvt" />
              </a>
            </Grid>
            <Grid item xs={6} md={2} className="parteneri" style={{marginBottom: "20px"}}>
              <a href="http://www.cjtimis.ro/">
                <img src="https://itfest.osut.ro/media/Parteneri/Black_CJT.png" style={{height:"80px",margin:"auto",display:"block"}} alt="CJTimiș" />
              </a>
            </Grid>
            <Grid item xs={6} md={2} className="parteneri" style={{marginBottom: "20px"}}>
              <a href="https://www.hackthezone.com/">
                <img src="https://itfest.osut.ro/media/Parteneri/logo-htz-NOU-2020.png" style={{height:"80px",margin:"auto",display:"block"}} alt="CJTimiș" />
              </a>
            </Grid>
        </Grid>

        
        <Grid
        container
        spacing={12}
        direction="row"
        justify="center"
        alignItems="flex-start"
        alignContent="center">
          <Grid item xs={6} md={2}>
              <img src="https://itfest.osut.ro/media/Parteneri/drinkit.jpg" style={{height:"80px",margin:"auto",display:"block"}} alt="mypctm" />
          </Grid>
          <Grid item xs={6} md={2} style={{marginBottom: "20px"}}>
            <img src="https://itfest.osut.ro/media/Parteneri/libertateinit.png" style={{height:"80px",margin:"auto",display:"block"}} alt="uvt" />
          </Grid>
          <Grid item xs={6} md={2} className="parteneri" style={{marginBottom: "20px"}}>
              <img src="https://itfest.osut.ro/media/Parteneri/insites consulting.jpg" style={{height:"80px",margin:"auto",display:"block"}} alt="CJTimiș" />
          </Grid>
          <Grid item xs={6} md={2} className="parteneri" style={{marginBottom: "20px"}}>
              <img src="https://itfest.osut.ro/media/Parteneri/TFP-logo.jpg" style={{height:"80px",margin:"auto",display:"block"}} alt="CJTimiș" />
          </Grid>
        </Grid>


          <Grid>
            
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