import React from "react";
import { useState } from "react";
const Trip = () => {
  const [trip, setTrip] = useState([]);

  return <div>{localStorage.getItem("TripData")}</div>;
};

export default Trip;
