import { useEffect, useState } from "react";
import {homePageApi} from "../constants/homePageApi"
const useRes=()=>{
    const [res,setRes]=useState(null)
    
   useEffect(()=>{
        getData();
   },[])
    
    const getData=async ()=>{
           const raw=await fetch(homePageApi);
           const data=await raw.json()
           console.log(data)
           const restaurants=data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
           console.log(restaurants)
           setRes(restaurants)
           
    }
    
    return res;
}

export default useRes;