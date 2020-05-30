import React from 'react';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle,Button
} from 'reactstrap';

import './event-tile.styles.scss';

const EventTile = ({ eventTitle, artitstName, eventDate, eventTime }) => {
  return (
    <div >
      <Card className='event-card'>
        <CardBody>
          <CardTitle className='event-title'>{eventTitle}</CardTitle>
          <CardSubtitle className='artist-name'>Artist Name: {artitstName}</CardSubtitle>
        {/* <img width='100%'  alt="Card image cap" /> */}
          <CardText>Event Date: {eventDate}</CardText>
          <CardText>Event Time: {eventTime}</CardText>
          <Button>Learn More </Button>
          <Button>Artist Profile</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default EventTile;