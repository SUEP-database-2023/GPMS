import React from "react";
import Sidebar from "../Sidebar";
import Body from "../Body";
const Mylayout = ({ items, page }) => {
  return (
    <div className="flex h-screen w-screen ">
      <Sidebar items={items} />
      <Body page={page} />
    </div>
  );
};

export default Mylayout;
