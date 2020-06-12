import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { SocialIcon } from 'react-social-icons';
import { Redirect } from 'react-router-dom';



const ModalExample = (props) => {
  const {
    buttonLabel,
    className,
    profile,
    url,
    price,
    eventtitle,
    orderId

  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  
  
  async function loadScript(src) {
    return new Promise(resolve => {
      const script = document.createElement('script')
      script.src = src
      
      script.onload = () => {
        resolve(true)
      }
      script.onerror = () => {
        resolve(false)
      }
      document.body.appendChild(script)
    })


    
   
 }

  const closeBtn = <button className="close" onClick={toggle}>&times;</button>;
  
  
  
  async function displayRazorPay (){


    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

    if(!res){
      alert("Failed to load payment gateway")
    }
    
    var options = {
      "key": "rzp_test_H0teHdXhlYCfKK", // Enter the Key ID generated from the Dashboard
      "amount": `${props.price *100} `, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "Art Live",
      
      "description": `${props.eventtitle}`,
      "image": "https://.com/your_logo",
      
           //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "handler": function (response){
          alert(response.razorpay_payment_id);
          alert(response.razorpay_order_id);
          alert(response.razorpay_signature)
      

      },
      
      

      
  };
  
  const paymentObject = new window.Razorpay(options)
  paymentObject.open()
  }
 

  return (
  <div>
    <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
    <Modal isOpen={modal} toggle={toggle} className={className}>
      <ModalHeader toggle={toggle} close={closeBtn}>Modal title</ModalHeader>
      <ModalBody>
        {props.profile}

        <SocialIcon url = {props.url}></SocialIcon>      

      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={displayRazorPay}> Pay Now</Button>{' '}
        <Button color="secondary" onClick={toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  </div>
);
}

export default ModalExample;