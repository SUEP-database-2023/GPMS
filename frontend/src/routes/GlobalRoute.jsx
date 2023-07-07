import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import TestRoute from "./TestRoute";
import AdminRoute from "./AdminRoute";
import { Provider } from "react-redux";
import store from "../store/ConfigureStore";
function GlobalRoute() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/test" element={<TestRoute />} />
          <Route path="/admin/*" element={<AdminRoute />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default GlobalRoute;
