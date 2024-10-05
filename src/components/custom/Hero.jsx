import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <>
      <div className="flex  flex-col items-center mx-56 gap-9 mt-16">
        <h1 className="font-extrabold text-[60px] text-center ">
          <span className="text-[#48cae4]">We'll Plan trip for you !</span>
        </h1>

        <h2 className="font-bold text-[60px] text-[#588157]">
          AI Powered Trip Planner
        </h2>

        <p className="font-bold  text-center text-gray-500 text-xl  ">
          Discover your next Adventure...
        </p>
        <Link to={"/create-trip"}>
          <Button>Get Started , It's Free</Button>
        </Link>
      </div>
    </>
  );
}

export default Hero;
