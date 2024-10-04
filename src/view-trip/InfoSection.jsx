import React from "react";

const InfoSection = () => {
  const tripData = JSON.parse(localStorage.getItem("TripData"));
  console.log(typeof tripData);
  const { hotels } = tripData;
  if (hotels) console.log(hotels);
  return (
    <div>
      <img
        src="/placeholder.jpg"
        alt="Aeroplane"
        className="h-[340px] w-full object-cover rounded-xl"
      />

      <div>
        <h2>{hotels[0].description}</h2>
      </div>
    </div>
  );
};

export default InfoSection;
