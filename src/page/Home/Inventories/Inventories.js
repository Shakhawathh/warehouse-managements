import React, { useEffect, useState } from "react";
import Inventory from "../Inventory/Inventory";

const Inventories = () => {
  const [inventories, setInventories] = useState([]);

  useEffect(() => {
    fetch("https://warehouse-managements-server.onrender.com/inventory")
      .then((res) => res.json())
      .then((data) => setInventories(data.slice(0, 6)));
  }, []);

  return (
    <div className="container">
      <h1 className="text-center text-bold mt-5"> Inventories Item </h1>
      <div className="row">
        {inventories.map((inventory) => (
          <Inventory key={inventory._id} inventory={inventory}></Inventory>
        ))}
      </div>
    </div>
  );
};

export default Inventories;
