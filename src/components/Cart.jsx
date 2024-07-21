import React, { useContext } from 'react'
import userContext from '../utils/userContext'
import NotAllowed from './NotAllowed'

function Cart() {
 
  const{userName}=useContext(userContext)
  
 if(userName===null) return <NotAllowed/>
 
  return (
    <div>Cart</div>
  )
}

export default Cart