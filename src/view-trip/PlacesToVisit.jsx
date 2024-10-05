import React from "react";
import PlaceCardItem from "./PlaceCardItem";

function PlacesToVisit() {
  const tripData = JSON.parse(localStorage.getItem("TripData"));

  const { itinerary } = tripData;
  const Plans = [];
  Object.entries(itinerary).forEach((value) => {
    Plans.push(value);
  });

  return (
    <div className="mt-5">
      <h2 className="font-bold text-xl md:text-2xl lg:text-3xl mb-4">
        Places to Visit
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Plans.map((item, index) => (
          <div key={index} className="bg-white p-4 shadow-md rounded-xl">
            {/* Day Heading */}
            <h2 className="font-semibold text-lg md:text-xl lg:text-2xl text-gray-800 mb-2">
              {item[0].replace("day", "Day")}
            </h2>

            {/* Time and Place */}
            <div className="space-y-2">
              <h2 className="font-medium text-sm md:text-base lg:text-lg text-orange-500">
                {item[1].time}
              </h2>
              <PlaceCardItem place={item[1]} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlacesToVisit;
