import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import ContactForm from '../ContactForm/ContactForm';
import Feture from '../Feture/Feture';
import Services from '../Services/Services';
import Tastimonial from '../Tastimonial/Tastimonial';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Feture></Feture>
            <Services></Services>
            <AppointmentBanner></AppointmentBanner>
            <Tastimonial></Tastimonial>
            <ContactForm></ContactForm>
            <Footer></Footer>
        </div>
    );
};

export default Home;