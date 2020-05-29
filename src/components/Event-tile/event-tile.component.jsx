import React from 'react';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle,Button
} from 'reactstrap';
import {image} from '../../assets/img/guruji3.jpeg'
const EventTile = ({ eventTitle, artitstName, eventDate, eventTime }) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>{eventTitle}</CardTitle>
          <CardSubtitle>{artitstName}</CardSubtitle>
        </CardBody>
        <img width='100%'  alt="Card image cap" />
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