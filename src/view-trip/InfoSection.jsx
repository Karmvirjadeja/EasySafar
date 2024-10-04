import React from "react";
import { Button } from "@/components/ui/button";
import { IoMdDownload } from "react-icons/io";
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
      <div className="flex justify-between items-center">
        <div className="my-5 flex flex-col gap-2">
          <h2 className="font-bold text-2xl">{hotels[0].description}</h2>
          <div className="flex gap-5">
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-lg">
              📅No of days selected by user
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-lg">
              💰budget
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-lg">
              🥂No of travellers
            </h2>
          </div>
        </div>
        <Button>
          <IoMdDownload />
        </Button>
      </div>
    </div>
  );
};

export default InfoSection;
