import React from "react";
import ReceipeList from "../data/ReceipeList.json";
import { useState } from "react";
import ReceipeCard from "./ReceipeCard";

function Receipe() {
  const [displayVariable, setDisplayVariable] = useState(ReceipeList);

  const RemoveReceipe = (id) => {
    const filtteredReceipe = displayVariable.filter(function (element) {
      return element.id !== id;
    });

    setDisplayVariable(filtteredReceipe);
  };
  return (
    <div className="flex flex-col">
      {displayVariable.map((elements) => {
        return (
          <div>
            <ReceipeCard
              key={elements.id}
              image={elements.image}
              name={elements.name}
              calories={elements.calories}
              serving={elements.servings}
              delete={RemoveReceipe}
              id={elements.id}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Receipe;
