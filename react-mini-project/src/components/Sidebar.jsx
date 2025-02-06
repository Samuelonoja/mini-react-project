import React from "react";
import { HomeIcon } from "@heroicons/react/20/solid";
import { InformationCircleIcon } from "@heroicons/react/20/solid";
import Receipe from "./ReceipeList";

function Sidebar() {
  return (
    <>
    <div className="flex">

    
      <div className="flex flex-col bg-pink-500 w-64 justify-start h-auto ">
        <div className="mt-15">
          <hr className="text-white" />
          <ul>
            <li className="my-4 flex gap-2 text-white cursor-pointer">
              <HomeIcon className="h-8 w-8 ml-2 text-white" />
              <span className="mt-1">Home</span>
            </li>

            <li className="my-4 flex gap-2 text-white cursor-pointer">
              <InformationCircleIcon className="h-8 w-8 ml-2 text-white" />
              <span className="mt-1">About</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* sidebar extra display space e.g dashboard */}
      <div className="bg-purple-500 p-8 w-full text-white text-4xl">
          <h2>Display Area</h2>
          <Receipe/>
        </div>

        </div>

    </>
  );
}

export default Sidebar;
