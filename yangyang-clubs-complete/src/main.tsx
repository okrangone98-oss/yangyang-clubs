import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'   // ← 여기서만 불러옵니다

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)


// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* GH Pages에 맞춰 베이스 자동 적용 */}
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
