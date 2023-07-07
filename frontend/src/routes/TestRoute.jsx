import React from "react";
import { Sidebar } from "../components";
import TestPage from "../pages/Testpage";
const TestRoute = () => {
  return (
    <div>
      <Sidebar main={<TestPage />} />
    </div>
  );
};

export default TestRoute;
