import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { SocialIcon } from 'react-social-icons';



const ModalExample = (props) => {
  const {
    buttonLabel,
    className,
    profile,
    url
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const closeBtn = <button className="close" onClick={toggle}>&times;</button>;

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
        <Button color="primary" onClick={toggle}><a href ="#" > Pay Now</a></Button>{' '}
        <Button color="secondary" onClick={toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  </div>
);
}

export default ModalExample;