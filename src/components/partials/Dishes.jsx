import React, {  useContext } from "react";
import { swiggyResImagePre } from "../../constants/swiggyResImagePre";
import { defaultImage } from "../../constants/defaultImage";
import cartContext from "../../utils/cartContext";


const Dishes = ({ dishDetails ,carted}) => {
  
  const{setMyCart,myCart}=useContext(cartContext)
  const { name, description, imageId, price, defaultPrice,id } =
    dishDetails?.card?.info;

    const handleClick=()=>{
       if(!carted){
         const newCart=[...myCart,dishDetails]
         setMyCart(newCart)
        }
        else{
            const afterRemoveCart= myCart.filter((item)=>item?.card?.info?.id!==id)
            setMyCart(afterRemoveCart)
        }
    }

  return (
    <div className="w-full min-h-[17vh] bg-sky-50 shadow-2xl my-2 rounded-md flex otems-center justify-between px-2 py-1 ">
      <div id="left" className="w-[65%] h-full">
        <h3>
          {name} - ₹{price / 100 || defaultPrice / 100}
        </h3>
        <p className="text-xs tracking-normal my-2 font-thin leading-none">
          {description || "no description"}
        </p>
      </div>
      <div
        id="right"
        className="w-[20%] h-full rounded-md overflow-hidden relative "
      >
        <img
          className="w-full h-full object-cover"
          src={imageId ? swiggyResImagePre + imageId : defaultImage}
          alt=""
        />
        <button onClick={handleClick} className="px-2 bg-black text-white rounded-md absolute bottom-0 right-[50%] translate-x-[50%]">
         {carted?"remove-":"Add+"}
        </button>
      </div>
    </div>
  );
};

export default Dishes;
