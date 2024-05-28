import React, { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import BottomNavbar from "../components/BottomNavbar";

import Mainimage from "../assets/Image/Mainimage.svg";

import Comintro from "../assets/Image/Comintro.svg";
import guide from "../assets/Image/guide.svg";
import selfquote from "../assets/Image/selfquote.svg";
import eventreview from "../assets/Image/eventreview.svg";
import planner from "../assets/Image/planner.svg";

const Mainpage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 w-50">
      <div className="relative bg-white shadow-md w-[600px] h-full">
        <Header />
        <Navbar />
        <div className="flex absolute" style={{ top: "180px" }}>
          <img style={{ width: "550px" }} src={Mainimage} />
        </div>
        <BottomNavbar />
      </div>
    </div>
  );
};

export default Mainpage;
