import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { clubMap } from "../data/clubs";
import { LangContext } from "../App";
import Gallery from "../components/Gallery";

export default function ClubDetail() {
  const { slug }  = useParams();
  const nav       = useNavigate();
  const { lang }  = useContext(LangContext);
  const club      = slug ? clubMap[slug] : undefined;

  if(!club) return <div className="max-w-4xl mx-auto px-4 py-16">Not found.</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <button onClick={()=>nav(-1)} className="text-sm text-gray-600 hover:underline">← {lang==="ko"?"뒤로":"Back"}</button>
      <img src={club.cover} alt={club.name.ko} className="mt-4 rounded-xl w-full object-cover aspect-[16/9]" />
      <h1 className="text-2xl font-bold mt-6">{club.name[lang]}</h1>
      <p className="text-gray-600">{club.area[lang]} · {club.members} {lang==="ko"?"명":"members"}</p>
      <div className="mt-4 leading-7 whitespace-pre-wrap">{club.desc[lang]}</div>

      {/* 이미지 갤러리 */}
      <Gallery images={club.gallery ?? []} />

      {/* 링크 */}
      <div className="mt-6 flex gap-3 flex-wrap">
        {club.links?.instagram && (
          <a className="px-3 py-1 rounded-full border" target="_blank" rel="noreferrer" href={club.links.instagram}>Instagram</a>
        )}
        {club.links?.email && (
          <a className="px-3 py-1 rounded-full border" href={`mailto:${club.links.email}`}>Email</a>
        )}
      </div>
    </div>
  );
}
