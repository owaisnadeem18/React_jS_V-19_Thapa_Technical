import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "swiper/css"; // Swiper styles import karen
import "./Card.css";

const CardComponent = ({ img }) => {
  return (
    <Card className="card" style={{ width: "18rem" }}>
      <Card.Img className="card-img" variant="top" src={img} />
      <Card.Body>
        <Card.Title>Card Title 1</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
