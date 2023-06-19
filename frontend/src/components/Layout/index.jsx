import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Layout, Menu, theme } from "antd";
import Logo from "../../assets/logo.png";
import "../../index.css";

const { Sider, Content } = Layout;

function MyLayOut({ menuItems }) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const userName = useSelector((state) => state.user.userName);

  const generateRoutes = () => {
    return menuItems.map((item) => (
      <Route key={item.id} path={item.url} element={item.element} />
    ));
  };
  return (
    <>
      <Layout
        style={{
          padding: "24px 0",
          background: colorBgContainer,
        }}
      >
        <Sider
          style={{
            background: colorBgContainer,
          }}
        >
          <div className="flex flex-col justify-center items-center my-20">
            <img
              src={Logo}
              alt="Logo"
              style={{ width: "50%", border: "none" }}
            />
            <h1 className="font-normal text-base leading-7 text-red-500">
              {userName}
            </h1>
          </div>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={menuItems.map((item) => ({
              key: item.key,
              label: <Link to={item.url}>{item.label}</Link>,
            }))}
          />
        </Sider>
        <Content>
          <Routes>{generateRoutes()}</Routes>
        </Content>
      </Layout>
    </>
  );
}
export default MyLayOut;
