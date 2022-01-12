import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import flurite from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';

 const services = [
        {
         name: 'Fluoride Treatment',
         description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus asperiores sunt quod perspiciatis animi quas harum consectetur molestias. Ea blanditiis ab laudantium aspernatur sint quas commodi dignissimos vero itaque ipsa!', 
         img: flurite
        },
        {
         name: 'cavity Filling',
         description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus asperiores sunt quod perspiciatis animi quas harum consectetur molestias. Ea blanditiis ab laudantium aspernatur sint quas commodi dignissimos vero itaque ipsa!', 
         img: cavity
        },
        {
         name: 'Treat whitening',
         description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus asperiores sunt quod perspiciatis animi quas harum consectetur molestias. Ea blanditiis ab laudantium aspernatur sint quas commodi dignissimos vero itaque ipsa!', 
         img: whitening
        },
];

const Services = () => {
   
    return (
        <Box sx={{ flexGrow: 1 }}>
           <Container>
           <Typography variant="h6" sx={{ color: 'success.main', m:2}} component="div">
                        Our Services
                    </Typography>
           <Typography sx={{ fontWeight: 500,  m:2}} variant="h4" component="div">
                         Services We Provide
                    </Typography>
             <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {services.map((service, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                        <Service
                        service={service.name}
                        service={service}
                        ></Service>
                    </Grid>
                ))}
              </Grid>
           </Container>
        </Box>
    );
};

export default Services;