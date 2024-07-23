import React from "react";
import { swiggyResImagePre } from "../../constants/swiggyResImagePre";

const Card = ({ resDetails }) => {
  const { name, cloudinaryImageId } = resDetails?.info;
  console.log(resDetails);
  return (
    <div
      className="w-[200px] md:w-[20vw] h-[235px] shadow-lg rounded-md overflow-hidden bg-sky-50 
    "
    >
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

const modifyCard = (Card) => {
  return ({resDetails}) => {
    return (
      <div className="relative">
        <span className="px-2 bg-black text-white rounded-md absolute top-0 left-0">
          TopRated
        </span>
        <Card resDetails={resDetails} />
      </div>
    );
  };
};

export {modifyCard}

export default Card;
