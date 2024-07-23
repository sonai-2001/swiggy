import React, { useContext, useState } from "react";
import userContext from "../../utils/userContext";
import { useNavigate } from "react-router-dom";

const LoginCard = () => {
  const { setUser } = useContext(userContext);
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleClick = () => {
    if (value.trim() === "") {
      alert("Please Enter Name");
      return;
    }
    setUser(value);
    navigate("/home");
  };
  return (
    <div className="w-[30vw] h-[30vh] bg-orange-50 border border-gray-300 flex items-center justify-center rounded-lg shadow-md  mx-auto  ">
      <div className="flex flex-col items-center">
        <input
          onChange={handleChange}
          className="text-gray-700 px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-orange-500"
          type="text"
          placeholder="Enter Your Name"
        />
        <button
          onClick={handleClick}
          className="px-4 py-2 rounded-md text-white bg-orange-500 hover:bg-orange-600 transition duration-300"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginCard;
