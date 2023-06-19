import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Loginpage from "./pages/loginpage/index";
import studentRoute from "./pages/studentpage/index";
import ManagerRoute from "./pages/managerpage/index";
import TeacherRoute from "./pages/teacherpage/index";
import "./index.css";
import { Provider } from "react-redux";
import ConfigureStore from "./store/ConfigureStore";

function App() {
  return (
    <Provider store={ConfigureStore}>
      <Router>
        <Routes>
          <Route path="/" element={<Loginpage />} />
          <Route path="/teacherpage" element={<TeacherRoute />} />
          <Route path="/studentpage" element={<studentRoute />} />
          <Route path="/managerpage/*" element={<ManagerRoute />} />
        </Routes>
      </Router>
    </Provider>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
