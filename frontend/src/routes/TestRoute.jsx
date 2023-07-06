import React from "react";
import Sidebar from "../components/Layout/Sidebar";
import TestPage from "../pages/Testpage";
const TestRoute = () => {
  return (
    <div>
      <Sidebar main={<TestPage />} />
    </div>
  );
};

export default TestRoute;
