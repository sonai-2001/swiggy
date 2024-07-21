import React, { useContext, useState } from "react";
import userContext from "../../utils/userContext";
import { useNavigate } from "react-router-dom";

const LoginCard = () => {
 
 const {setUser}=useContext(userContext)
 const [value, setValue] =useState("")
 const navigate=useNavigate()
 const handleChange=(e)=>{
         setValue(e.target.value)
 } 
 const handleClick=()=>{
            if(value.trim()===""){
                alert("Please Enter Name")
                return
            }
            setUser(value)
            navigate("/home")
 } 
return (
    <div className="w-[30vw] h-[30vh] bg-sky-100 border flex items-center justify-center ">
      <div>
        <input
        onChange={handleChange}
          className="text-black mx-auto my-5 px-5 outline" 
          type="text"
          placeholder="Enter Your Name"
        />
        <button onClick={handleClick} className="px-3 mx-auto rounded-md block text-white bg-black">
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginCard;
