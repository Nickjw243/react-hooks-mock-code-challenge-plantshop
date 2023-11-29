import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, handleClick}) {
  return (
    <ul className="cards">
      {plants.map((plant) => 
      <PlantCard key={plant.id} plant={plant} handleClick={handleClick}/>
      )}
    </ul>
  );
}

export default PlantList;
