import React from "react";
import CollegeLogo from "../../../assets/CollegeLogo.png";
import { Menu } from "../Menu";

const Sidebar = ({ items }) => {
  return (
    <div className="bg-gradient-to-b from-blue-600 to-blue-900 w-[20%] flex flex-col items-center">
      <div className="w-48 h-48 flex items-center justify-center ">
        {/* TODO:图片大小 */}
        <img
          src={CollegeLogo}
          className="object-contain w-[75%] h-full "
          alt="Logo"
        />
      </div>
      <div className="space-y-8 w-full">
        <div>
          {/* TODO:字体 */}
          <h1 className="text-2xl text-center text-white">
            毕业设计选题管理系统
          </h1>
        </div>
        <Menu items={items} />
      </div>
    </div>
  );
};

export default Sidebar;
