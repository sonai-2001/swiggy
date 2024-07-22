import React, { useContext, useEffect, useState } from "react";
import userContext from "../utils/userContext";
import NotAllowed from "./NotAllowed.jsx";
import useRes from "../utils/useRes.js";
import Shimmer from "./partials/Shimmer.jsx";
import Card from "./partials/Card.jsx";

function Home() {
  const { userName } = useContext(userContext);
  const res = useRes();
  const [resToShow, setResToShow] = useState(null);
  const[topShow,setTopShow]=useState(false)
  console.log(res);
  console.log("rendered");
  useEffect(() => {
    if (res) {
      setResToShow(res);
    }
  }, [res]);

  const handleClick=()=>{
     if(topShow===false) {
      const topRated=res.filter((r)=>r?.info?.avgRating>=4.5)
      console.log("clicked",topRated)
      setResToShow(topRated)
      setTopShow(!topShow)
     } 
     else{
      setResToShow(res)
      setTopShow(!topShow)
     }  
        
  }

  const handleChange=(e)=>{
          if(e.target.value.trim()===""){
            setResToShow(res)
          }
          else{
               const filtered= res.filter((r)=>r?.info?.name.toLowerCase().includes(e.target.value.trim().toLowerCase()))
               console.log(filtered)
               setResToShow(filtered)
          }
  }

  if (userName === null) return <NotAllowed />;

  if (res === null) return <Shimmer />;
  

  return (
    <div className="">
      <div className="w-full h-[8vh]  flex items-center justify-center gap-2 ">
        <input
          onChange={handleChange}
          className="outline-none bg-slate-200 text-center"
          type="text"
          placeholder="search Here"
        />
        <button onClick={handleClick} className="bg-orange-300 hover:bg-orange-500 rounded px-2 ">
         {topShow?"All":"Top Rated"}
        </button>
      </div>

      <div className="w-full h-[80vh] flex items-center justify-center flex-wrap gap-6 py-1 px-4">
        {resToShow &&
          resToShow.map((r) => <Card resDetails={r} key={r.info.id} />)}
      </div>
    </div>
  );
}

export default Home;
