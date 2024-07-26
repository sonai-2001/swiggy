const { createContext } = require("react");

const cartContext=createContext(
    {
        cart:[]
    }
)
export default cartContext;