// src/App.tsx
import { Link, Route, Routes, useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { CLUBS } from "./data/clubs";

const EMAIL = "yyfarmct@naver.com";

export default function App() {
  const [lang, setLang] = useState<"ko" | "en">("ko");

  return (
    <div style={{ fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif" }}>
      <header style={styles.header}>
        <Link to="/" style={styles.logo}>Clubs of Yangyang</Link>
        <nav style={styles.nav}>
          <Link to="/" style={styles.navLink}>{lang === "ko" ? "동아리" : "Clubs"}</Link>
          <Link to="/contact" style={styles.navLink}>{lang === "ko" ? "문의" : "Contact"}</Link>
          <button onClick={() => setLang(lang === "ko" ? "en" : "ko")} style={styles.langBtn}>
            {lang === "ko" ? "KO" : "EN"}
          </button>
        </nav>
      </header>

      <main style={{ padding: "24px", maxWidth: 1200, margin: "0 auto" }}>
        <Routes>
          <Route path="/" element={<ClubList lang={lang} />} />
          <Route path="/club/:slug" element={<ClubDetail lang={lang} />} />
          <Route path="/contact" element={<Contact lang={lang} />} />
          <Route path="*" element={<NotFound lang={lang} />} />
        </Routes>
      </main>

      <footer style={styles.footer}>
        <small>© {new Date().getFullYear()} Yangyang Clubs</small>
      </footer>
    </div>
  );
}

function ClubList({ lang }: { lang: "ko" | "en" }) {
  return (
    <>
      <h1 style={styles.h1}>{lang === "ko" ? "양양의 동아리" : "Clubs in Yangyang"}</h1>

      <div style={styles.grid}>
        {CLUBS.map((c) => (
          <Link key={c.slug} to={`/club/${c.slug}`} style={styles.card}>
            <img src={c.image} alt={c.name[lang]} style={styles.cardImg} />
            <div style={{ padding: 12 }}>
              <h3 style={{ margin: "0 0 6px" }}>{c.name[lang]}</h3>
              <p style={styles.muted}>{c.summary[lang]}</p>
              <div style={{ marginTop: 8, display: "flex", gap: 6, flexWrap: "wrap" }}>
                {c.tags.map((t) => (
                  <span key={t} style={styles.tag}>#{t}</span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

function ClubDetail({ lang }: { lang: "ko" | "en" }) {
  const { slug } = useParams();
  const nav = useNavigate();
  const club = CLUBS.find((c) => c.slug === slug);

  if (!club) return <NotFound lang={lang} />;

  return (
    <article style={{ maxWidth: 920, margin: "0 auto" }}>
      <button onClick={() => nav(-1)} style={styles.backBtn}>
        ← {lang === "ko" ? "목록으로" : "Back"}
      </button>
      <img src={club.image} alt={club.name[lang]} style={styles.hero} />
      <h1 style={{ marginTop: 18 }}>{club.name[lang]}</h1>
      <p style={{ marginTop: 6, color: "#555" }}>
        {club.area && (lang === "ko" ? `활동지역: ${club.area}` : `Area: ${club.area}`)}
        {club.members && ` · ${lang === "ko" ? "인원" : "Members"}: ${club.members}`}
      </p>
      <p style={{ marginTop: 12, lineHeight: 1.7 }}>{club.summary[lang]}</p>

      <div style={{ marginTop: 16, display: "flex", gap: 8, flexWrap: "wrap" }}>
        {club.tags.map((t) => (
          <span key={t} style={styles.tagBig}>#{t}</span>
        ))}
      </div>

      <a
        href={`mailto:${EMAIL}?subject=${encodeURIComponent(
          `[Yangyang Clubs] ${club.name[lang]} 문의`
        )}`}
        style={styles.cta}
      >
        {lang === "ko" ? "이 동아리에 문의하기" : "Contact this Club"}
      </a>
    </article>
  );
}

function Contact({ lang }: { lang: "ko" | "en" }) {
  return (
    <section style={{ maxWidth: 720, margin: "0 auto" }}>
      <h1 style={styles.h1}>{lang === "ko" ? "문의" : "Contact"}</h1>
      <p style={{ lineHeight: 1.8 }}>
        {lang === "ko"
          ? "동아리 신청/문의는 아래 이메일로 보내주세요."
          : "For inquiries and applications, please email us."}
      </p>
      <a href={`mailto:${EMAIL}`} style={styles.cta}>{EMAIL}</a>
    </section>
  );
}

function NotFound({ lang }: { lang: "ko" | "en" }) {
  return (
    <div style={{ textAlign: "center", padding: "48px 0" }}>
      <h2>{lang === "ko" ? "페이지를 찾을 수 없습니다." : "Page not found."}</h2>
      <Link to="/" style={styles.navLink}>{lang === "ko" ? "홈으로" : "Go Home"}</Link>
    </div>
  );
}

/* --- styles (간단 CSS) --- */
const styles: Record<string, React.CSSProperties> = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "14px 18px",
    borderBottom: "1px solid #eee",
    position: "sticky",
    top: 0,
    background: "#fff",
    zIndex: 10
  },
  logo: { fontWeight: 700, textDecoration: "none", color: "#222" },
  nav: { display: "flex", gap: 14, alignItems: "center" },
  navLink: { textDecoration: "none", color: "#1e40af" },
  langBtn: {
    border: "1px solid #e5e7eb",
    background: "#fff",
    borderRadius: 8,
    padding: "6px 10px",
    cursor: "pointer"
  },
  h1: { fontSize: 24, margin: "4px 0 16px" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
    gap: 16
  },
  card: {
    border: "1px solid #eee",
    borderRadius: 12,
    overflow: "hidden",
    textDecoration: "none",
    color: "inherit",
    background: "#fff",
    transition: "transform .1s ease",
  },
  cardImg: { width: "100%", height: 160, objectFit: "cover" },
  muted: { color: "#555", margin: 0, lineHeight: 1.5 },
  tag: {
    fontSize: 12,
    background: "#f3f4f6",
    borderRadius: 999,
    padding: "2px 8px",
    color: "#374151"
  },
  tagBig: {
    fontSize: 13,
    background: "#eef2ff",
    borderRadius: 999,
    padding: "4px 10px",
    color: "#3730a3"
  },
  footer: { padding: 20, borderTop: "1px solid #eee", textAlign: "center", color: "#666" },
  backBtn: {
    border: "1px solid #e5e7eb",
    background: "#fff",
    padding: "6px 10px",
    borderRadius: 8,
    cursor: "pointer",
    marginBottom: 12
  },
  hero: { width: "100%", height: 380, objectFit: "cover", borderRadius: 12 },
  cta: {
    display: "inline-block",
    marginTop: 18,
    background: "#1e40af",
    color: "#fff",
    padding: "10px 14px",
    borderRadius: 10,
    textDecoration: "none"
  }
};
