import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Button, Layout, Menu, Typography, Divider } from "antd";
import Logo from "../../assets/logo.png";
import "../../index.css";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  BulbFilled,
  BulbOutlined,
} from "@ant-design/icons";
import { changeDarkMode } from "../../store/ConfigSlice";

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

function MyLayOut({ menuItems }) {
  const userName = useSelector((state) => state.user.userName);
  const isDarkMode = useSelector((state) => state.config.isDarkMode);
  const [collapsed, setCollapsed] = useState(false);
  const dispatch = useDispatch();

  const generateRoutes = () => {
    return menuItems.map((item) => (
      <Route key={item.id} path={item.url} element={item.element} />
    ));
  };
  return (
    <>
      <Layout className=" h-screen">
        <Sider
          collapsed={collapsed}
          breakpoint="lg"
          collapsedWidth="0"
          theme="light"
        >
          <div className="flex flex-col justify-center items-center my-20">
            <img src={Logo} alt="Logo" className="w-1/2 border-none mb-8" />
            <div>
              <Title level={2}>你好!</Title>
            </div>
            <div>
              <Title level={2}>{userName}</Title>
            </div>
          </div>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={menuItems.map((item) => ({
              key: item.key,
              icon: item.icon,
              label: <Link to={item.url}>{item.label}</Link>,
            }))}
          />
        </Sider>

        <Layout>
          <Header
            className={`bg-${isDarkMode ? "black" : "white"} flex items-center`}
          >
            <div className="flex items-center flex-grow">
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                className="text-base w-20 h-20"
              />
              <div className="ml-auto">
                <Button
                  type="text"
                  icon={isDarkMode ? <BulbOutlined /> : <BulbFilled />}
                  onClick={() => dispatch(changeDarkMode())}
                  className="text-base w-20 h-20"
                />
              </div>
            </div>
          </Header>

          <Content>
            <Routes>{generateRoutes()}</Routes>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}
export default MyLayOut;
