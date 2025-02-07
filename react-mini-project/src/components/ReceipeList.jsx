import React from "react";
import ReceipeList from "../data/ReceipeList.json";
import { useState } from "react";
import ReceipeCard from "./ReceipeCard";

function Receipe(props) {

  return (
    <div className="flex flex-col">
      {props.receipeArr.map((elements) => {
        return (
          <div>
            <ReceipeCard receipeData = {elements}
              key = {elements.id}
              callbackToDelete = {props.callbackToDelete}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Receipe;
