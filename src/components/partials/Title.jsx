import React, { useState } from "react";
import Dishes from "./Dishes";

const Title = (props) => {
  console.log(props);
  const[clicked,setClicked]=useState(false)
  const { title, itemCards } = props?.category?.card?.card;
  const{open,setIndexed,id}=props
  const handleClick = () => {
     if(clicked){
      setIndexed(null)
      return
     }
    setIndexed(id);
    setClicked(!clicked)
  };
  return (
    <div className="w-[50%] mx-auto min-h-[15vh] bg-orange-100 shadow-2xl my-3 rounded-md p-2">
      <div
        onClick={handleClick}
        className="flex items-center justify-between px-4"
      >
        <span className="text-xl ">{title}</span>
        <span className="text-xl font-bold">↓</span>
      </div>
      <div id="Dishes" className="p-2">
        {open &&
          itemCards &&
          itemCards.map((d, index) => <Dishes dishDetails={d} key={index} />)}
      </div>
    </div>
  );
};

export default Title;
