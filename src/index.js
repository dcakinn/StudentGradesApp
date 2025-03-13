import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // Tailwind veya genel stiller için

// uygulamayı başlatır ve tüm bileşenleri DOM'a aktarır. 
// React.StrictMode kullanılarak geliştirici hataları ve uyarıları denetlenir.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
