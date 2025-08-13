import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Club } from "../data/clubs";
import { LangContext } from "../App";

export default function ClubCard({ club }: { club: Club }) {
  const { lang } = useContext(LangContext);
  return (
    <Link to={`/club/${club.slug}`} className="group rounded-xl overflow-hidden border hover:shadow transition">
      <img src={club.cover} alt={club.name.ko} className="aspect-[16/10] w-full object-cover group-hover:scale-105 transition" />
      <div className="p-4">
        <div className="text-xs text-gray-500">{club.tags.join(" · ")}</div>
        <div className="font-semibold mt-1">{club.name[lang]}</div>
        <div className="text-sm text-gray-600">{club.area[lang]} · {club.members} {lang==="ko"?"명":"members"}</div>
      </div>
    </Link>
  );
}
