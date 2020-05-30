import React from 'react';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle,Button
} from 'reactstrap';

const EventTile = ({ eventTitle, artitstName, eventDate, eventTime }) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>{eventTitle}</CardTitle>
          <CardSubtitle>{artitstName}</CardSubtitle>
        </CardBody>
        
        <CardBody>
          <CardText></CardText>
          <Button>Click </Button>
          <Button>Artist Profile</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default EventTile;