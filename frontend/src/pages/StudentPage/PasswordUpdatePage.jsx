import React from "react";
import { EyeTwoTone, EyeInvisibleOutlined } from "@ant-design/icons";
import { Button, Input, Space } from "antd";
const PasswordUpdatePage = () => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  return (
    <div className="flex flex-col h-screen items-center">
      <div className="flex flex-col items-center space-y-5 w-[75%] bg-white p-5">
        <div className="flex flex-col w-[75%] items-center space-y-5 text-blue-800">
          <div className="text-blue-800 text-3xl pb-10">修改密码</div>
          <div className="flex flex-row ">
            <div className=" w-[80%]">请输入原密码:</div>
            <Input.Password
              placeholder="input password"
              visibilityToggle={{
                visible: passwordVisible,
                onVisibleChange: setPasswordVisible,
              }}
            />
          </div>
          <div className="flex flex-row">
            <div className="w-[80%]">请输入新密码:</div>
            <Input.Password
              placeholder="input password"
              visibilityToggle={{
                visible: passwordVisible,
                onVisibleChange: setPasswordVisible,
              }}
            />
          </div>
          <div className="flex flex-row">
            <div className="w-[80%]">再输入新密码:</div>
            <Input.Password
              placeholder="input password"
              visibilityToggle={{
                visible: passwordVisible,
                onVisibleChange: setPasswordVisible,
              }}
            />
          </div>
          <Button className="w-[37%] bg-blue-600 text-white">
            Default Button
          </Button>
        </div>
      </div>
    </div>
  );
};
export default PasswordUpdatePage;
