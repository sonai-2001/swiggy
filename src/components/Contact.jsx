import React, { useContext } from 'react'
import userContext from '../utils/userContext'
import NotAllowed from './NotAllowed'

const Contact = () => {
  
  const{userName}=useContext(userContext)
  
  if(userName===null) return <NotAllowed/>
  
  
  return (
    <div>Contact</div>
  )
}

export default Contact