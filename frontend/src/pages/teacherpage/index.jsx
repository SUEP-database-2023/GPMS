import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { HomeOutlined, UserOutlined, BookOutlined } from "@ant-design/icons";
import ParameterSettings from "./ParameterSettings";
import SubjectReview from "./SubjectReview";
// import Teacherpage from "./pages/teacherpage";
import MyLayOut from "../../components/LayOut";
import Logo from "../../assets/logo.png";
import "../../index.css";

const { Sider, Content } = Layout;

const menuItems = [
  {
    key: "1",
    label: "参数设置",
    url: "ParameterSettings",
    element: <ParameterSettings />,
  },
  {
    key: "2",
    label: "课题审核",
    url: "SubjectReview",
    element: <SubjectReview />,
  },
];

function TeacherRoute() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const generateRoutes = () => {
    return menuItems.map((item) => (
      <Route path={item.url} element={item.element} />
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
              Your Text Here
            </h1>
          </div>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={menuItems.map((item) => ({
              key: item.key,
              // icon: item.icon,
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
export default TeacherRoute;
