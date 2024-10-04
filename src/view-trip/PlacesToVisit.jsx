import React from "react";
import { Link } from "react-router-dom";
import PlaceCardItem from "./PlaceCardItem";
function PlacesToVisit() {
  const tripData = JSON.parse(localStorage.getItem("TripData"));

  const { itinerary } = tripData;
  const Plans = [];
  Object.entries(itinerary).forEach((value) => {
    Plans.push(value);
  });
  console.log(Plans);
  return (
    <div className="mt-5">
      <h2 className="font-bold text-lg">Places to Visit</h2>
      <div>
        <div className="grid md: grid-cols-2 gap-5">
          {Plans.map((item, index) => {
            return (
              <div key={index}>
                <h2 className="font-medium text-lg">
                  {item[0].replace("day", "Day")}
                </h2>
                <div>
                  <h2 className="font-medium text-sm text-orange-500">
                    {item[1].time}
                  </h2>
                  <PlaceCardItem place={item[1]} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PlacesToVisit;
