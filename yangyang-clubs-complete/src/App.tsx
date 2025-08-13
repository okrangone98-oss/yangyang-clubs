import React, { createContext, useMemo, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import ClubDetail from "./pages/ClubDetail";

export type Lang = "ko" | "en";
export const LangContext = createContext<{lang:Lang; setLang:(l:Lang)=>void;}>({lang:"ko", setLang:()=>{} });

export default function App() {
  const [lang, setLang] = useState<Lang>("ko");
  const ctx = useMemo(()=>({lang, setLang}),[lang]);

  return (
    <LangContext.Provider value={ctx}>
      <div className="min-h-full flex flex-col">
        <Topbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/club/:slug" element={<ClubDetail />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <footer className="border-t mt-10 py-8 text-sm text-gray-500">
          <div className="max-w-6xl mx-auto px-4">
            © {new Date().getFullYear()} Clubs of Yangyang
          </div>
        </footer>
      </div>
    </LangContext.Provider>
  );
}
