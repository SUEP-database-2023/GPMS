import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AdminRoute, TeacherRoute, StudentRoute } from "./index";
import { LoginPage } from "../pages/LoginPage";
import { Provider } from "react-redux";
import store from "../store/ConfigureStore";
function GlobalRoute() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/admin/*" element={<AdminRoute />} />
          <Route path="/teacher/*" element={<TeacherRoute />} />
          <Route path="/student/*" element={<StudentRoute />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default GlobalRoute;
