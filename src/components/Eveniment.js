import React from 'react';
import Grid from '@material-ui/core/grid';
import {Typography} from "@material-ui/core";
import Button from '@material-ui/core/Button';
const Eveniment = ({poza,titlu,descriere,data,ora="",formular}) => {
    return (
        
            <Grid item xs={12} md={6} lg={4}>
                <div className="eveniment">
                <img src={poza} alt={titlu} />
                <div className="data_si_ora">
                {ora &&  (<>
                    <Typography
                    color="textPrimary"
                    variant="h6"
                    component="h3"
                    gutterbottom
                    style={{display:"inline",fontWeight:"100"}}>
                    {ora}
                </Typography>
                <Typography
                color="textPrimary"
                variant="h6"
                component="h3"
                gutterbottom
                style={{display:"inline"}}>&nbsp;&middot;&nbsp;</Typography>

                </>
                )}      

               
                <Typography
                color="textPrimary"
                variant="h6"
                component="h3"
                gutterbottom
                style={{display:"inline",fontWeight:"100"}}>
                {data}
              </Typography>
                </div>
                
                <Typography
                    color="textPrimary"
                    variant="h5"
                    component="h3"
                    gutterbottom
                    style={{fontWeight:"bold",marginBottom:10}}>
                    
                    {titlu}
                </Typography>
                <Typography
                    color="textSecondary"
                    variant="body1"
                    component="p"
                    gutterbottom>
                    {descriere}
                </Typography>
                <a href={formular}>
                    <Button color="primary" 
                    style={{marginTop:15}}
                    variant="contained">inscrie-te</Button>
                </a>
                </div>
            </Grid>
        
    );
};


export default Eveniment;