import React from 'react'
import LoginCard from './partials/LoginCard'

function Login() {
  return (
    <div className='w-full h-[90vh] flex items-center justify-center'>

      <div>
      <h1 className='text-center text-lg font-bold'>Enter User Name</h1>
      <LoginCard/>

        </div> 
      
    </div>
  )
}

export default Login