import React from "react";
import { Button } from "@/components/ui/button";
import { FaSearchLocation } from "react-icons/fa";
import { Link } from "react-router-dom";
function PlaceCardItem({ place }) {
  return (
    <div className="border rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 transition-all shadow-md cursor-pointer">
      <img
        src="/placeholder.jpg"
        alt="destinations"
        className="w-[130px] h-[130px] rounded-xl"
      />
      <div>
        <h2 className="font-bold text-lg">{place.place}</h2>
        <p className="text-sm text-gray-500">{place.placeDetails}</p>
        <h2 className="text-sm">⭐{place.rating}</h2>
        <Link
          to={`https://www.google.com/maps/search/?api=1&query= +${place.place}+
                ${place.placeDetails}`}
          target="_blank"
        >
          <Button size="sm">
            <FaSearchLocation />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default PlaceCardItem;
