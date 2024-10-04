import React from "react";
import { useState } from "react";
import InfoSection from "../view-trip/InfoSection";
import Hotels from "../view-trip/Hotels";
import PlacesToVisit from "../view-trip/PlacesToVisit";
const Trip = () => {
  const [trip, setTrip] = useState([]);

  return (
    <>
      <div className="p-10 md:px-20 lg:px-44 xl:px-56">
        {<InfoSection />}
        {/*recommended Hotels */}
        <Hotels />
        {/*Daily Plans */}
        <PlacesToVisit />
        {/*Footer */}
      </div>
    </>
  );
};

export default Trip;
