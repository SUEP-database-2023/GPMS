import React from "react";
import { Button, Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { changeDarkMode } from "../../store/ConfigSlice";
import { BulbFilled, BulbOutlined } from "@ant-design/icons";
const { Header, Sider, Content } = Layout;
import "../../index.css";

const MyLoginLayOut = ({ MyLoginFrom }) => {
  const isDarkMode = useSelector((state) => state.config.isDarkMode);
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-center h-screen">
      <Layout>
        <Content>
          <div className="flex items-center justify-center h-screen">
            <MyLoginFrom />
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default MyLoginLayOut;
