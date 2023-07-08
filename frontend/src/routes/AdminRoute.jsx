import React from "react";
import {
  ParmeterSettingPage,
  TopicReviewPage,
  TopicSelectionPage,
  TopicResultPage,
  PasswordUpdatePage,
} from "../pages/AdminPage";
import {
  FormOutlined,
  ExceptionOutlined,
  EditOutlined,
  FileDoneOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { GenerateRoutes, SetIcon } from "../utils";
const items = [
  {
    id: "1",
    title: "参数设置",
    path: "ParmeterSettingPage",
    url: "/admin/ParmeterSettingPage",
    icon: <SetIcon icon={FormOutlined} />,
    element: <ParmeterSettingPage />,
  },
  {
    id: "2",
    title: "课题审核",
    path: "TopicReviewPage",
    url: "/admin/TopicReviewPage",
    icon: <SetIcon icon={ExceptionOutlined} />,
    element: <TopicReviewPage />,
  },
  {
    id: "3",
    title: "选课操作",
    path: "TopicSelectionPage",
    url: "/admin/TopicSelectionPage",
    icon: <SetIcon icon={EditOutlined} />,
    element: <TopicSelectionPage />,
  },
  {
    id: "4",
    title: "选课结果",
    path: "TopicResultPage",
    url: "/admin/TopicResultPage",
    icon: <SetIcon icon={FileDoneOutlined} />,
    element: <TopicResultPage />,
  },
  {
    id: "5",
    title: "修改密码",
    path: "PasswordUpdatePage",
    url: "/admin/PasswordUpdatePage",
    icon: <SetIcon icon={LockOutlined} />,
    element: <PasswordUpdatePage />,
  },
];

const AdminRoute = () => {
  return <>{GenerateRoutes({ items: items, title: "管理员端" })}</>;
};

export default AdminRoute;
