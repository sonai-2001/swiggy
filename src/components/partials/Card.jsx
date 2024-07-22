import React from "react";
import { swiggyResImagePre } from "../../constants/swiggyResImagePre";

const Card = ({ resDetails }) => {
  const { name, cloudinaryImageId } = resDetails?.info;
  console.log(resDetails);
  return (
    <div className="w-[200px] md:w-[20vw] h-[235px] shadow-lg rounded-md overflow-hidden bg-sky-50 
    ">
      <div className="w-full h-[85%]">
        <img
          className="w-full h-full object-cover"
          src={swiggyResImagePre + cloudinaryImageId}
          alt=""
        />
      </div>
      <div className="text-center font-bold tracking-tight">{name}</div>
    </div>
  );
};

export default Card;
