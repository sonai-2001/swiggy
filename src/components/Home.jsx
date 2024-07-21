import React, { useContext, useState } from "react";
import userContext from "../utils/userContext";
import NotAllowed from "./NotAllowed.jsx";
import useRes from "../utils/useRes.js";
import Shimmer from "./partials/Shimmer.jsx";

function Home() {
  const { userName } = useContext(userContext);
  const [firstRendered, setFirstRendered] = useState(true)
  const res = useRes();
  console.log(res)
  console.log("rendered")
  


  if (userName === null) return <NotAllowed />;

  if (res === null) return <Shimmer />;
  
  return (
    <div className="w-full h-[90vh] flex items-center justify-between flex-wrap gap-5 p-3">
      
    </div>
  );
}

export default Home;
