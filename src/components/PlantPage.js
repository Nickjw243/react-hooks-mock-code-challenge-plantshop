import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants, url, addNewPlant, handleClick}) {
  return (
    <main>
      <NewPlantForm url={url} addNewPlant={addNewPlant}/>
      <Search />
      <PlantList plants={plants} handleClick={handleClick}/>
    </main>
  );
}

export default PlantPage;
