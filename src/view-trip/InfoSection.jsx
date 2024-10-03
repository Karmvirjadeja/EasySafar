import React from "react";

const InfoSection = ({ trip }) => {
  return (
    <div>
      <img
        src="/placeholder.jpg"
        alt="Aeroplane"
        className="h-[340px] w-full object-cover rounded-xl"
      />

      <div>
        <h2>{trip}</h2>
      </div>
    </div>
  );
};

export default InfoSection;
