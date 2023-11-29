import React, {useState, useEffect} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const url = "http://localhost:6001/plants"
  const [plants, setPlants] = useState([])
  const [stockBtn, setStockBtn] = useState(false)

  useEffect(() => {
    loadPlants()
  }, [])

  const loadPlants = () => {
    fetch(url)
    .then(r => r.json())
    .then(data => setPlants(data))
  }

  const addNewPlant = (newPlant) => {
    setPlants([...plants, newPlant])
  }

  const updateStockBtn = () => {
    setStockBtn(prevStock => !prevStock)
  }

  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} url={url} addNewPlant={addNewPlant} handleClick={updateStockBtn} stockBtn={stockBtn}/>
    </div>
  );
}

export default App;
