import React from "react";
import "./Card.css";

function Card({ name, image }) {
  return (
    <section className="card-container">
      <div className="image-container">
        <img src={image} alt="" loading="lazy" />
      </div>
      <div className="card-name">{name}</div>
    </section>
  );
}

export default Card;
