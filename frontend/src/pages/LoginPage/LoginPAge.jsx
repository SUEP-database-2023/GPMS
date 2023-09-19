import React, { useEffect } from "react";
import { LoginFrom } from "../../components/From";
import { LoginHead } from "../../components/Head";
import LoginPicture from "../../assets/LoginPicture.png";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const initialPath = useSelector((state) => state.user.initialPath);
  const navigate = useNavigate();
  useEffect(() => {
    const storedTokenString = localStorage.getItem("access_token");
    if (storedTokenString) {
      navigate(initialPath);
    }
  }, []);

  return (
    <div className="grid grid-cols-2 grid-rows-2 grid-flow-col-dense bg-white min-w-[1500px]">
      <div className="row-span-1 col-span-1">
        <LoginHead />
      </div>
      <div className="row-span-1 col-span-1  flex justify-center">
        <LoginFrom />
      </div>
      <div className="row-span-2 col-span-2  ">
        <div className="h-full">
          <img src={LoginPicture} className="w-full h-screen" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
