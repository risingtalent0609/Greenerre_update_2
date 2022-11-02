import React from "react";

import { Card, ListGroup, Col } from "react-bootstrap";
//import CSS
import "./TeamMember.scss";

const TeamMember = (props) => {
  return (
    <Col className="team-member">
      <Card>
        <Card.Img variant="top" src={props.avatarURL} />
        <Card.Body>
          <Card.Title className="text-center member-name">
            {props.name}
          </Card.Title>
          <Card.Text className="member-occupation">
            {props.occupation}
          </Card.Text>
          <Card.Text className="member-company">{props.company}</Card.Text>
          <ListGroup>
            {props.workHistory.map((h) => {
              return <ListGroup.Item>{h}</ListGroup.Item>;
            })}
          </ListGroup>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default TeamMember;
