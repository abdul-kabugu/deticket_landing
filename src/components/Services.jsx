import React, {useState} from 'react';
import  {Typography, Modal, Button}  from 'antd'
import { HeartOutlined, ShopOutlined, WalletOutlined } from '@ant-design/icons';
const Services = () => {
    const {Paragraph} = Typography
    
  
    return <div className='services-container' id='services'>
    
    <div className='services-heeader'>
        <h2 className='services-title'> what  our serve  for you</h2>
        <Paragraph className='services-paragraph' style={{color: "#6a766f", textAlign:"center"}}>We help anyone who issues tickets/ events organizer worldwide <br />
         to take advantage of the latest technological innovations</Paragraph>
          </div>
      <div className='services-body'>
          <div className='servic-feature'>
          <ShopOutlined style={{fontSize: "40px"}}/>
              <h4 className='feature-title'>
                  buy and sell tickets
              </h4>
              <Paragraph style={{color: "#6a766f", textAlign:"center"}}>
                  get your chance to explore the most  incredible  concert you've never seen 
              </Paragraph>
          </div>
          <div className='servic-feature'>
          <HeartOutlined  style={{fontSize: "40px"}}/>
          <h4 className='feature-title'>Reward Your True Fans</h4>
              <Paragraph   style={{color: "#6a766f", textAlign:"center"}}>give back  to your  true  fans   with  just one click </Paragraph>
          </div>
          <div className='servic-feature'>
              <img src='/img/card.png'  alt='' style={{width: "30px"}}/>
          <h4 className='feature-title'>Tickets Become Digital Collectibles </h4>
              <Paragraph style={{color: "#6a766f", textAlign:"center"}}> your tickets  becomes ERC721 token  and  can be traded  in secondary  market  and get Secondary Market Revenue   </Paragraph>
          </div>
          
          <div className='servic-feature'>
          <WalletOutlined  style={{fontSize: "40px"}}/>
          <h4 className='feature-title'> easy payment</h4>
              <Paragraph style={{color: "#6a766f", textAlign:"center"}}>as ticket  seller   you're free to  choose  any payment  method  from crypto's  to  debit/credt card </Paragraph>
          </div>
      </div>
    </div>;
}


export default Services;