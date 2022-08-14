import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantData, setPlantData] = useState([])
  const [permanentPlantData, setPermanentPlantData] = useState([])

  function handleSearchPlants(searchedTerm) {
    if(!searchedTerm) {
      setPlantData(permanentPlantData)
    }
    else {
      const updatedPlant =
        permanentPlantData.filter((plant) => {
        const thisPlant = plant.name
        return thisPlant.toLowerCase().includes(searchedTerm.toLowerCase())
        })
      setPlantData(updatedPlant)
    }
  }

  function handleNewPlant(plant){
    setPlantData(...plantData, plant)
    setPermanentPlantData(...plantData, plant)
  }

  useEffect (() =>
  fetch("http://localhost:6001/plants")
  .then((r) => r.json())
  .then((data) => {
    setPlantData(data)
    setPermanentPlantData(data)
  })
  , []
)

  return (
    <main>
      <NewPlantForm onNewPlant={handleNewPlant}/>
      <Search onSearch={handleSearchPlants}/>
      <PlantList plantData={plantData}/>
    </main>
  );
}

export default PlantPage;
