import React, { useState, useEffect }  from 'react';
import { AppBar, Toolbar, Typography,Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import MenuIcon from '@material-ui/icons/Menu';
import Tooltip from '@material-ui/core/Tooltip';
// import gsap from 'gsap';

import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Grid from '@material-ui/core/grid';
import Hidden from '@material-ui/core/Hidden';
import Container from "@material-ui/core/Container";
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Backdrop from '@material-ui/core/Backdrop';
import {Link } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { red } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  backdrop: {
    color: '#fff',
    backdropFilter:"blur(10px)"
  },
  menuButton: {
   // marginRight: "-7px",
  },
  title: {
    flexGrow: 1,
    fontWeight:"bold"
  },
  link:{
    textDecoration:"none",
    //marginRight:"10px"
  },
  inputPanica:{
    marginBottom:"20px"
  }
}));

const Header = ({mode,changeMode}) => {
  const [panica, setPanica] = useState(false);
  
  const Middot = () => (<div style={{display:"inline",margin:"auto 5px",fontSize:"30px"}}>&middot;</div>)
  const handleClickOpen = () => {
    setPanica(true);
  };

  const handleClose = () => {
    setPanica(false);
  };

  const [cautare, setCautare] = useState(false);
  const [proiecte, setProiecte] = useState(false);

  const classes = useStyles();
  const [dark,switchDark] = useState(mode);
  const switchStyle = () => {
    switchDark(!dark);
    changeMode(!dark);  

  }
  const inchide = ()=>setCautare(false);

  // useEffect(() => {
  //   if (panica) {
  //   }
  //   let timeline = gsap.timeline({duration: 0.25, stagger: 2});
  //   timeline.from(".link_meniu a", {left: 10})
  // }, [panica])

 return (<div id="main_nav">

  <AppBar position="sticky" style={{position:"fixed",top:0,left:0,zIndex:19191919,borderBottom:"1px solid rgba(125,125,165,.1)",boxShadow:"none",background:'rgba(255,255,255,.8)',backdropFilter:'blur(14px)'}}>
    
      
  <Container maxWidth="lg">

    <Toolbar 
      disableGutters={true}
      variant="regular"
    >
   
      <Typography variant="h6" className={classes.title} color="primary">          <Tooltip title={"Prima pagina"} placement="bottom">

      <Link to="/" style={{textDecoration:"none"}}> 

ITFEST      

      </Link></Tooltip>
      </Typography>
      
      <Hidden smDown>
     

      <Link activeClassName="selected" to="/blog" className={classes.link}> 
        <Button color="default" style={{marginLeft: 10, marginRight: 10}}>Despre</Button>
      </Link>
      <Link activeClassName="selected" to="/despre-osut" className={classes.link}> 
        <Button color="default" style={{marginLeft: 10, marginRight: 10}}>Evenimente</Button>
      </Link>
      <Link activeClassName="selected" to="/blog" className={classes.link}> 
        <Button color="default" style={{marginLeft: 10, marginRight: 10}}>Echipa</Button>
      </Link>
     
      <Link activeClassName="selected" to="/informatii-studenti" className={classes.link}> 
        <Button color="default" style={{marginLeft: 10, marginRight: 10}}>Contact</Button>
      </Link>
     

      
      

     
      <Tooltip title={"Contacteaza-ne rapid"} placement="bottom">

        <Button style={{marginLeft:20}} variant="contained" color="primary">inscrie-te</Button>
</Tooltip>
      </Hidden>

      <Hidden mdUp>
     

      <IconButton edge="end" className={classes.menuButton} color="default" aria-label="menu">
        <MenuIcon fontSize="large" onClick={()=>setPanica(!panica)} />
      </IconButton>
      </Hidden>
    </Toolbar>
    </Container>
  </AppBar>
       
  {panica && (
<>
<ul id="meniu">
  <li className="link_meniu"><a href="#despre" onClick={handleClose}>DESPRE</a></li>
  <li className="link_meniu"><a href="#evenimente" onClick={handleClose}>EVENIMENTE</a></li>
  <li className="link_meniu"><a href="#echipa" onClick={handleClose}>ECHIPA</a></li>
  <li className="link_meniu"><a href="#parteneri" onClick={handleClose}>PARTENERI</a></li>
  <li className="link_meniu"><a href="#contact" onClick={handleClose}>CONTACT</a></li>
</ul>
</>

  )}
   
     
  </div>);
  

};

export default Header;