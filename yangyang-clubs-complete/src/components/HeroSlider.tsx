import React, { useContext, useEffect, useMemo, useState } from "react";
import { LangContext } from "../App";

export type HeroSlide = {
  image: string;
  title_ko: string; title_en: string;
  subtitle_ko: string; subtitle_en: string;
  ctaHref?: string;
  ctaLabel_ko?: string; ctaLabel_en?: string;
};

export default function HeroSlider({ slides }: { slides: HeroSlide[] }) {
  const { lang } = useContext(LangContext);
  const [idx, setIdx] = useState(0);
  const total = slides.length;
  const s = slides[idx];

  // 5초마다 자동 슬라이드
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % total), 5000);
    return () => clearInterval(t);
  }, [total]);

  const title = lang === "ko" ? s.title_ko : s.title_en;
  const subtitle = lang === "ko" ? s.subtitle_ko : s.subtitle_en;
  const cta = lang === "ko" ? (s.ctaLabel_ko ?? "자세히 보기") : (s.ctaLabel_en ?? "Learn more");

  const bg = useMemo<React.CSSProperties>(() => ({
    backgroundImage: `linear-gradient(180deg, rgba(0,0,0,.35), rgba(0,0,0,.55)), url(${s.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }), [s.image]);

  return (
    <section className="relative text-white" aria-label="Hero">
      <div className="h-[320px] md:h-[420px] flex items-center" style={bg}>
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
          <p className="mt-2 max-w-2xl text-white/90">{subtitle}</p>
          {s.ctaHref && (
            <a href={s.ctaHref} className="inline-block mt-4 px-4 py-2 rounded-lg bg-white/90 text-gray-900 hover:bg-white">
              {cta}
            </a>
          )}
        </div>
      </div>

      {/* 좌/우 버튼 */}
      <button onClick={() => setIdx((idx - 1 + total) % total)}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/35 hover:bg-black/50">‹</button>
      <button onClick={() => setIdx((idx + 1) % total)}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/35 hover:bg-black/50">›</button>

      {/* 도트 */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button key={i} aria-label={`slide ${i+1}`}
            onClick={() => setIdx(i)}
            className={`w-2.5 h-2.5 rounded-full ${i===idx ? "bg-white" : "bg-white/60"}`} />
        ))}
      </div>
    </section>
  );
}
