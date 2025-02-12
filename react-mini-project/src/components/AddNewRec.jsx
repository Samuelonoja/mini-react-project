import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function AddNewRec(props) {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [image, setImage] = useState("");
  const [serving, setServing] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newReceipes = {
      name: name,
      calories: calories,
      image: image,
      serving: serving,
    };
    

    props.callbackToAdd(newReceipes);

    setName("");
    setCalories("");
    setImage("");
    setServing("");
  };

  return (
    <section>
      <div className="bg-green-500 flex flex-col justify-center width-auto min-h-full">
        <form onSubmit={handleSubmit} className=" p-6 rounded-lg shadow-lg ">
          <label>
            <input
              type="text"
              name="rcName"
              placeholder="Receipe Name"
              value={name}
              required={true}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </label>

          <label>
            <input
              type="number"
              name="rcCalories"
              placeholder="Calories"
              min={1}
              max={500}
              value={calories}
              required={true}
              onChange={(e) => {
                setCalories(e.target.value);
              }}
            />
          </label>

          <label>
            <input
              type="text"
              name="rcImage"
              placeholder="Image Url"
              value={image}
              onChange={(e) => {
                setImage(e.target.value);
              }}
            />
          </label>

          <label>
            <input
              type="text"
              name="rcServings"
              placeholder="Servings"
              min={1}
              max={20}
              value={serving}
              required={true}
              onChange={(e) => {
                setServing(e.target.value);
              }}
            />
          </label>

          <button  className="text-white">Submit</button>
          
          <Link to= "/">
          <button className="text-white" >Done</button>
          </Link>

        </form>
      </div>
    </section>
  );
}

export default AddNewRec;
