import React, { useEffect, useState } from "react";
import Dishes from "./Dishes";

const Title = (props) => {
  // console.log(props);
  const [clicked, setClicked] = useState(null);
  const { categories } = props?.category?.card?.card || [];
  const [dag, setDag] = useState(null);

  const { open, setIndexed, id, title, itemCards,nested } = props;
console.log("itemCards are",itemCards)
console.log("categories are",categories);

  useEffect(() => {
    if (!open) {
      setClicked(false);
    } else {
      setClicked(true);
    }
  }, [open]);
  const handleClick = () => {
    if (clicked) {
      setIndexed(null);
    } else {
      setIndexed(id);
    }
  };
  return (
    <div className={`w-[50vw] mx-auto min-h-[15vh] ${nested?"bg-slate-200":"bg-orange-100"} shadow-2xl my-3 rounded-md p-2`}>
      <div
        onClick={handleClick}
        className="flex items-center justify-between px-4 cursor-pointer"
      >
        <span className="text-xl ">{title}</span>
        <span className="text-xl font-bold">↓</span>
      </div>
      <div id="Dishes" className="p-2">
        {open && (itemCards?.length>0
          ? itemCards.map((d, index) => <Dishes dishDetails={d} key={index} />)
          :categories?.length>0 ?categories.map((category, index) => (
              <Title
                title={category.title}
                itemCards={category.itemCards}
                key={index}
                id={index}
                setIndexed={setDag}
                open={index === dag ? true : false}
                nested={true}
              />
            )):null)}
      </div>
    </div>
  );
};

export default Title;
