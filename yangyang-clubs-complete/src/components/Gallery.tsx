import React, { useRef } from "react";

export default function Gallery({ images }: { images: string[] }) {
  const ref = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: number) => {
    const el = ref.current;
    if (!el) return;
    const w = el.clientWidth;
    el.scrollBy({ left: dir * w, behavior: "smooth" });
  };

  if (!images?.length) return null;

  return (
    <section className="mt-6">
      <div className="relative">
        <div
          ref={ref}
          className="flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-smooth"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`gallery-${i+1}`}
              className="snap-start w-full max-w-[92%] md:max-w-[70%] aspect-[16/9] object-cover rounded-xl border"
            />
          ))}
        </div>
        <div className="hidden md:flex absolute inset-y-0 left-2 items-center">
          <button onClick={()=>scrollBy(-1)} className="w-9 h-9 rounded-full border bg-white">‹</button>
        </div>
        <div className="hidden md:flex absolute inset-y-0 right-2 items-center">
          <button onClick={()=>scrollBy(1)} className="w-9 h-9 rounded-full border bg-white">›</button>
        </div>
      </div>
    </section>
  );
}
