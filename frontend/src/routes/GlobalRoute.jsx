import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import TestRoute from "./TestRoute";
import AdminRoute from "./AdminRoute";

function GlobalRoute() {
  return (
    <Router>
      <Routes>
        <Route path="/test" element={<TestRoute />} />
        <Route path="/admin/*" element={<AdminRoute />} />
      </Routes>
    </Router>
  );
}

export default GlobalRoute;
