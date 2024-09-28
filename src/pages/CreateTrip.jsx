import React, { useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { Input } from "@/components/ui/input"; // Ensure your alias is correctly set
import { SelectBudgetOptions } from "../constants/options"; // Your options array

function CreateTrip() {
  const [place, setPlace] = useState();

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10">
      <h2 className="font-bold text-3xl">Tell us your travel preferences</h2>
      <p className="mt-3 text-gray-500 text-xl">
        According to your need, we will suggest you the best
      </p>

      <div className="mt-20 flex flex-col gap-10">
        <div>
          <h2 className="text-xl my-3 font-medium">Enter Destination</h2>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            selectProps={{
              value: place,
              onChange: (e) => {
                setPlace(e);
              },
            }}
          />
        </div>

        <div>
          <h2 className="text-xl my-3 font-medium">
            How many days are you planning your trip?
          </h2>
          <Input placeholder={"Ex. 4"} type="number" />
        </div>
      </div>

      <div className="mt-10">
        <h2 className="font-bold text-3xl">What is Your Budget?</h2>
        <div className="grid grid-cols-3 gap-5 mt-5">
          {SelectBudgetOptions.map((item, index) => (
            <div key={index} className="p-4 border rounded-lg hover:shadow">
              <h2 className="text-lg font-medium">{item.icon}</h2>
              <h2 className="text-lg font-bold">{item.title}</h2>
              <p className="text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CreateTrip;
