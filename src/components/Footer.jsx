import React, {useState} from 'react';
import {Typography, Button} from 'antd'
import { InstagramFilled, TwitterSquareFilled } from '@ant-design/icons';
import { HashLink as Link } from 'react-router-hash-link';
import SubscribeTest from './SubscribeTest';
const Footer = () => {
    const [email, setEmail] = useState()
    const {Paragraph} = Typography
    return <div className='footer-container'>
    <div className='footer-navs'>
        <div className='footer-left'>
            <Paragraph style={{fontSize: "1.3rem", marginBottom: "5px"}}>powered by <span className='protocol-name'> <span className='protocol-logo'>u</span>nlock-protocol</span></Paragraph>
            <h2 className='footer-title'>EARLY ACCESS <br /> TO THE FUTURE  OF TICKETING</h2>
            <Paragraph className='footter-paragraph' style={{color: "#6a766f",  textTransform: "capitalize"}}>The first members are just getting their hands on detickets. <br />Register for the closed beta below.</Paragraph>
           
         {<SubscribeTest />}
        </div>
        <div className='footer-center'>
            <div className='navs'>
               <Link to='#home' style={{textDecoration: "none"}}> <Paragraph style={{fontSize: "1.3rem", textTransform: "uppercase", marginBottom: "7px"}}>home</Paragraph></Link>
               <Link to="#services" style={{textDecoration: "none"}}> <Paragraph style={{fontSize: "1.3rem", textTransform: "uppercase", marginBottom: "7px"}}>Services</Paragraph></Link>
               <Link to="#roadmap" style={{textDecoration: "none"}}> <Paragraph style={{fontSize: "1.3rem", textTransform: "uppercase", marginBottom: "7px"}}>roadmap</Paragraph> </Link>
               <Link to='blog' style={{textDecoration: "none"}}> <Paragraph style={{fontSize: "1.3rem", textTransform: "uppercase", marginBottom: "7px"}}>blog</Paragraph></Link>
            </div>
        </div>
        </div>
        <div className='footer-social'>
            <div className='social-left'>
                <Paragraph className='footer-logo' style={{color: "#6a766f",  textTransform: "capitalize"}}>Detickets 2022 ©</Paragraph>
            </div>
            <div className='social-right'>
                <div className='social-icons'>
                  <a href='https://twitter.com/detickets1' target="_blank" rel="noopener noreferrer"> <TwitterSquareFilled style={{color: "#00acee", fontSize: "28px", borderRadius: "14px"}}/></a> 
                    <img src='/img/discord.png'  alt='' style={{width: "25px"}} />
                    <InstagramFilled style={{color: "#bc2a8d", fontSize: "28px", borderRadius: "14px"}}/>
                </div>
            </div>
        </div>
    </div>;
}



export default Footer;