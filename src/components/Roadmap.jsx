import React from 'react';
import { Typography } from 'antd';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {Line, Circle} from 'rc-progress'
import { EditOutlined, HighlightFilled } from '@ant-design/icons';
const Roadmap = () => {
    const {Paragraph} = Typography
    return <div className='roadmap-container' id='roadmap'>
       <h3 className='feature-title'>Project Roadmap</h3>
       <Paragraph style={{color: "#6a766f", textAlign: "center", textTransform: "uppercase"}}>The roadmap focuses on the development of the technology, operations <br /> infrastructure, new partnerships, and marketing initiatives.</Paragraph>
       
       <VerticalTimeline>
           <VerticalTimelineElement
             className='first-task'
             contentStyle={{ background: '#17202A', color: '#fff' }}
             contentArrowStyle={{ borderRight: '7px solid  #17202A' }}
             date="Q1 2022 "
            
             iconStyle={{ background: '#17202A', color: '#fff', display: "flex", alignItems: "center", justifyContent: "center" }}
             icon={<EditOutlined  style={{color: "white", fontSize: "1.9rem"}}/>}
             dateClassName={ "dates" }
             lineColor={ "red" }
           >
            
            <ul className='task-list'>
                <li className='task-item'>project inception</li>
                <li className='task-item'>idea initialization</li>
                <li className='task-item'>market research</li>
                <li className='task-item'>software archtecture planning</li>
                <li className='task-item'>website UI / UX Design</li>
                <li className='task-item'>website development phase 1</li>
            </ul>
            <div className='progress-bar'> 
            <div className='progress-header'> <Paragraph>progress</Paragraph>  <Paragraph>100%</Paragraph></div>
              <div className='progress-body'><Line percent="100" strokeWidth="2" strokeColor="blue" /> </div>
            </div>
           </VerticalTimelineElement>

           <VerticalTimelineElement
             className='first-task'
             contentStyle={{ background: '#17202A', color: '#fff' }}
             contentArrowStyle={{ borderRight: '7px solid  #17202A' }}
             date="Q2 2022 -- present "
            
             iconStyle={{ background: '#17202A', color: '#fff', display: "flex", alignItems: "center", justifyContent: "center" }}
             icon={<EditOutlined  style={{color: "white", fontSize: "1.9rem"}}/>}
             dateClassName={ "dates" }
             lineColor={ "red" }
           >
            
            <ul className='task-list'>
                <li className='task-item'>website development phase 2</li>
                <li className='task-item'>smart contract testnet deployment</li>
                <li className='task-item'>website beta release</li>
                <li className='task-item'>website testing</li>
                <li className='task-item'>website UI / UX Design  improvement</li>
               
            </ul>
            <div className='progress-bar'> 
            <div className='progress-header'> <Paragraph>progress</Paragraph>  <Paragraph>60%</Paragraph></div>
              <div className='progress-body'><Line percent="60" strokeWidth="2" strokeColor="blue" /> </div>
            </div>
           </VerticalTimelineElement>

           <VerticalTimelineElement
             className='first-task'
             contentStyle={{ background: '#17202A', color: '#fff' }}
             contentArrowStyle={{ borderRight: '7px solid  #17202A' }}
             date="Q3 2022 "
            
             iconStyle={{ background: '#17202A', color: '#fff', display: "flex", alignItems: "center", justifyContent: "center" }}
             icon={<EditOutlined  style={{color: "white", fontSize: "1.9rem"}}/>}
             dateClassName={ "dates" }
             lineColor={ "red" }
           >
            
            <ul className='task-list'>
                <li className='task-item'>ticket scan architecture</li>
                <li className='task-item'>ticket scan development</li>
                <li className='task-item'>smart contract mainnet deployment</li>
                <li className='task-item'>ticket scan beta release</li>
                <li className='task-item'>android app planning</li>
                <li className='task-item'>ticket scan testing</li>
            </ul>
            <div className='progress-bar'> 
            <div className='progress-header'> <Paragraph>progress</Paragraph>  <Paragraph>0%</Paragraph></div>
              <div className='progress-body'><Line percent="0" strokeWidth="2" strokeColor="blue" /> </div>
            </div>
           </VerticalTimelineElement>

           <VerticalTimelineElement
             className='first-task'
             contentStyle={{ background: '#17202A', color: '#fff' }}
             contentArrowStyle={{ borderRight: '7px solid  #17202A' }}
             date="Q4 2022 "
            
             iconStyle={{ background: '#17202A', color: '#fff', display: "flex", alignItems: "center", justifyContent: "center" }}
             icon={<EditOutlined  style={{color: "white", fontSize: "1.9rem"}}/>}
             dateClassName={ "dates" }
             lineColor={ "red" }
           >
            
            <ul className='task-list'>
                <li className='task-item'>marketing boost</li>
                <li className='task-item'>android app beta release</li>
                <li className='task-item'>more partnerships</li>
                <li className='task-item'>android app testing</li>
                <li className='task-item'>roadmap 1.0 release</li>
                
            </ul>
            <div className='progress-bar'> 
            <div className='progress-header'> <Paragraph>progress</Paragraph>  <Paragraph>0%</Paragraph></div>
              <div className='progress-body'><Line percent="0" strokeWidth="2" strokeColor="blue" /> </div>
            </div>
           </VerticalTimelineElement>

           
       </VerticalTimeline>
    </div>;
}

export default Roadmap;