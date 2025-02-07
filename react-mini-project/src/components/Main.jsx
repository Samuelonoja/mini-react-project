import React from "react";
import { HomeIcon } from "@heroicons/react/20/solid";
import { InformationCircleIcon } from "@heroicons/react/20/solid";
import ReceipeList from "./ReceipeList";
import { useState } from "react";
import ReceipeArr from "../data/ReceipeList.json";
import { NavLink, Route, Routes } from "react-router-dom";
import ReceipeDetail from "./ReceipeDetail";

function Main() {
  const [displayVariable, setDisplayVariable] = useState(ReceipeArr);

  const RemoveReceipe = (id) => {
    const filtteredReceipe = displayVariable.filter(function (element) {
      return element.id !== id;
    });

    setDisplayVariable(filtteredReceipe);
  };

  <Routes>
    <Route
      path="/Receipe/:receipeId"
      element={<ReceipeDetail receipeArr={displayVariable} />}
    />
  </Routes>;

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

        <Routes>
          <Route
            path="/"
            element={
              <div className="bg-purple-500 p-8 text-white text-4xl w-full">
                <ReceipeList
                  receipeArr={displayVariable}
                  callbackToDelete={RemoveReceipe}
                />
              </div>
            }
          />
          <Route
            path="/recipes/:recipeId"
            element={<ReceipeDetail receipeArr={displayVariable} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default Main;
