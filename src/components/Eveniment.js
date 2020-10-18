import React from 'react';
import Grid from '@material-ui/core/grid';
import {Typography} from "@material-ui/core";
import Button from '@material-ui/core/Button';
const Eveniment = ({poza,titlu,descriere,data,ora="",formular}) => {
    return (
        
            <Grid item xs={12} md={6} lg={4}>
                <div className="eveniment">
                <img src={poza} alt={titlu} />

                <Typography
                    color="textPrimary"
                    variant="h5"
                    component="h3"
                    gutterbottom
                    style={{fontWeight:"bold",marginBottom:0}}>
                    {titlu}
                </Typography>

                <div className="data_si_ora">
                <Typography
                color="textPrimary"
                variant="body2"
                component="h3"
                gutterbottom
                style={{display:"inline",fontWeight:"100"}}>
                {data}
                </Typography>

              {ora &&  (<>
                    <Typography
                    color="textPrimary"
                    variant="body2"
                    component="h3"
                    gutterbottom
                    style={{display:"inline",fontWeight:"100"}}>
                    &nbsp;&middot;&nbsp;{ora}
                </Typography>
                </>
                )}
                </div>
            
                <Typography
                    color="textSecondary"
                    variant="body1"
                    component="p"
                    gutterbottom
                    style={{marginTop:"10px"}}>
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