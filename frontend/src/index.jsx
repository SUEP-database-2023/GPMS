import React from "react";
import ReactDOM from "react-dom/client";
import GlobalRoute from "./routes/GlobalRoute";
import "./index.css";
import store from "./store/ConfigureStore";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <GlobalRoute />
    </Provider>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
