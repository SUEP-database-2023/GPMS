import React from "react";
import {
  TopicSubmissionPage,
  TopicListPage,
  TopicResultPage,
  PasswordUpdatePage,
} from "../pages/TeacherPage";
import { GenerateRoutes } from "../utils";

const items = [
  {
    id: "1",
    title: "课题提交",
    path: "TopicSubmissionPage",
    url: "/teacher/TopicSubmissionPage",
    icon: "topic",
    element: <TopicSubmissionPage />,
  },
  {
    id: "2",
    title: "选课列表",
    path: "TopicListPage",
    url: "/teacher/TopicListPage",
    icon: "list",
    element: <TopicListPage />,
  },
  {
    id: "3",
    title: "选课结果",
    path: "TopicResultPage",
    url: "/teacher/TopicResultPage",
    icon: "result",
    element: <TopicResultPage />,
  },
  {
    id: "4",
    title: "修改密码",
    path: "PasswordUpdatePage",
    url: "/teacher/PasswordUpdatePage",
    icon: "password",
    element: <PasswordUpdatePage />,
  },
];

const TeacherRoute = () => {
  return <> {GenerateRoutes({ items: items, title: "Teacher" })} </>;
};

export default TeacherRoute;
