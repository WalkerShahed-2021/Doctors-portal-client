import { Button, Grid } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date, setBookingSucess }) => {
    const { name, time, space, price } = booking;
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);
    return (
       <>
            <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{py: 5}} sx={{textAlign: 'center', p: 4}}>
                <Typography sx={{color: 'info.main', fontWeight: 600}} variant="h5" gutterBottom component="div">
                    {name}
                </Typography>
                <Typography variant="h6" gutterBottom component="div">
                    {time}
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                   {space} SPACES AVIALABLE
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  Price: ${price} 
                </Typography>
                <Button onClick={handleBookingOpen} variant="contained">BOOK APPOINMENT</Button>
            </Paper>
         </Grid>
          <BookingModal
            handleBookingClose={handleBookingClose}
            openBooking={openBooking}
            booking={booking}
            date={date}
            price={price}
            setBookingSucess={setBookingSucess}
          ></BookingModal>
       </>

    );
};

export default Booking;