import React from 'react';
import Grid from '@material-ui/core/grid';
import {Typography} from "@material-ui/core";
import Button from '@material-ui/core/Button';
const Eveniment = ({poza,titlu,descriere,data,ora="",invitat,premii,deadline,locul1,locul2,locul3,regulament,formular}) => {
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

                {invitat && (<>
                    <Typography
                    color="textPrimary"
                    variant="body1"
                    component="h3"
                    gutterbottom
                    style={{marginBottom:10}}>
                    Cu {invitat}
                </Typography>
                </>)}


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
            
                <div className="deadline">
                    {deadline && (<>
                        <Typography
                        color="textPrimary"
                        variant="body2"
                        component="h3"
                        gutterBottom
                        style={{display: "inline",fontWeight:"100"}}
                        >
                            Deadline înscriere: {deadline}
                        </Typography>
                    </>)}
                </div>

                <Typography
                    color="textSecondary"
                    variant="body1"
                    component="p"
                    gutterbottom
                    style={{marginTop:"10px", bottom: 10}}>
                    {descriere}
                </Typography>
                        <b></b>

                <div className="castigatori">
                {locul1 && (<>
                <Typography
                    color="textSecondary"
                    variant="body1"
                    component="h3"
                    gutterbottom
                    style={{marginTop:"10px", bottom: 10, color: "#037a96"}}>
                    Câștigătorii:
                    </Typography>
                        <b></b>

                    <Typography
                        color="textPrimary"
                        variant="body2"
                        component="h3"
                        style={{display: "inline",fontWeight:"100", color: "#037a96"}}
                        >
                            Locul 1: {locul1}
                    </Typography>
                    <br></br>
                    <Typography
                        color="textPrimary"
                        variant="body2"
                        component="h3"
                        style={{display: "inline",fontWeight:"100", color: "#037a96"}}
                        >
                            Locul 2: {locul2}
                    </Typography>
                    <br></br>
                    <Typography
                        color="textPrimary"
                        variant="body2"
                        component="h3"
                        style={{display: "inline",fontWeight:"100", color: "#037a96"}}
                        >
                            Locul 3: {locul3}
                    </Typography>
                </>)}
                </div>


                <div className="reguli">
                    {regulament && (<>
                        <a href={regulament} target="_blank"
                        style={{textDecoration: "none", bottom: 0}}>
                        <Typography
                        color="textPrimary"
                        variant="body2"
                        component="h3"
                        style={{display: "inline",fontWeight:"100", color: "#037a96"}}
                        >
                            Vezi regulamentul.
                        </Typography>
                        </a>
                    </>)}
                </div>

                <div className="premii">
                    {premii && (<>
                        <a href={premii} target="_blank"
                        style={{textDecoration: "none", bottom: 0}}>
                        <Typography
                        color="textPrimary"
                        variant="body2"
                        component="h3"
                        style={{display: "inline",fontWeight:"100", color: "#037a96"}}
                        >
                            Premii
                        </Typography>
                        </a>
                    </>)}
                </div>

                <a href={formular} target="_blank"
                style={{bottom: 0}}>
                    <Button color="primary" 
                    style={{marginTop:15}}
                    variant="contained">înscrie-te</Button>
                </a>
                </div>
            </Grid>
        
    );
};


export default Eveniment;