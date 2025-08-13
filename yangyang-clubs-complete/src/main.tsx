import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
import InstructorRegister from "./components/InstructorRegister";

function App() {
  return (
    <div>
      <h1>강사 등록 시스템</h1>
      <InstructorRegister />
    </div>
  );
}

export default App;
