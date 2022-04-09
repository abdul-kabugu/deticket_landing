import React from 'react';
import HomeView from '../HomeView';
import Navbar from '../Navbar';
import Roadmap from '../Roadmap';
import Services from '../Services';
import WhyUs from '../WhyUs';
import Footer from '../Footer';
import SubscribeTest from '../SubscribeTest';

const Home = () => {
    return <div className='home-container'>
        <Navbar />
         <HomeView />
         <Services />
         <WhyUs />
         <Roadmap />
         <Footer />
         
    </div>;
}



export default Home;