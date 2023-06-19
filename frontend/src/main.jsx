import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { HomeOutlined, UserOutlined, BookOutlined } from "@ant-design/icons";
import Loginpage from "./pages/loginpage/index";
import Studentpage from "./pages/studentpage/index";
import TeacherRoute from "./pages/teacherpage/index";
import Logo from "./assets/logo.png";
import "./index.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Loginpage />} />
          <Route path="/teacherpage/*" element={<TeacherRoute />} />
          <Route path="/studentpage" element={<Studentpage />} />
        </Routes>
      </Router>
    </>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
