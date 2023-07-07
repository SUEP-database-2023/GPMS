import React from "react";
import { Sidebar } from "../Sidebar";
import { Body } from "../Body";
const MyLayOut = ({ items, page, title }) => {
  return (
    <div className="flex h-screen w-screen ">
      <Sidebar items={items} />
      <Body page={page} title={title} />
    </div>
  );
};

export default MyLayOut;
