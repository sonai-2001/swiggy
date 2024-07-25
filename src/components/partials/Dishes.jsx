import React from "react";
import { swiggyResImagePre } from "../../constants/swiggyResImagePre";
import {defaultImage} from "../../constants/defaultImage"

const Dishes = ({ dishDetails }) => {
  const { name, description, imageId, price, defaultPrice } =
    dishDetails?.card?.info;
    
  return (
    <div className="w-full min-h-[17vh] bg-sky-50 shadow-2xl my-2 rounded-md flex otems-center justify-between px-2 py-1 ">
      <div id="left" className="w-[65%] h-full">
        <h3>
          {name} - ₹{price / 100 || defaultPrice / 100}
        </h3>
        <p className="text-xs tracking-normal my-2 font-thin leading-none">
          {description || "no description"}
        </p>
      </div>
      <div id="right" className="w-[20%] h-full rounded-md overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={ imageId ? swiggyResImagePre + imageId : defaultImage}
          alt=""
        />
      </div>
    </div>
  );
};

export default Dishes;
