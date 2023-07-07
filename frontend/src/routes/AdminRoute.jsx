import React from "react";
import { AdminPage } from "../pages/AdminPage";
import Mylayout from "../components/Layout/Mylayout";
import { BrowserRouter as Route, Routes } from "react-router-dom";
import {
  ParmeterSettingPage,
  TopicReviewPage,
  TopicSelectionPage,
  TopicResultPage,
  PasswordUpdatePage,
} from "../pages/AdminPage";
const items = [
  {
    title: "参数设置",
    path: "ParmeterSettingPage",
    icon: "setting",
    element: <ParmeterSettingPage />,
  },
  {
    title: "课题审核",
    path: "TopicReviewPage",
    icon: "audit",
    element: <TopicReviewPage />,
  },
  {
    title: "选课操作",
    path: "TopicSelectionPage",
    icon: "operation",
    element: <TopicSelectionPage />,
  },
  {
    title: "选课结果",
    path: "TopicResultPage",
    icon: "result",
    element: <TopicResultPage />,
  },
  {
    title: "修改密码",
    path: "PasswordUpdatePage",
    icon: "password",
    element: <PasswordUpdatePage />,
  },
];
const generateRoutes = () => {
  return items.map((item) => (
    <Route key={item.id} path={item.url} element={item.element} />
  ));
};
const AdminRoute = () => {
  return (
    <>
      <Routes>{generateRoutes()}</Routes>
      <Mylayout items={items} page={<AdminPage />} title={"管理员端"} />;
    </>
  );
};

export default AdminRoute;
