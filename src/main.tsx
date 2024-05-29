import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Mainpage from "./pages/Mainpage.tsx";
import SimpleSlider from "./components/Mainpage/SimpleSlider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Mainpage />
  </React.StrictMode>
);
