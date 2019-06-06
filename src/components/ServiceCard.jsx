import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ServiceCard = (props) => {
  return (
    <Card style={{ margin: "10px 0 10px 0", boxShadow: "2px 4px 4px #888888"}}>
      <Card.Body>
        <Card.Title>
          Destination: {props.service.Destination1.$.name}
        </Card.Title>
        <Card.Text>
          Origin: {props.service.Origin1.$.name}
          <br />
          Due: {props.service.ArriveTime.$.time}
          <br />
          Departing: {props.service.DepartTime.$.time}
          <br />
          Status: {props.service.ServiceStatus.$.Status}
          <br />
          Delay: {props.service.Delay.$.Minutes} minutes
          <br />
          Platform: {props.service.Platform.$.Number}
          <br />
        </Card.Text>
        <Button onClick={props.onClick} value={props.index}>View Stops</Button>
      </Card.Body>
    </Card>
  )
}

export default ServiceCard;