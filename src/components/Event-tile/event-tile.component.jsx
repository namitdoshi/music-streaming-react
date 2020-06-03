import React from 'react';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';

import CustomButton from '../custom-button/custom-button.component'
import './event-tile.styles.scss';
import EventInfo from '../Event/eventInfo.component'
const EventTile = ({ eventTitle, artitstName, eventDate, eventTime, eventUrl,profile }) => 
  
 
   ( <div >
      <Card className='event-card'>
        <CardBody>
          <CardTitle className='event-title'>{eventTitle}</CardTitle>
          <CardSubtitle className='artist-name'>Artist Name: {artitstName}</CardSubtitle>
        
          <CardText>Event Date: {eventDate}</CardText>
          <CardText>Event Time: {eventTime}</CardText>
          <div className='event-btn'>
            
          </div>
        </CardBody>
      </Card>
    </div>)
 
export default EventTile;