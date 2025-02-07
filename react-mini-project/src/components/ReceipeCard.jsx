import React from "react";
import { useState } from "react";

function ReceipeCard(props) {
  return (
    <>
      <div className="rounded-lg shadow-2xl m-5">
        <img  src={props.receipeData.image} alt="" className="mx-auto block rounded-t-lg w-58 h-50 object-full"/>
        <p>{props.receipeData.name}</p>
        <p>Calories: {props.receipeData.calories}</p>
        <p>{props.receipeData.serving}</p>

        <div className="flex gap-5">
        <button onClick={() => props.callbackToDelete(props.receipeData.id)}>Delete</button>
        <button>More Info</button> 
        </div>
        
      </div>
    </>
  );
}

export default ReceipeCard;
