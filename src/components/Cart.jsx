import React, { useContext } from 'react'
import userContext from '../utils/userContext'
import NotAllowed from './NotAllowed'
import cartContext from "../utils/cartContext";
import Dishes from "../components/partials/Dishes"
import { Link } from 'react-router-dom';

function Cart() {
 
  const{userName}=useContext(userContext)
  const{myCart,setMyCart}=useContext(cartContext)
  
 if(userName===null) return <NotAllowed/>
 
  return (
    <div className='w-full h-[90vh]'>
        <h1 className='text-center text-2xl font-bold'>Hi {userName},</h1>
        <h3 className='text-center my-5 font-bold'>Your cart has {myCart.length} items  </h3>
        <div id='added-dishes' className='p-3 w-[50vw] mx-auto'>
              {myCart.map((itemAdded,index)=><Dishes dishDetails={itemAdded} key={index} carted={true}/>)}
        </div>
        <div className='text-center'>
        {
          myCart.length>0 && <Link to="/payment" className="px-2 bg-sky-400 rounded-md ">
          Proceed To Payment
        </Link>
        }
        </div>

    </div>
  )
}

export default Cart