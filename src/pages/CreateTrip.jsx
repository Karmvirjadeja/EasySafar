import React, { useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // Ensure your alias is correctly set
import {
  AI_PROMPT,
  SelectBudgetOptions,
  SelectTravelesList,
} from "../constants/options"; // Your options array
import { toast } from "sonner";
import { chatSession } from "../service/AIModel";
import { Link } from "react-router-dom";

function CreateTrip() {
  const [place, setPlace] = useState();
  const [formData, setformData] = useState([]);
  function handleInputChange(name, value) {
    setformData({
      ...formData,
      [name]: value,
    });
  }
  useEffect(() => {
    console.log(formData);
  }, [formData]);

  async function onGenerateTrip() {
    if (
      (formData?.noOfDays > 5 && !formData?.location) ||
      !formData?.budget ||
      !formData?.traveller ||
      !formData?.noOfDays
    ) {
      toast("Please fill all the details or Enter Days less than 6 ");
      return;
    }
    const FINAL_PROMPT = AI_PROMPT.replace(`{location}`, formData?.location)
      .replace(`{totalDays}`, formData?.noOfDays)
      .replace(`{traveller}`, formData?.traveller)
      .replace(`{budget}`, formData?.budget);
    const result = await chatSession.sendMessage(FINAL_PROMPT);
    localStorage.setItem("TripData", result?.response?.text());
  }
  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10">
      <h2 className="font-bold text-3xl">Tell us your travel preferences</h2>
      <p className="mt-3 text-gray-500 text-xl">
        According to your need, we will suggest you the best
      </p>

      <div className="mt-20 flex flex-col gap-10">
        <div>
          <h2 className="text-xl my-3 font-medium">Enter Destination 🏕️🏙️</h2>
          <Input
            placeholder={"Place,City,Country"}
            type="text"
            onChange={(e) => {
              handleInputChange("location", e.target.value);
            }}
          />
        </div>

        <div>
          <h2 className="text-xl my-3 font-medium">
            How many days are you planning your trip?
          </h2>
          <Input
            placeholder={"Ex. 4"}
            type="number"
            onChange={(e) => {
              handleInputChange("noOfDays", e.target.value);
            }}
          />
        </div>
      </div>

      <div className="mt-10">
        <h2 className="font-bold text-3xl">What is your budget?</h2>
        <div className="grid grid-cols-3 gap-5 mt-5 cursor-pointer">
          {SelectBudgetOptions.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                handleInputChange("budget", item.title);
              }}
              className={`p-4 border rounded-lg hover:shadow-xl ${
                formData?.budget == item.title && "shadow-lg border-black"
              }`}
            >
              <h2 className="text-4xl font-medium">{item.icon}</h2>
              <h2 className="font-bold text-lg">{item.title}</h2>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h2 className="font-bold text-3xl">With whom are you planning?</h2>
        <div className="grid grid-cols-3 gap-5 mt-5 cursor-pointer">
          {SelectTravelesList.map((item, index) => (
            <div
              key={index}
              onClick={() => handleInputChange("traveller", item.people)}
              className={`p-4 border rounded-lg hover:shadow-xl ${
                formData?.traveller == item.people && "shadow-lg border-black"
              }`}
            >
              <h2 className="text-4xl font-medium">{item.icon}</h2>
              <h2 className="font-bold text-lg">{item.title}</h2>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="my-10 flex justify-end ">
        <Link to={"/usertrip"}>
          <Button onClick={onGenerateTrip}>Create Trip</Button>
        </Link>
      </div>
    </div>
  );
}

export default CreateTrip;
