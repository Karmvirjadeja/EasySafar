import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  AI_PROMPT,
  SelectBudgetOptions,
  SelectTravelesList,
} from "../constants/options";
import { toast } from "sonner";
import { chatSession } from "../service/AIModel";
import ClipLoader from "react-spinners/ClipLoader"; // Importing the spinner

function CreateTrip() {
  const [formData, setFormData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handleInputChange(name, value) {
    setFormData({
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
      toast("Please fill all the details or Enter Days less than 6");
      return;
    }

    setIsLoading(true); // Start loading

    try {
      const FINAL_PROMPT = AI_PROMPT.replace(`{location}`, formData?.location)
        .replace(`{totalDays}`, formData?.noOfDays)
        .replace(`{traveller}`, formData?.traveller)
        .replace(`{budget}`, formData?.budget);

      const result = await chatSession.sendMessage(FINAL_PROMPT);
      const tripData = result?.response?.text();

      if (tripData) {
        localStorage.setItem("TripData", tripData);
      }

      if (localStorage.getItem("TripData")) {
        navigate("/usertrip");
      } else {
        toast("Failed to store trip data. Please try again.");
      }
    } catch (error) {
      toast("Error generating trip. Please try again.");
      console.error(error);
    } finally {
      setIsLoading(false); // Stop loading
    }
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
            placeholder={"Place, City, Country"}
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
                formData?.budget === item.title && "shadow-lg border-black"
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
                formData?.traveller === item.people && "shadow-lg border-black"
              }`}
            >
              <h2 className="text-4xl font-medium">{item.icon}</h2>
              <h2 className="font-bold text-lg">{item.title}</h2>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="my-10 flex justify-end">
        <Button onClick={onGenerateTrip} disabled={isLoading}>
          {isLoading ? "Generating Trip..." : "Create Trip"}
        </Button>
      </div>

      {isLoading && (
        <div className="flex justify-center mt-5">
          <ClipLoader color="#007bff" loading={isLoading} size={50} />
        </div>
      )}
    </div>
  );
}

export default CreateTrip;
