import React from "react";
import { Button, Input} from "antd";
import PublicApi from "../../components/Api/PublicApi";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearUserSlice } from "../../store/UserSlice";

const PasswordUpdatePage = () => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.access_token);
  const handlePassword = () => {
    const publicApi = new PublicApi(token);
    publicApi.changePassword(passwordVisible);
    dispatch(clearUserSlice());
    navigate("/");
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
