import React from "react";
import { Button, Input } from "antd";
import AdminApi from "../../components/Api/AdminApi";
import { useSelector } from "react-redux";

const PasswordUpdatePage = () => {
  const [number, setNumber] = React.useState("");
  const [passwordVisible, setPasswordVisible] = React.useState("");
  const token = useSelector((state) => state.user.access_token);
  const handlePassword = () => {
    console.log(token);
    const adminApi = new AdminApi({ token });
    adminApi.resetPassword({ number });
    // setPassword('');
  };

  return (
    <div className="flex flex-col h-screen items-center">
      <div className="flex flex-col items-center space-y-5 w-[75%] bg-white p-5">
        <div className="flex flex-col w-[75%] items-center space-y-5 text-blue-800">
          <div className="text-blue-800 text-3xl pb-10">修改密码</div>
          <div className="flex flex-row ">
            <div className=" w-[80%]">请输入账号:</div>
            <Input.Password
              placeholder="输入账号"
              onChange={(e) => setNumber(e.target.value)}
              value={number}
              visibilityToggle={{
                visible: passwordVisible,
                onVisibleChange: setPasswordVisible,
              }}
            />
          </div>
          <Button
            className="w-[37%] bg-blue-600 text-white"
            onClick={handlePassword}
          >
            重置
          </Button>
        </div>
      </div>
    </div>
  );
};
export default PasswordUpdatePage;
