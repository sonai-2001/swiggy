import { Outlet } from "react-router-dom";
import Nav from "./components/Nav"
import userContext from "./utils/userContext";
import cartContext from "./utils/cartContext";
import { useState } from "react";
function App() {
  
  const [user, setUser] = useState(null)
  const[myCart,setMyCart]=useState([])
  return (
    <div className='w-full h-screen'>
      <cartContext.Provider value={{myCart,setMyCart}}>
       <userContext.Provider value={{
        userName:user,setUser
       }}>
        <Nav/> 
        <Outlet/> 
        </userContext.Provider>
        </cartContext.Provider>
    </div>
  );
}

export default App;
