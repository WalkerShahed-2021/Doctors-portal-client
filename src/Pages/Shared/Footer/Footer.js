import React from 'react';
import Grid from '@mui/material/Grid';
import bg from '../../../images/footer-bg.png';
import { Container, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faAddressCard } from '@fortawesome/free-solid-svg-icons';


const bgs = {
    background: `url(${bg})`,
    marginTop: 100,
    
}


const element = <FontAwesomeIcon icon={faPhone} />


const Footer = () => {
    return (
        <Container>
            <Grid container style={bgs} spacing={2} columns={16}>
            <Grid item xs={3}>
                    <Typography>
                        Emergecy Dental Care
                    </Typography>
                    <Typography>
                        Check Up
                    </Typography>
                    <Typography>
                       Treatment of personal Diseases
                    </Typography>
                    <Typography>
                       Tooth Extraction
                    </Typography>
                    <Typography>
                    Check Up
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography>
                        Emergecy Dental Care
                    </Typography>
                    <Typography>
                        Check Up
                    </Typography>
                    <Typography>
                       Treatment of personal Diseases
                    </Typography>
                    <Typography>
                       Tooth Extraction
                    </Typography>
                    <Typography>
                    Check Up
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography>
                        Emergecy Dental Care
                    </Typography>
                    <Typography>
                        Check Up
                    </Typography>
                    <Typography>
                       Treatment of personal Diseases
                    </Typography>
                    <Typography>
                       Tooth Extraction
                    </Typography>
                    <Typography>
                    Check Up
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography>
                        New York - 1010 Hudson <br />
                        Yards
                    </Typography>
                  <Grid item xs={3}>
                     <Typography>
                       
                     </Typography>
                  </Grid>
                    <Typography>
                       Call now {element}<br />
                       <Button variant="contained">+0124544</Button>
                    </Typography>
                     
                </Grid> 
            </Grid>
              <Typography style={{marginTop: '10px', padding: '15px'}}>
                    @Copirigth 2020 All rigth Reserve
                </Typography>
        </Container>
    );
};

export default Footer;