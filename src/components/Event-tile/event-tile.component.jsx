import React from 'react';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle,Button
} from 'reactstrap';
import {image} from '../../assets/img/guruji3.jpeg'
const EventTile = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
        </CardBody>
        <img width='100%'  alt="Card image cap" />
        <CardBody>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
         <Button>Click </Button>
         <Button>Artist Profile</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default EventTile;