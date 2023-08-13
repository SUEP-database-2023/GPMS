import React from "react";
import { Button, Input,message} from "antd";
import PublicApi from "../Api/PublicApi";
import { clearUserSlice } from "../../store/UserSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const PasswordUpdate = () => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [originalPassword, setOriginalPassword] = React.useState(false);
  const [newPassword, setNewPassword] = React.useState(false);
  const [confirmPassword, setConfirmPassword] = React.useState(false);
  const token = useSelector((state) => state.user.access_token);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlePasswordChange = (e) => {
    setOriginalPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handlePassword = async () => {
    try {
      if (newPassword !== confirmPassword) {
        message.error('新密码和确认密码不匹配！');
        return;
      }

      const publicApi = new PublicApi(token);
      await publicApi.changePassword(newPassword);
      
      dispatch(clearUserSlice());
      navigate('/');
    } catch (error) {
      console.error('Password update error:', error);
      // 处理密码更新错误，如显示错误信息等
    }
  };

  return (
    <div className="flex flex-col h-screen items-center">
      <div className="flex flex-col items-center space-y-5 w-[75%] bg-white p-5">
        <div className="flex flex-col w-[75%] items-center space-y-5 text-blue-800">
          <div className="text-blue-800 text-3xl pb-10">修改密码</div>
          <div className="flex flex-row ">
            <div className="w-[80%]">请输入原密码:</div>
            <Input.Password
              placeholder="input password"
              value={originalPassword}
              onChange={handlePasswordChange}
              visibilityToggle={{
                visible: passwordVisible,
                originalPassword: setOriginalPassword,
              }}
            />
          </div>
          <div className="flex flex-row">
            <div className="w-[80%]">请输入新密码:</div>
            <Input.Password
              placeholder="input password"
              value={newPassword}
              onChange={handleNewPasswordChange}
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
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              visibilityToggle={{
                visible: passwordVisible,
                onVisibleChange: setPasswordVisible,
              }}
            />
          </div>
          <Button className="w-[37%] bg-blue-600 text-white" onClick={handlePassword}>
            修改密码
          </Button>
        </div>
      </div>
    </div>
  );
};
export default PasswordUpdate;
