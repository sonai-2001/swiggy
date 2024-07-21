import React, { useContext } from 'react'
import userContext from '../utils/userContext'
import NotAllowed from "./NotAllowed"

function About() {
 const{userName}=useContext(userContext)
  
 if(userName===null) return <NotAllowed/>
 return (
    <div>About</div>
  )
}

export default About