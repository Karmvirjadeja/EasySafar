import React from "react";
import { Link } from "react-router-dom";
function Hotels() {
  const Hotels = [];
  const tripData = JSON.parse(localStorage.getItem("TripData"));
  console.log(tripData);
  const valuesArray = [];
  const { hotels } = tripData;
  Object.values(hotels).forEach((value) => {
    valuesArray.push(value);
  });
  console.log(typeof valuesArray);
  return (
    <div>
      <h2 className="font-bold text-xl mt-5">Hotel Recommendations</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {valuesArray.map((hotel) => {
          return (
            // Add 'return' here
            <Link
              key={hotel.hotelName}
              to={`https://www.google.com/maps/search/?api=1&query= +${hotel.hotelName}+
                ${hotel.hotelAddress}`}
              target="_blank"
            >
              <div
                key={hotel.hotelName}
                className="hover:scale-105 transition-all cursor-pointer"
              >
                <img
                  src="/placeholder.jpg"
                  alt={hotel.hotelName} // Update alt text for accessibility
                  className="rounded-xl"
                />
                <div className="my-2 flex flex-col ">
                  <h2 className="font-medium">{hotel.hotelName}</h2>
                  <h2 className="font-xs text-gray-500 text-left">
                    📍{hotel.hotelAddress}
                  </h2>
                  <h2 className="text-sm">💰{hotel.price}</h2>
                  <h2 className="text-sm">⭐{hotel.rating}</h2>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Hotels;
