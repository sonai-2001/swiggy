import React, { useContext, useState } from "react";
import cartContext from "../utils/cartContext";

const Payment = () => {
  const { myCart } = useContext(cartContext);
  const[paymentSuccess,setPaymentSuccess]=useState(false)
  
  const handleClick =()=>{
    console.log("clicked")  
    setPaymentSuccess(true)
  }

  const totalPrice = myCart.reduce((acc, item) => {
    acc = acc + (item.card.info.price || item.card.info.defaultPrice);
    return acc;
  }, 0);
  
  return (
    <div className="w-full h-[90vh] flex items-center justify-center">
     {
        !paymentSuccess?(
            <div className="w-[50vw] h-[20vh] bg-orange-100 relative shadow-xl rounded-md flex justify-center items-center">
            <div>
            <h1 className="text-center">
              {" "}
              Your Total AMount To Be payed {totalPrice / 100}{" "}
            </h1>
            <button onClick={handleClick} className="px-2 py-1 bg-sky-200 absolute top-[70%] left-[50%] -translate-x-[50%] rounded-md">Pay</button>
            </div>
          </div>
        ):(
            <div>
                <h1>Payment Successful</h1>
            </div>
        )
     }
    </div>
  );
};

export default Payment;
