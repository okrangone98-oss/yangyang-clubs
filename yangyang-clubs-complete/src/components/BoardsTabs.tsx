import React, { useContext, useMemo, useState } from "react";
import { LangContext } from "../App";

export type BoardItem = { title_ko: string; title_en: string; date: string; href?: string };
export default function BoardsTabs({ notices, events }: { notices: BoardItem[]; events: BoardItem[] }) {
  const { lang } = useContext(LangContext);
  const [tab, setTab] = useState<"notices"|"events">("notices");
  const items = tab === "notices" ? notices : events;
  const [idx, setIdx] = useState(0);
  const total = items.length;

  const cur = items[idx];
  const title = lang === "ko" ? cur.title_ko : cur.title_en;
  const label = tab === "notices" ? (lang==="ko"?"공지":"Notices") : (lang==="ko"?"행사":"Events");

  return (
    <section className="max-w-6xl mx-auto px-4 my-6">
      {/* 탭 */}
      <div className="flex items-center gap-2 mb-3">
        <button onClick={()=>{setTab("notices"); setIdx(0);}}
          className={`px-3 py-1 rounded-full border ${tab==="notices"?"bg-gray-900 text-white":"bg-white"}`}>
          {lang==="ko"?"공지":"Notices"}
        </button>
        <button onClick={()=>{setTab("events"); setIdx(0);}}
          className={`px-3 py-1 rounded-full border ${tab==="events"?"bg-gray-900 text-white":"bg-white"}`}>
          {lang==="ko"?"행사":"Events"}
        </button>
      </div>

      {/* 슬라이드 1장 보여주기 */}
      <div className="relative rounded-xl border p-4 bg-white">
        <div className="text-xs text-gray-500">{label} · {cur.date}</div>
        <div className="text-lg font-semibold mt-1">
          {cur.href ? <a href={cur.href} className="hover:underline">{title}</a> : title}
        </div>

        {/* 컨트롤 */}
        <div className="absolute inset-y-0 right-2 flex items-center gap-2">
          <button onClick={()=>setIdx((idx-1+total)%total)} className="w-8 h-8 rounded border bg-white">‹</button>
          <button onClick={()=>setIdx((idx+1)%total)} className="w-8 h-8 rounded border bg-white">›</button>
        </div>

        {/* 프로그레스 도트 */}
        <div className="mt-3 flex gap-1">
          {items.map((_,i)=>(
            <button key={i} onClick={()=>setIdx(i)} className={`w-2 h-2 rounded-full ${i===idx?"bg-gray-900":"bg-gray-300"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
