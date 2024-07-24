import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useDetails from "../utils/useDetails";
import Shimmer from "../components/partials/Shimmer";
import Title from "./partials/Title";

const Details = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);
  const [indexed, setIndexed] = useState(null);

  const resDetail = useDetails(id);
  console.log(resDetail);
  console.log(id);
  useEffect(() => {
    if (resDetail) {
      setDetail(resDetail);
    }
  }, [resDetail]);

  if (detail === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } = detail[2]?.card?.card?.info;
  const itemCategory =
    detail[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) =>
      c?.card?.card?.["@type"].includes("ItemCategory")
    );
  console.log(itemCategory);

  return (
    <div className="w-full h-[90vh] p-3">
      <div className="w-full">
        <h1 className="text-center font-black text-2xl">{name}</h1>
        <h3 className="text-center">
          {cuisines.join(",")} - {costForTwoMessage}
        </h3>
        <div className="accordians w-full p-2">
          {itemCategory &&
            itemCategory.map((category, index) => (
              <Title
                category={category}
                id={index}
                key={index}
                open={index === indexed ? true : false}
                setIndexed={setIndexed}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
