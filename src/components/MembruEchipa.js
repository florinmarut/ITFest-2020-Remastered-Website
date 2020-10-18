import React from 'react';
import Grid from '@material-ui/core/grid';
import {Typography} from "@material-ui/core";
import Button from '@material-ui/core/Button';
const MembruEchipa = ({poza,titlu,descriere,mail,telefon}) => {
    return (
        
            <Grid item xs={12} md={4} lg={3}>
                <div className="om_echipa">

                <img src={poza} alt={titlu} />
                <Typography
                    color="textPrimary"
                    variant="h6"
                    component="h3"
                    gutterbottom
                    style={{textAlign:"center",marginTop:10}}
                    >
                    {titlu}
                </Typography>
               
                <Typography
                    color="textSecondary"
                    variant="body1"
                    component="p"
                    gutterbottom
                    style={{textAlign:"center",marginTop:10}}
                    >
                    {descriere}
                </Typography>
               
                <Typography
                    color="textSecondary"
                    variant="body2"
                    component="p"
                    gutterbottom
                    style={{textAlign:"center",marginTop:10}}
                    >
                    <a href={`mailto:${mail}`}  style={{color: "#037a96"}}>{mail}</a>
                    {
                        telefon && (<>&nbsp;&middot; {telefon}</>)
                    }
                    
                   
                </Typography>
               
                </div>
            </Grid>
        
    );
};


export default MembruEchipa;