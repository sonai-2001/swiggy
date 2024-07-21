import { Outlet } from "react-router-dom";
import Nav from "./components/Nav"
import userContext from "./utils/userContext";
import { useState } from "react";
function App() {
  
  const [user, setUser] = useState(null)
  return (
    <div className='w-full h-screen'>
       <userContext.Provider value={{
        userName:user,setUser
       }}>
        <Nav/> 
        <Outlet/> 
        </userContext.Provider>
    </div>
  );
}

export default App;
