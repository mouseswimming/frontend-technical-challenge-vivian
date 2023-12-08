import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ConfigProvider } from "antd";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          fontSize: 16,
          colorPrimary: "#038851",
        },
        components: {
          Statistic: {
            titleFontSize: 14,
          },
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
