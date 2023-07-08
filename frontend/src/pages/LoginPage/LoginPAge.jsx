import React from "react";
import { LoginFrom } from "../../components/From";
import { LoginHead } from "../../components/Head";
import LoginPicture from "../../assets/LoginPicture.png";
const LoginPage = () => {
  return (
    <div className="flex w-screen h-screen bg-white">
      <div className="h-screen w-[45%] flex flex-col items-center justify-center">
        <LoginHead />
        <LoginFrom />
      </div>
      <div className="h-screen w-[55%] bg-blue-400">
        <img src={LoginPicture} className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default LoginPage;
