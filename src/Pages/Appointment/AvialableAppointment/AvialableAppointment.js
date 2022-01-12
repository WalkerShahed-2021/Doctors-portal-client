import { Container, Grid, Typography, Alert } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';


const bookings = [
    {
        id: 1,
        name: 'teeth orthodoniyice',
        time: '07.00 PM - 08.00 PM',
        space: 10,
    },
    {
        id: 2,
        name: 'Cosmetice Dentistry',
        time: '07.00 PM - 08.00 PM',
        space: 10,
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '07.00 PM - 08.00 PM',
        space: 10,
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '07.00 PM - 08.00 PM',
        space: 10,
    },
    {
        id: 5,
        name: 'teeth orthodoniyice',
        time: '07.00 PM - 08.00 PM',
        space: 10,
    },
    {
        id: 6,
        name: 'teeth orthodoniyice',
        time: '07.00 PM - 08.00 PM',
        space: 10,
    },
];

const AvialableAppointment = ({ date }) => {
    const [bookingSucess, setBookingSucess] = useState(false)
    return (
        <Container>
            <Typography variant="h4"
             sx={{color: 'info.main', mb: 2}}>Avialable Appointment on {date.toDateString()}
            </Typography>
            {bookingSucess && <Alert severity="success">Appointment Book successfully!</Alert>}
            <Grid container spacing={2}>
            {
                bookings.map(booking => <Booking
                key={booking.id}
                booking={booking}
                date={date}
                setBookingSucess={setBookingSucess}
                >
                 </Booking>)  
            }
            </Grid>
        </Container>
    );
};

export default AvialableAppointment;