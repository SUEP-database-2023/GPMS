import React from "react";
import {
  ParmeterSettingPage,
  TopicReviewPage,
  TopicSelectionPage,
  TopicResultPage,
  PasswordUpdatePage,
} from "../pages/AdminPage";
import { GenerateRoutes } from "../utils";
const items = [
  {
    id: "1",
    title: "参数设置",
    path: "ParmeterSettingPage",
    url: "/admin/ParmeterSettingPage",
    icon: "setting",
    element: <ParmeterSettingPage />,
  },
  {
    id: "2",
    title: "课题审核",
    path: "TopicReviewPage",
    url: "/admin/TopicReviewPage",
    icon: "audit",
    element: <TopicReviewPage />,
  },
  {
    id: "3",
    title: "选课操作",
    path: "TopicSelectionPage",
    url: "/admin/TopicSelectionPage",
    icon: "operation",
    element: <TopicSelectionPage />,
  },
  {
    id: "4",
    title: "选课结果",
    path: "TopicResultPage",
    url: "/admin/TopicResultPage",
    icon: "result",
    element: <TopicResultPage />,
  },
  {
    id: "5",
    title: "修改密码",
    path: "PasswordUpdatePage",
    url: "/admin/PasswordUpdatePage",
    icon: "password",
    element: <PasswordUpdatePage />,
  },
];

const AdminRoute = () => {
  return <>{GenerateRoutes({ items: items, title: "管理员端" })}</>;
};

export default AdminRoute;
