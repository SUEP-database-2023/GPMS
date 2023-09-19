import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AdminRoute, TeacherRoute, StudentRoute } from "./index";
import { LoginPage } from "../pages/LoginPage";
import { useSelector } from "react-redux";
import { TopicDetailPage } from "../pages/TeacherPage";

function GlobalRoute() {
  const initialPath = useSelector((state) => state.user.initialPath);
  return (
    <Router initialPath={initialPath}>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin/*" element={<AdminRoute />} />
        {/* <Route
          path="/teacher/TopicDetailPage/:topic_id"
          element={<TopicDetailPage />}
        /> */}
        <Route path="/teacher/*" element={<TeacherRoute />} />
        <Route path="/student/*" element={<StudentRoute />} />
      </Routes>
    </Router>
  );
}

export default GlobalRoute;
