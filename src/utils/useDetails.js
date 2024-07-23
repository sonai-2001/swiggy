
import { useEffect, useState } from "react";
import {swiggyResDetailApiPre} from "../constants/swiggyResDetailApiPre"
const useDetails=(id)=>{
    const[resDetail,setResDetail]=useState(null)
    
     useEffect(()=>{
        
        const getDetails=async ()=>{
            const api=swiggyResDetailApiPre+id
             const raw=await fetch(api)
             const data=await raw.json()
             console.log(data.data.cards)
             setResDetail(data.data.cards)
         }
        getDetails();
       
     },[id])


   
    
    
    return resDetail
}
export default useDetails