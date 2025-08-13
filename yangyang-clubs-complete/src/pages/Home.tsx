import React, { useContext, useMemo, useState } from "react";
import { clubs } from "../data/clubs";
import ClubCard from "../components/ClubCard";
import { LangContext } from "../App";

export default function Home() {
  const { lang } = useContext(LangContext);
  const [q, setQ]   = useState("");
  const list = useMemo(()=>{
    const keyword = q.trim().toLowerCase();
    if(!keyword) return clubs;
    return clubs.filter(c =>
      [c.name.ko, c.name.en, c.desc.ko, c.desc.en, ...c.tags]
        .join(" ").toLowerCase().includes(keyword)
    );
  },[q]);

  return (
    <div className="max-w-6xl mx-auto px-4">
      <section className="py-10">
        <h1 className="text-2xl font-bold mb-2">
          {lang==="ko" ? "양양의 동아리" : "Clubs of Yangyang"}
        </h1>
        <p className="text-gray-600 mb-6">
          {lang==="ko"
            ? "관심 있는 동아리를 찾아 참여해 보세요."
            : "Find a club you like and join!"}
        </p>

        <input
          value={q}
          onChange={(e)=>setQ(e.target.value)}
          placeholder={lang==="ko"?"검색 (이름/설명/태그)":"Search (name/desc/tags)"}
          className="w-full max-w-md border rounded-lg px-3 py-2 mb-6"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map(c => <ClubCard key={c.slug} club={c} />)}
        </div>
      </section>
    </div>
  );
}
