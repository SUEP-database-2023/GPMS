import React from "react";
import CollegeLogo from "../../assets/CollegeLogo.png";
const LoginHead = () => {
  return (
    <div className="grid grid-cols-5 items-center h-full">
      <div className="col-span-1"></div>
      <div className="col-span-1 h-full flex items-center justify-center">
        <img src={CollegeLogo} className="h-[40%]" alt="College Logo" />
      </div>

      <div className="col-span-3  text-4xl text-black shadow-inner">
        毕业设计管理系统
      </div>
    </div>
  );
};
export default LoginHead;
