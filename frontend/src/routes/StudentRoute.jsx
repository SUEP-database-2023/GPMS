import React from "react";
import {
  TopicRulePage,
  TopicSelectionPage,
  VolunteerSelectionPage,
  TopicResultPage,
  PasswordUpdatePage,
} from "../pages/StudentPage";
import { GenerateRoutes } from "../utils";
const items = [
  {
    id: "1",
    title: "选题规则",
    path: "TopicRulePage",
    url: "/student/TopicRulePage",
    icon: "rule",
    element: <TopicRulePage />,
  },
  {
    id: "2",
    title: "选课操作",
    path: "TopicSelectionPage",
    url: "/student/TopicSelectionPage",
    icon: "operation",
    element: <TopicSelectionPage />,
  },
  {
    id: "3",
    title: "预选志愿",
    path: "VolunteerSelectionPage",
    url: "/student/VolunteerSelectionPage",
    icon: "volunteer",

    element: <VolunteerSelectionPage />,
  },
  {
    id: "4",
    title: "选题结果",
    path: "TopicResultPage",
    url: "/student/TopicResultPage",
    icon: "result",
    element: <TopicResultPage />,
  },
  {
    id: "5",
    title: "修改密码",
    path: "PasswordUpdatePage",
    url: "/student/PasswordUpdatePage",
    icon: "password",
    element: <PasswordUpdatePage />,
  },
];

const StudentRoute = () => {
  return <>{GenerateRoutes({ items: items, title: "Students" })}</>;
};

export default StudentRoute;
