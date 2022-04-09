import { CheckCircleOutlined, CloseCircleFilled } from '@ant-design/icons';
import { Modal, Typography } from 'antd';
import React, {useState} from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe"


const CustomInput = ({ status, message, onValidated }) => {
    const [useremail, setUserEmail] = useState('')
    const [isModal, setIsModal] = useState(false)
    const {Paragraph} = Typography
    
    const handleSubmit  = (e) =>{
        e.preventDefault();
        useremail &&
        useremail.indexOf("@") > -1 &&
        onValidated({
            EMAIL: useremail,
           
        });
    } 
      const cleareData = ()  =>  {
         setUserEmail('')
      }
    
    return <div className='custom-input-wrapper '>
            {status === "success"  && (
                <Paragraph style={{color: "blue"}}>Thanks for applying for Deticket's closed beta!</Paragraph>
                
            )}
            {status === "error" && (
                <div
                    className="mc__alert mc__alert--error"
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
            <form
             className='form-container  join-beta-container'
             onSubmit={(e) => handleSubmit(e)}
            >
          

           

            
           
           

            <input type="email" placeholder="your email address"      value={useremail} onChange={e => setUserEmail(e.target.value)} className="email-input"/>
              {status === "sending" ?  <input type="submit" value="loading..."  className='join-btn'/> :  <input type="submit" value="Join beta"  className='join-btn'/>}
            </form>
         
    </div>;
}


export default CustomInput;