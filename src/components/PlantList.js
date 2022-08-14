import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantData}) {
  return (
    <ul className="cards">{
      plantData.map((plant) => 
      <PlantCard key={plantData.indexOf(plant)} plantInfo={plant} />
      )}</ul>
  );
}

export default PlantList;
