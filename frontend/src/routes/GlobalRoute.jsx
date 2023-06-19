import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Loginpage from "../pages/LoginPage/index";
import StudentRoute from "./StudentRoute";
import ManagerRoute from "./ManagerRoute";
import TeacherRoute from "./TeacherRoute";
import { ConfigProvider, theme } from "antd";
import { useDispatch, useSelector } from "react-redux";

function GlobalRoute() {
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const isDarkMode = useSelector((state) => state.config.isDarkMode);
  return (
    <>
      <ConfigProvider
        theme={{
          algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Loginpage />} />
            <Route path="/teacherpage/*" element={<TeacherRoute />} />
            <Route path="/studentpage/*" element={<StudentRoute />} />
            <Route path="/managerpage/*" element={<ManagerRoute />} />
          </Routes>
        </Router>
      </ConfigProvider>
    </>
  );
}

export default GlobalRoute;
