import React from "react";
import ReactDOM from "react-dom/client";
import GlobalRoute from "./routes/GlobalRoute";
import "./index.css";

function App() {
  return (
    <div>
      <GlobalRoute />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
