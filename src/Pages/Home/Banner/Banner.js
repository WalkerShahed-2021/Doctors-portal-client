import React from 'react';
import Grid from '@mui/material/Grid';
import chir from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Typography, Container } from '@mui/material';
import { Box } from '@mui/system';

const bannerBg = {
    background: `url(${bg})`,
    heigth: 450,
}

const vaticalCenter = {
    display: 'flex',
    alignItems: 'center',
    heigth: 400,
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid style={{ ...vaticalCenter, textAlign: 'left' }} item xs={12} md={6}>
                  <Box>
                  <Typography variant='h3'>
                        Your New Smile  <br />
                        Starts Here
                    </Typography>
                    <Typography variant='p' sx={{my:3}} sx={{ fontSize: 13, fontWeight: 300, color: 'gray' }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, dolore aut. Beatae, iste. Suscipit commodi, a veniam cum debitis aliquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, dolore aut. Beatae, iste. Suscipit commodi, a veniam cum debitis aliquam?
                    </Typography> <br /> <br />
                    <Button variant='contained' style={{ backgroundColor: '#52ffff' }}>GET APPOINTMENT</Button>
                  </Box>
                </Grid>
                <Grid xs={12} md={6} style={vaticalCenter}>
                    <img style={{ width: '350px', }} src={chir} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;