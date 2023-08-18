import React, { useState, useEffect } from "react";
import { UserOutlined, LockOutlined, ImportOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { setUserSlice } from "../../store/UserSlice";
import { useNavigate } from "react-router-dom";
import { GetAccessToken } from "../../components/Api/AuthApi";
import jwtDecode from "jwt-decode";
import { whatIsMyRole } from "../../utils";

const LoginFrom = () => {
  const [UserNum, setUserNum] = useState("");
  const navigate = useNavigate();
  const [UserPassword, setUserPassword] = useState("");
  const dispatch = useDispatch();
  const url = useSelector((state) => state.api.url);

  const handleLogin = async () => {
    const token = await GetAccessToken(UserNum, UserPassword, url);
    dispatch(setUserSlice(token));
    const storedTokenString = localStorage.getItem("access_token");
    const identity = storedTokenString
      ? jwtDecode(JSON.parse(storedTokenString)).role
      : null;
    const initialPath = whatIsMyRole({ identity });
    navigate(initialPath);
  };

  return (
    <div className="flex flex-col justify-center w-[50%] h-[25%]">
      <div className="text-blue-600 text-3xl bg-gray-100 py-2 text-center">
        账号登录
      </div>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-row justify-center items-center border-2">
          <UserOutlined className="text-blue-800 mr-4" />
          {/* TODO:输入框设置有问题 */}
          <input
            type="text"
            placeholder="请输入账号"
            value={UserNum}
            onChange={(e) => setUserNum(e.target.value)}
            className="input w-full max-w-xs bg-white outline-none"
          />
        </div>
        <div className="flex flex-row justify-center items-center border-2">
          <LockOutlined className="text-blue-800 mr-4" />
          <input
            type="text"
            placeholder="请输入密码"
            value={UserPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            className="input w-full max-w-xs bg-white outline-none"
          />
        </div>
        <button
          onClick={() => {
            handleLogin();
          }}
          className="btn bg-blue-500 border-blue-500 hover:bg-blue-400 hover:border-blue-400 text-white rounded-full"
        >
          提交
        </button>
      </div>
    </div>
  );
};
export default LoginFrom;
