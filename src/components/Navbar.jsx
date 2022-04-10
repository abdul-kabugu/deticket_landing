import React, {useState} from 'react';
import {Button, Typography, Drawer} from 'antd'
import {InstagramFilled, TwitterSquareFilled} from '@ant-design/icons'
//import { HashLink as Link } from 'react-router-hash-link';
import { Link,  Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { MenuFoldOutlined } from '@ant-design/icons';

const Navbar = () => {
    const {Title, Text , Paragraph} = Typography

    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
      setVisible(true);
    };
  
    const onClose = () => {
      setVisible(false);
    };
  
    return <div className='nav-container' >
    
    <Drawer title="Detickets." placement="right" onClose={onClose} visible={visible}>
    <div className='nav-drawer'>
            <div className='nav-list-drawer'>
               <Link to="home"  spy={true} smooth={true} offset={50} duration={500} style={{cursor: "pointer"}}> <p className='nav-item' style={{textDecoration: "none"}}>home</p></Link>
              <Link to="services"   spy={true} smooth={true} offset={-100} duration={500}  style={{cursor: "pointer"}}>  <Paragraph className='nav-item'> services</Paragraph></Link>
               <Link to="faqs"  spy={true} smooth={true} offset={50} duration={500}  style={{cursor: "pointer"}}> <Paragraph className='nav-item'>how it works</Paragraph></Link>
               <a href='https://twitter.com/detickets1' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}> <Paragraph className='nav-item'>contact us</Paragraph></a>
            </div>
            
           <Link to="roadmap" spy={true} smooth={true} offset={50} duration={900}> <button className='roadmap-btn btn'>
                see our  roadmap
            </button></Link>
            
            <div className='social-right social-drawer'>
                <div className='social-icons'>
                  <a href='https://twitter.com/detickets1' target="_blank" rel="noopener noreferrer"> <TwitterSquareFilled style={{color: "#00acee", fontSize: "28px", borderRadius: "14px"}}/></a> 
                    <img src='/img/discord.png'  alt='' style={{width: "25px"}} />
                    <InstagramFilled style={{color: "#bc2a8d", fontSize: "28px", borderRadius: "14px"}}/>
                </div>
            </div>
        </div>
      </Drawer>
        <div className='nav-left'>
           {/* <h3 className='logo'> <span className='logo-first-latter'>D</span>ebble.</h3>*/}
           <img src='/img/logo-3.svg'   alt='' className='logo-image'/>
            
        </div>
        <div className='nav-right'>
            <div className='nav-list'>
               <Link to="home"  spy={true} smooth={true} offset={50} duration={500} style={{cursor: "pointer"}}> <p className='nav-item' style={{textDecoration: "none"}}>home</p></Link>
              <Link to="services"   spy={true} smooth={true} offset={-100} duration={500}  style={{cursor: "pointer"}}>  <Paragraph className='nav-item'> services</Paragraph></Link>
               <Link to="faqs"  spy={true} smooth={true} offset={50} duration={500}  style={{cursor: "pointer"}}> <Paragraph className='nav-item'>how it works</Paragraph></Link>
               <a href='https://twitter.com/detickets1' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}> <Paragraph className='nav-item'>contact us</Paragraph></a>
            </div>
            
           <Link to="roadmap" spy={true} smooth={true} offset={50} duration={900}> <button className='roadmap-btn btn'>
                see our  roadmap
            </button></Link>
            
        
        </div>
         <div className='toggle-btn'> <MenuFoldOutlined  onClick={showDrawer} style={{fontSize: "30px"}}/> </div>
    </div>;
}



export default Navbar;