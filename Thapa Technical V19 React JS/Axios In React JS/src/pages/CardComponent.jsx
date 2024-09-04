import React from "react";

export default function CardComponent({ item }) {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={item.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <h3 className="card-title">{item.price}</h3>
          <p className="card-text">{item.description}</p>
          <a href="#" className="btn btn-primary">
            {item.price}
          </a>
        </div>
      </div>
    </>
  );
}
