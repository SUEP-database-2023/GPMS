import React from "react";
import CollegeLogo from "../../assets/CollegeLogo.png";
const LoginHead = () => {
  return (
    <div className="flex flex-row justify-center items-center h-[15%]">
      <img src={CollegeLogo} className="h-[70%] pr-5" />
      <div className="text-4xl text-black shadow-inner">毕业设计管理系统</div>
    </div>
  );
};
export default LoginHead;
