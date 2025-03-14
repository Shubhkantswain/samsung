import { Outlet } from "@remix-run/react";
import React from "react";

const MobileLayout = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative flex items-center justify-center w-[250px] h-[500px] bg-black rounded-[25px] shadow-lg overflow-hidden border-[4px] border-black">
        {/* Punch-Hole Camera */}
        <div className="absolute top-2 w-full flex justify-center">
          <div className="w-3 h-3 bg-black rounded-full"></div>
        </div>
        {/* Screen Content with Background Image */}
        <div
          className="w-full h-full bg-white flex flex-col bg-cover bg-center"
          style={{ backgroundImage: "url('https://m.media-amazon.com/images/I/A1kR2a1M2+L.jpg')" }} // Replace with actual image path
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MobileLayout;
