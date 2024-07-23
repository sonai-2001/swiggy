import React from 'react'
import LoginCard from './partials/LoginCard'

function Login() {
  return (
    <div className="w-full h-[90vh] flex items-center justify-center bg-orange-50 ">
    <div className=" bg-white shadow-md relative rounded-lg p-8 w-[50%] ">
      <h1 className="text-center text-2xl font-bold text-orange-600  mb-4">Enter Username</h1>
      <LoginCard />
    </div>
  </div>
  )
}

export default Login