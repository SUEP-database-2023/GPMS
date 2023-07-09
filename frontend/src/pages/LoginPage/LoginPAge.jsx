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
    <div className="flex w-screen h-screen bg-white">
      <div className="h-screen w-[45%] flex flex-col items-center justify-center mt-[-5%]">
        {/* TODO:整体上移? */}
        <LoginHead />
        <LoginFrom />
      </div>
      <div className="h-screen w-[55%]">
        {/* TODO: 图片设置有问题*/}
        <img src={LoginPicture} className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default LoginPage;
