import React from "react";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
const LoginFrom = () => {
  return (
    <div className="flex flex-col justify-center space-y-4 w-[50%] h-[35%]">
      <div className="w-full text-center">
        <div className="text-blue-600 text-3xl bg-gray-100 py-2">账号登录</div>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-row justify-center items-center border-2">
          <UserOutlined className="text-blue-800 mr-4" />
          <input
            type="text"
            placeholder="请输入账号"
            className="input w-full max-w-xs bg-white outline-none"
          />
        </div>
        <div className="flex flex-row justify-center items-center border-2">
          <LockOutlined className="text-blue-800 mr-4" />
          <input
            type="text"
            placeholder="请输入密码"
            className="input w-full max-w-xs bg-white outline-none"
          />
        </div>
        <button className="btn bg-blue-500 border-blue-500 hover:bg-blue-400 hover:border-blue-400 text-white rounded-full">
          提交
        </button>
      </div>
    </div>
  );
};
export default LoginFrom;
