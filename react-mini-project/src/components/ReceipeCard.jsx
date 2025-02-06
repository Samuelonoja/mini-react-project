import React from "react";
import { useState } from "react";

function ReceipeCard(props) {
  return (
    <>
      <div className="rounded-lg shadow-2xl m-5">
        <img  src={props.image} alt="" className="mx-auto block rounded-t-lg w-58 h-50 object-full"/>
        <p>{props.name}</p>
        <p>{props.calories}</p>
        <p>{props.serving}</p>
        <button onClick={() => props.delete(props.id)}>Delete</button>
      </div>
    </>
  );
}

export default ReceipeCard;
