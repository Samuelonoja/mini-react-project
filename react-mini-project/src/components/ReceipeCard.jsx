import React from "react";
import { useState } from "react";

function ReceipeCard(props) {
  return (
    <>
      <div>
        <img src={props.image} alt="" />
        <h2>{props.name}</h2>
        <p>{props.calories}</p>
        <p>{props.serving}</p>
        <button onClick={() => props.delete(props.id)}>Delete</button>
      </div>
    </>
  );
}

export default ReceipeCard;
