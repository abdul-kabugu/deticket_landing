import React, {useState} from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe"
import CustomInput from './CustomInput';
import { CheckCircleOutlined } from '@ant-design/icons';
import { Modal, Typography } from 'antd';

const SubscribeTest = () => {
    const url = "https://gmail.us14.list-manage.com/subscribe/post?u=a191baacb513f7a638dacaf1b&amp;id=b2f3017d49"
    const [emailTest, setEmailTest]  = useState()
    const [isModal, setIsModal] = useState(false)
    const {Paragraph} = Typography
    //process.env.REACT_APP_MAILCHIMP_URL}
  

  
    const SimpleForm = () => <MailchimpSubscribe url={url}/>
    return <div>
       
        <MailchimpSubscribe
    url={url}
    render={({ subscribe, status, message }) => (
      <CustomInput        
      
      status={status} 
        message={message}
      onValidated={formData => subscribe(formData)}

      />
    )}
  />
  
  
    </div>;
}

export default SubscribeTest;