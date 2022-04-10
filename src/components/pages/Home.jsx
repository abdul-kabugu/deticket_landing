import React from 'react';
import HomeView from '../HomeView';
import Navbar from '../Navbar';
import Roadmap from '../Roadmap';
import Services from '../Services';
import WhyUs from '../WhyUs';
import Footer from '../Footer';
import SubscribeTest from '../SubscribeTest';
import WhatsAppWidget from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'
import {Helmet} from 'react-helmet-async'

const Home = () => {
    return (
    <>
    <Helmet>
    <title>The world's first decentralized ticketing platform</title>
    <meta name='description' content="Explore the world's first nft ticketing platform.  create , sell and buy tickets." />
    <link rel='canonical' href='/' />
    </Helmet>
    
    <div className='home-container'>
        <Navbar />
         <HomeView />
         <Services />
         <WhyUs />
         <Roadmap />
         <Footer />
         <WhatsAppWidget phoneNumber='255625220627' />
    
   
    </div>
    </>
    )
}



export default Home;