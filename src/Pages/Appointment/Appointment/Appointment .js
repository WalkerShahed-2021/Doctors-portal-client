import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvialableAppointment from '../AvialableAppointment/AvialableAppointment';

const Appointment  = () => {
    const [date, setDate] = React.useState(new Date());
    
    return (
        <div>
            <Navigation></Navigation>
            <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
            <AvialableAppointment date={date}></AvialableAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;