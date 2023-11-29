import React from "react";

function PlantCard({plant, handleClick, stockBtn}) {


  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      <button className="primary" onClick={handleClick}>{stockBtn ? "Out of Stock" : "In Stock"}</button>
    </li>
  );
}

export default PlantCard;
