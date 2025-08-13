import React, { useContext } from "react";
import { LangContext } from "../App";

export default function Topbar() {
  const { lang, setLang } = useContext(LangContext);
  const t = (ko:string,en:string)=> lang==="ko"?ko:en;

  return (
    <header className="border-b bg-white/70 backdrop-blur sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#/" className="font-semibold text-lg">
          {t("양양 동아리", "Clubs of Yangyang")}
        </a>
        <div className="flex items-center gap-3">
          <a className="hover:underline" href="mailto:yyfarmct@naver.com">
            yyfarmct@naver.com
          </a>
          <button
            onClick={()=>setLang(lang==="ko"?"en":"ko")}
            className="px-3 py-1 rounded-full border hover:bg-gray-50"
            aria-label="language"
          >
            {lang==="ko" ? "EN" : "KO"}
          </button>
        </div>
      </div>
    </header>
  );
}
