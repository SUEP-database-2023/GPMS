import React from "react";
import logo from "../../../assets/logo.png";
import Menu from "../../Menu";

const Sidebar = ({ main, items }) => {
  return (
    <div className="flex h-screen w-screen">
      <div className="bg-gradient-to-b from-blue-600 to-blue-900 w-1/6 flex flex-col items-center ">
        <div className="w-48 h-48 flex items-center justify-center ">
          <img
            src={logo}
            className="object-contain w-[50%] h-full "
            alt="Logo"
          />
        </div>
        <div className="space-y-8">
          <div>
            <h1 className="text-center text-lg text-white">毕业设计管理系统</h1>
          </div>
          <Menu items={items} />
        </div>
      </div>
      <div className="flex-1 bg-white">{main}</div>
    </div>
  );
};

export default Sidebar;
