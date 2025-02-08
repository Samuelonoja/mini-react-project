import React from "react";
import { useState } from "react";
import { Link, useParams  } from "react-router-dom";

function UpdateRec(props) {

  const { receipeId, receipeName, receipeCal, receipeImage, receipeServ } = useParams();
  const [name, setName] = useState(receipeName);
  const [calories, setCalories] = useState(receipeCal);
  const [image, setImage] = useState(receipeImage);
  const [serving, setServing] = useState(receipeServ);

 

  const handleSubmit = (e) => {
    e.preventDefault();

    const newReceipes = {
      id: receipeId,
      name: name,
      image: image,
      calories: calories,
      servings: serving,
    };
    

    props.callbackToUpdate(newReceipes);

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
              placeholder={receipeName}
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
              placeholder={receipeCal}
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
              placeholder={receipeImage}
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
              placeholder={receipeServ}
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

export default UpdateRec;
