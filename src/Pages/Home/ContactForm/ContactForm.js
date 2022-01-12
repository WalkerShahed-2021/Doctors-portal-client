import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import bg from '../../../images/bg.png';
import TextField from '@mui/material/TextField';



const Contact = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode: "darken",
    marginTop: 175,
}


const ContactForm = () => {
    return (
        <Box style={Contact} sx={{ flexGrow: 1 }}>
           <Container>
           <Grid container spacing={2}>
                <Grid item xs={12} md={12} sx={{
                    display: 'flex',
                    textAlign: 'left',
                    alignItems: 'center',
                    justifyContent: 'flex-start'
                }}>
                    <Box sx={{ mx: 'auto', bgcolor: 'primary.main', color: 'white', p: 1, m: 1, borderRadius: 1, textAlign: 'center', }}>
                            <Typography sx={{ mb: 5, fontWeight: 'bold' }} style={{ color: '#52ffff' }} variant="body">
                                Contact Us
                            </Typography>
                            <Typography sx={{ mb: 5, fontWeight: 'bold' }} style={{ color: 'white' }} variant="h4">
                                Always Connect with us
                            </Typography>
                            <form sx={{ textAlign: 'center'}}>
                                <TextField
                                    sx={{ width: '90%', m: 1, backgroundColor: 'white', }}
                                    id="outlined-size-small"
                                    size="small"
                                    defaultValue="Email Adress*"
                                />
                                <TextField
                                    sx={{ width: '90%',backgroundColor: 'white', m: 1, }}
                                    id="outlined-size-small"
                                    defaultValue="Subject*"
                                    size="small"
                                />
                                <TextField
                                    sx={{ width: '90%',backgroundColor: 'white', m: 1, }}
                                    id="outlined-size-big"
                                    defaultValue="Your Message*"
                                    size="big"
                                />
                                <Button sx={{mb: 5}} variant='contained' style={{ backgroundColor: '#52ffff', width: '30%'}}>Submit</Button>
                            </form>
                    </Box>
                </Grid>
            </Grid>
           </Container>
        </Box>
    );
};

export default ContactForm;