import React, {useState} from 'react';
import {Button, Typography} from 'antd'
import SubscribeTest from './SubscribeTest';
const HomeView = () => {
    const [email, setEmail] = useState()
    const {Text, Title, Paragraph} =  Typography
    return <div className='home-view-container' id='home'>
        <div className='home-view-left'>
        <h3 className='home-subtitle'>WELCOME TO DETICKETS</h3>
         
         <h1 className='home-title'>create. sell <br /> and manage your <br />  event tickets</h1>
         <Paragraph style={{color: "#6a766f"}} className="home-paragraph">Detickets  is the world's first   
          complete ticketing <br />platform with blockchain and NFT integration
         </Paragraph>
         
         <div className='join-news-box'>
         {<SubscribeTest />}
         </div>
         <Paragraph style={{marginTop: "13px", color: "#6a766f"}}>Currently a waitlist of 2,400</Paragraph>
        </div>
        <div className='home-view-right'>
            <img src='/img/buy-ticket-1.png'   alt='' className='buy-tcke-img'/>
        </div>
    </div>;
}



export default HomeView;