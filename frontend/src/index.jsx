import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import ConfigureStore from "./store/ConfigureStore";
import GlobalRoute from "./routes/GlobalRoute";

function App() {
  return (
    <Provider store={ConfigureStore}>
      <GlobalRoute />
    </Provider>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
