import React, { useEffect } from "react";
import Search from "./Search";
import AddButton from "./AddButton";

const SidebarLayout = ({ className, children }) => {
  
  return (
    <>
      <div className=' flex justify-between mt-2 px-5'>
        <h1 className=' font-medium text-2xl'>Chats</h1>
        <AddButton/>
      </div>
      <div className=" px-5">
        <Search/>
      </div>
      <div className={className}>{children}</div>
  
    </>
  );
};

export default SidebarLayout;