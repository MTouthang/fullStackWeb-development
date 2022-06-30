import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { FaMapMarkedAlt } from "react-icons/fa";

const MyCard = ({ details }) => {
  return (
    <Card>
      <CardBody>
        <img
          height="150"
          width="150"
          className="rounder-circle img-thumbnail border-danger"
          src={details.picture?.large}
          alt="profile"
        />
        <CardTitle className="pr-2 text-primary">
          <h1>
            <span>{details.name?.title}</span>
            <span>{details.name?.first}</span>
            <span>{details.name?.last}</span>
          </h1>
        </CardTitle>
        <CardText>
          <FaMapMarkedAlt />
          {details.location?.city}
          <p> {details.phone}</p>
        </CardText>
      </CardBody>
    </Card>
  );
};

export default MyCard;
