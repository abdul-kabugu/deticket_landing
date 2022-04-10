import React from 'react';
import {Typography} from 'antd'
const WhyUs = () => {
    const {Paragraph} = Typography
    return <div className='why-us-container' id='whyus'>
    <div className='why-us-header'>
        <Paragraph  className='why-us-title' style={{color: "#1d1e21",  fontFamily: "'Montserrat Alternates', sans-serif", textAlign: "center", marginBottom: "7px"}}>We’ve got a product that will take your  <br />ticketing to the next level.</Paragraph>
        <Paragraph  className='why-us-subtitle' style={{color:"#6a766f", textAlign: "center",  lineHeight: "22px"}}>Whether you are completely new to the game or already sell <br /> <span className='why-subgraph-line'> millions of tickets a year. </span></Paragraph> </div>
        <div className='features feature-1'>
        <div className='feature-left'>
            <h3 className='feature-title' style={{textTransform: "uppercase"}}>manage your tickets</h3>
            <Paragraph className='feature-subparagraph' style={{color: "#6a766f",  textAlign: "center"}}> The right set of features to manage your tickets, attendee, and stats</Paragraph>
            <Paragraph  style={{color: "#6a766f", fontSize: "1.4rem", textAlign: "center"}}>real-time dashboard. Everything you need to start selling tickets. </Paragraph>
              
            </div>
            <div className='feature-right'>
             <img src='/img/dashbord-3.svg'     alt='' className='dashboard-image'/>
            </div>
        </div>

        <div className='features feature-1'>
        <div className='feature-left'>
            <h3 className='feature-title' style={{textTransform: "uppercase"}}>Globally Validated System</h3>
            <Paragraph className='feature-subparagraph' style={{color: "#6a766f",  textAlign: "center"}}> Tried and tested system with daily users across the globe.</Paragraph>
            <Paragraph  style={{color: "#6a766f", fontSize: "1.4rem", textAlign: "center"}}> the application even lets the organizers verify if the tickets are valid at check-in.  </Paragraph>
              
            </div>
            <div className='feature-right'>
             <img src='/img/qr-2.svg' alt='' className='dashboard-image'/>
            </div> </div>

            <div className='features feature-1'>
        <div className='feature-left'>
            <h3 className='feature-title' style={{textTransform: "uppercase"}}>Reward your true fans</h3>
            <Paragraph className='feature-subparagraph' style={{color: "#6a766f",  textAlign: "center"}}> A complete ticketing infrastructure with blockchain and NFT integration.</Paragraph>
            <Paragraph  style={{color: "#6a766f", fontSize: "1.4rem", textAlign: "center"}}> Selling Tickets Is all About Strategy  <br />
               imagine you have an VR event in decentraland  and you're startegy is to give  Early Bird 90%  discount  to  your  shopify store 
               or  provide food and drink deals to fans who have gathered many event tickets.
             </Paragraph>
              
            </div>
            <div className='feature-right'>
             <img src='/img/gift.svg' alt='' className='dashboard-image'/>
            </div> </div>

            <div className='features feature-3'>
        <div className='feature-left left-4'>
            <h3 className='feature-title' style={{textTransform: "uppercase"}}>Fan Engagement</h3>
            <Paragraph className='feature-subparagraph' style={{color: "#6a766f",  textAlign: "center"}}> with NFT tickets you'll be able to foster communities of dedicated fans 
            .</Paragraph>
            <Paragraph  style={{color: "#6a766f", fontSize: "1.4rem", textAlign: "center"}}>the hard work is done a ticket created in debble  later can be used as gift card or discord server membership  <br />
            A couple of practical and immediate examples to this would be allowing access to a particular Discord server if a user has the NFT ticket in their wallet, or even offering governance-style votes on what fans want to happen at a particular event by using the NFTs within a governance platform such as Snapshot.
             </Paragraph>
              
            </div>
            <div className='feature-right'>
             <img src='/img/connect.svg' alt='' className='dashboard-image'/>
            </div> </div>

            

        
    </div>;
}



export default WhyUs;