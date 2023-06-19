import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Loginpage from "./pages/LoginPage/index";
import StudentRoute from "./pages/StudentPage/index";
import ManagerRoute from "./pages/ManagerPage/index";
import TeacherRoute from "./pages/TeacherPage/index";
import "./index.css";
import { Provider } from "react-redux";
import ConfigureStore from "./store/ConfigureStore";

function App() {
  return (
    <Provider store={ConfigureStore}>
      <Router>
        <Routes>
          <Route path="/" element={<Loginpage />} />
          <Route path="/teacherpage/*" element={<TeacherRoute />} />
          <Route path="/studentpage/*" element={<StudentRoute />} />
          <Route path="/managerpage/*" element={<ManagerRoute />} />
        </Routes>
      </Router>
    </Provider>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
