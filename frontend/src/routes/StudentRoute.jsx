import React from "react";
import {
  TopicRulePage,
  TopicSelectionPage,
  VolunteerSelectionPage,
  TopicResultPage,
  PasswordUpdatePage,
} from "../pages/StudentPage";
import {
  HomeOutlined,
  EditOutlined,
  ScheduleOutlined,
  FileDoneOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { GenerateRoutes, SetIcon } from "../utils";
const items = [
  {
    id: "1",
    title: "选题规则",
    path: "TopicRulePage",
    url: "/student/TopicRulePage",
    icon: <SetIcon icon={HomeOutlined} />,
    element: <TopicRulePage />,
  },
  {
    id: "2",
    title: "选课操作",
    path: "TopicSelectionPage",
    url: "/student/TopicSelectionPage",
    icon: <SetIcon icon={EditOutlined} />,
    element: <TopicSelectionPage />,
  },
  {
    id: "3",
    title: "预选志愿",
    path: "VolunteerSelectionPage",
    url: "/student/VolunteerSelectionPage",
    icon: <SetIcon icon={ScheduleOutlined} />,
    element: <VolunteerSelectionPage />,
  },
  {
    id: "4",
    title: "选题结果",
    path: "TopicResultPage",
    url: "/student/TopicResultPage",
    icon: <SetIcon icon={FileDoneOutlined} />,
    element: <TopicResultPage />,
  },
  {
    id: "5",
    title: "修改密码",
    path: "PasswordUpdatePage",
    url: "/student/PasswordUpdatePage",
    icon: <SetIcon icon={LockOutlined} />,
    element: <PasswordUpdatePage />,
  },
];
// TODO:优化items写法
const StudentRoute = () => {
  return <>{GenerateRoutes({ items: items, title: "Students" })}</>;
};

export default StudentRoute;
