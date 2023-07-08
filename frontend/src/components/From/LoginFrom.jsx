import React, { useState } from "react";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { setUserSlice } from "../../store/UserSlice";
import { useNavigate } from "react-router-dom";
import { GetAccessToken } from "../../components/Api/AuthApi";

const LoginFrom = () => {
  const [UserNum, setUserNum] = useState("");
  const navigate = useNavigate();
  const [UserPassword, setUserPassword] = useState("");
  const dispatch = useDispatch();
  const url = useSelector((state) => state.api.url);
  const identity = useSelector((state) => state.user.identity);

  const handleLogin = async () => {
    const token = await GetAccessToken(UserNum, UserPassword, url);
    dispatch(setUserSlice(token));
    console.log(identity);
    if (identity === "0") navigate("/admin");
    else if (identity === "1") navigate("/teacher");
    else if (identity === "2") navigate("/student");
  };

  return (
    <div className="flex flex-col justify-center space-y-4 w-[50%] h-[25%]">
      <div className="w-full text-center">
        <div className="text-blue-600 text-3xl bg-gray-100 py-2">账号登录</div>
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
