import React from "react";
import { HomeIcon } from "@heroicons/react/20/solid";
import { InformationCircleIcon } from "@heroicons/react/20/solid";
import ReceipeList from "./ReceipeList";
import { useState } from "react";
import ReceipeArr from "../data/ReceipeList.json";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import ReceipeDetail from "./ReceipeDetail";
import AboutUs from "./AboutUs";
import AddNewRec from "./AddNewRec";
import ErrorPage404 from "./ErrorPage404";

function Main() {
  const [displayVariable, setDisplayVariable] = useState(ReceipeArr);
  const [name, setName] = useState("");

  const RemoveReceipe = (id) => {
    const filtteredReceipe = displayVariable.filter(function (element) {
      return element.id !== id;
    });

    setDisplayVariable(filtteredReceipe);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReceipes = {
      name: name
    }
    
    const newReceipeList = [newReceipes, ...displayVariable]

    setDisplayVariable(newReceipeList);

    setName("")
  };

  return (
    <>
      <div className="flex">
        <div className="flex flex-col bg-pink-500 w-64 justify-start max-h-full ">
          <div className="mt-15">
            <hr className="text-white" />
            <ul>
              <li className="my-4 flex gap-2 text-white cursor-pointer">
                <HomeIcon className="h-8 w-8 ml-2 text-white" />
                <Link to="/">
                  <span className="mt-1">Home</span>
                </Link>
              </li>

              <li className="my-4 flex gap-2 text-white cursor-pointer">
                <InformationCircleIcon className="h-8 w-8 ml-2 text-white" />
                <Link to="/aboutus">
                  <span className="mt-1">About</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <Link to="/addreceipe">
              <button className="h-12 p-2 text-center text-white rounded-xl bg-blue-500">
                Add Receipe
              </button>
            </Link>
          </div>

          <section>
            <div className="bg-green-500 flex flex-col justify-center width-auto">
              <form
                onSubmit={handleSubmit}
                className=" p-6 rounded-lg shadow-lg "
              >
                <label>
                <input
                  type="text"
                  name="rcName"
                  placeholder="Receipe Name"
                  value={name}
                  onChange={(e) => {setName(e.target.value)}}
                />
                </label>
              
                <input type="number" name="rcCalories" placeholder="Calories" />
                <input type="text" name="rcImage" placeholder="Image Url" />
                <input type="text" name="rcServings" placeholder="Servings" />
                <button className="text-white">Submit</button>
              </form>
            </div>
          </section>
        </div>

        <Routes>
          <Route
            path="/"
            element={
              <div className="bg-purple-500 p-8 text-white text-4xl w-full max-h-full">
                <ReceipeList
                  receipeArr={displayVariable}
                  callbackToDelete={RemoveReceipe}
                />
              </div>
            }
          />
          <Route
            path="/receipe/:receipeId"
            element={<ReceipeDetail receipeArr={displayVariable} />}
          />

          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/addreceipe" element={<AddNewRec />} />
          <Route path="*" element={<ErrorPage404 />} />
        </Routes>
      </div>
    </>
  );
}

export default Main;
