import React from "react";

function Hotels() {
  const Hotels = [];
  const tripData = JSON.parse(localStorage.getItem("TripData"));
  const valuesArray = [];
  const { hotels } = tripData;
  Object.values(hotels).forEach((value) => {
    valuesArray.push(value);
  });
  console.log(typeof valuesArray);
  return (
    <div>
      <h2 className="font-bold text-xl mt-5">Hotel Recommendations</h2>

      <div>
        {valuesArray.map((hotel) => {
          return (
            // Add 'return' here
            <div key={hotel.hotelName}>
              {" "}
              {/* Use a unique key for each hotel */}
              <img
                src="/placeholder.jpg"
                alt={hotel.hotelName} // Update alt text for accessibility
                className="rounded-xl"
              />
              <div>{hotel.hotelName}</div> {/* Display hotel name */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Hotels;
