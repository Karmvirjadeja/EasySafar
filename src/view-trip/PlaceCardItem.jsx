import React from "react";

function PlaceCardItem({ place }) {
  return (
    <div className="border rounded-xl p-3 mt-2 flex gap-5">
      <img
        src="/placeholder.jpg"
        alt="destinations"
        className="w-[130px] h-[130px] rounded-xl"
      />
      <div>
        <h2 className="font-bold text-lg">{place.place}</h2>
        <p className="text-sm text-gray-500">{place.placeDetails}</p>
      </div>
    </div>
  );
}

export default PlaceCardItem;
