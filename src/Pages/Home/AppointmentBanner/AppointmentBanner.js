import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Button, darken, Typography } from '@mui/material';


const appointmentBg = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode: "darken",
    marginTop: 175,
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} style={{marginTop: '100px'}}>
                <Grid item xs={12} md={6}>
                    <img
                        style={{ width: 400, marginTop: -110 }}
                        src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{display: 'flex', 
                textAlign: 'left',
                alignItems: 'center',
                justifyContent: 'flex-start'}}>
                    <Box>
                        <Typography sx={{mb: 5}} style={{ color: '#52ffff' }} variant="h6">
                            Appointment
                        </Typography>
                        <Typography sx={{mb: 5}} style={{ color: 'white' }} variant="h4">
                            Make an  Appointment Today
                        </Typography>
                        <Typography  sx={{mb: 3 }} style={{ color: 'white' }} variant="p">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat nihil ullam modi quod dolorem aperiam libero dolores, et, amet consectetur adipisicing elit. Placeat nihil ullam modi quod dolorem aperiam libero dolores, et,
                        </Typography> <br /> <br />
                        <Button sx={{mb: 5}} variant='contained' style={{ backgroundColor: '#52ffff' }}>Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;