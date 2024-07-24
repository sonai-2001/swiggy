import React from "react";
import {swiggyResImagePre} from"../../constants/swiggyResImagePre"

const Dishes = ({dishDetails}) => {
 
     const{name,description,imageId,price}=dishDetails?.card?.info
    return (
    <div className="w-full h-[15vh] bg-sky-100 shadow-2xl my-2 rounded-md flex otems-center justify-between px-2 py-1 ">
      <div id="left" className="w-[60%] h-full">
        <h3>{name} - ₹{price/100}</h3>
        <p className="text-xs my-2 font-thin">
          {description || "no description"}
        </p>
      </div>
      <div id="right" className="w-[20%] h-full rounded-md overflow-hidden">
         <img className="w-full h-full object-cover" src={swiggyResImagePre+imageId} alt="" />
      </div>
    </div>
  );
};

export default Dishes;
