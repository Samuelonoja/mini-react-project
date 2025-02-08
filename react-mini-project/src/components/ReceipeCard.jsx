import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function ReceipeCard(props) {
  return (
    <>
      <div className="rounded-lg shadow-2xl m-5">
        {props.receipeData.image && (
          <img
            src={props.receipeData.image}
            alt=""
            className="mx-auto block rounded-t-lg w-58 h-50 object-full"
          />
        )}
        <p>{props.receipeData.name}</p>
        <p>Calories: {props.receipeData.calories}</p>
        <p>{props.receipeData.serving}</p>

        <div className="flex gap-5">
          <button onClick={() => props.callbackToDelete(props.receipeData.id)}>
            Delete
          </button>

          <Link to={`/Receipe/${props.receipeData.id}`}>
            <button>More Info</button>
          </Link>

          <Link to={`/updaterec/${props.receipeData.id}/${props.receipeData.name}/${props.receipeData.calories}/${props.receipeData.servings}/${encodeURIComponent (props.receipeData.image)}/`}>
          <button>Update</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ReceipeCard;
