import React from "react";
import { Link } from "react-router-dom";

function NotAllowed() {
  return (
    <div className="w-full h-[90vh] flex items-center justify-center">
     <Link to="/">please login first</Link> 
    </div>
  );
}

export default NotAllowed;
