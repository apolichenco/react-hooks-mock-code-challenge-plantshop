import React, {useState} from "react";

function PlantCard({plantInfo}) {
  const [stockCheck, setStockCheck] = useState(true)

  function handleStockCheck() {
    setStockCheck(!stockCheck)
  }

  return (
    <li className="card">
      <img src={plantInfo.image} alt={plantInfo.name} />
      <h4>{plantInfo.name}</h4>
      <p>Price: {plantInfo.price}</p>
      {stockCheck ? (
        <button onClick={handleStockCheck} className="primary">In Stock</button>
      ) : (
        <button onClick={handleStockCheck} >Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
