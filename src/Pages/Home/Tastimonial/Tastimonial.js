import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import people from '../../../images/people-1.png'
import people1 from '../../../images/people-2.png'
import people2 from '../../../images/people-3.png'
import { Container, Typography } from '@mui/material';
import Tstimonials from './Tstimonials/Tstimonials';

const Tastimonal = [
    {dis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio molestias reprehenderit cum repellendus enim? Quibusdam velit maxime voluptate ea earum numquam animi minima quae! Laboriosam temporibus, eveniet, fugiat rem iste autem aperiam, vero sed sunt natus nostrum voluptas recusandae earum possimus. Inventore, rem laudantium. Cumque dolorum iusto sunt voluptate blanditiis.', 
    img: people, 
    name: 'Winson herry', 
    country: 'Caliponiya'},
    {dis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio molestias reprehenderit cum repellendus enim? Quibusdam velit maxime voluptate ea earum numquam animi minima quae! Laboriosam temporibus, eveniet, fugiat rem iste autem aperiam, vero sed sunt natus nostrum voluptas recusandae earum possimus. Inventore, rem laudantium. Cumque dolorum iusto sunt voluptate blanditiis.', 
    img: people1, 
    name: 'Winson herry', 
    country: 'Caliponiya'},
    {dis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio molestias reprehenderit cum repellendus enim? Quibusdam velit maxime voluptate ea earum numquam animi minima quae! Laboriosam temporibus, eveniet, fugiat rem iste autem aperiam, vero sed sunt natus nostrum voluptas recusandae earum possimus. Inventore, rem laudantium. Cumque dolorum iusto sunt voluptate blanditiis.', 
    img: people2, 
    name: 'Winson herry', 
    country: 'Caliponiya'},
    
]


const Tastimonial = () => {
    return (
          <Box sx={{ flexGrow: 1 }}>
              <Container>
                 <Typography variant='h5' sx={{fontWeight: 'bold', color: 'success.main'}}>
                         Tastimonial
                 </Typography>
                 <Typography variant='h3'  columns={{ xs: 4, sm: 8, md: 12 }} sx={{color: 'black'}}>
                         What's Our Patients <br />
                         Says
                 </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {Tastimonal.map((Tastimonal, index) => (
                        <Grid item xs={4} sm={4} md={4} key={index}>
                            <Tstimonials
                             Tastimonal={Tastimonal}
                            ></Tstimonials>
                        </Grid>
                    ))}
                </Grid>
              </Container>
            </Box>
       
    );
};

export default Tastimonial;