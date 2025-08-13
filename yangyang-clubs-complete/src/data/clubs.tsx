import React from "react";
import "./index.css";

/** ---------- 데이터(필요시 수정) ---------- */
type Club = {
  id: string;
  nameKo: string;
  nameEn: string;
  members: number;
  location: string;
  tags: string[];
  cover: string;
  instagram?: string;
  email?: string;
};

const clubs: Club[] = [
  {
    id: "muaz-crochet",
    nameKo: "무아뜨경(코바늘·새활용)",
    nameEn: "Muaz Crochet / Upcycle",
    members: 25,
    location: "양양읍·손양면",
    tags: ["업사이클", "ESG", "핸드메이드"],
    cover: "/yangyang-clubs/assets/muaz-crochet-outdoor.jpg",
    email: "yyfarmct@naver.com",
  },
  {
    id: "ukulele-ensemble",
    nameKo: "우쿨렐레 앙상블",
    nameEn: "Ukulele Ensemble",
    members: 18,
    location: "양양군 전역",
    tags: ["악기", "공연", "정기연습"],
    cover: "/yangyang-clubs/assets/ukulele-ensemble.jpg",
  },
  {
    id: "drawing-yangyang",
    nameKo: "야양그림",
    nameEn: "Drawing Yangyang",
    members: 20,
    location: "양양군 전역",
    tags: ["그림", "스케치", "지역탐방"],
    cover: "/yangyang-clubs/assets/drawing-yangyang.jpg",
  },
  {
    id: "beautiful-guitar",
    nameKo: "아름다운 통기타 세상",
    nameEn: "Beautiful Guitar World",
    members: 22,
    location: "양양군 전역",
    tags: ["통기타", "합주", "버스킹"],
    cover: "/yangyang-clubs/assets/beautiful-guitar-world.jpg",
  },
  {
    id: "clubs-outdoor",
    nameKo: "두레 동아리 야외행사",
    nameEn: "Clubs Outdoor",
    members: 58,
    location: "서피비치·인구·죽도",
    tags: ["서핑", "바다러닝", "비치클린"],
    cover: "/yangyang-clubs/assets/clubs-outdoor.jpg",
  },
  {
    id: "sseumim-sewing",
    nameKo: "쓰밈 바느질",
    nameEn: "Sseumim Sewing",
    members: 15,
    location: "양양읍",
    tags: ["재봉", "수선", "공예"],
    cover: "/yangyang-clubs/assets/sseumim-sewing.jpg",
  },
];

const notices = [
  { title: "2025 두레동아리 신규 가입 안내", date: "2025-08-15" },
  { title: "9월 야외 영화제 자원활동가 모집", date: "2025-08-10" },
  { title: "안전한 모임을 위한 가이드 배포", date: "2025-08-05" },
];

const events = [
  { title: "무아뜨경 업사이클 원데이 클래스", date: "2025-08-20" },
  { title: "우쿨렐레 버스킹(양양읍 광장)", date: "2025-08-24" },
  { title: "야양그림 야외 스케치", date: "2025-08-31" },
];

/** ---------- 컴포넌트 ---------- */
function Topbar() {
  return (
    <div className="topbar">
      <div className="container inner" aria-label="유틸바">
        <a className="btn" href="#clubs" title="클럽 보기">KR/EN</a>
        <a className="btn" href="mailto:yyfarmct@naver.com">이메일 문의</a>
      </div>
    </div>
  );
}

function GNB() {
  return (
    <div className="gnb">
      <div className="container inner">
        <div className="brand">
          Clubs of Yangyang <small>두레 동아리</small>
        </div>
        <nav className="nav" aria-label="주요 메뉴">
          <a href="#about">소개</a>
          <a href="#boards">공지/행사</a>
          <a href="#clubs">동아리</a>
          <a href="#contact">문의</a>
        </nav>
      </div>
    </div>
  );
}

function Hero() {
  const heroUrl = "/yangyang-clubs/assets/festival-audience.jpg";
  const style = {
    backgroundImage: `url(${heroUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  } as React.CSSProperties;

  return (
    <header className="hero" style={style}>
      <div className="container">
        <h1>양양 동아리, 함께 만드는 즐거운 일상</h1>
        <p>
          주간 모임·야외행사·공연·체험부스까지! 누구나 참여할 수 있는
          커뮤니티가 기다리고 있어요.
        </p>
        <div className="cta">
          <a className="btn primary" href="#clubs">동아리 살펴보기</a>
          <a className="btn" href="mailto:yyfarmct@naver.com">가입/협업 문의</a>
        </div>
      </div>
    </header>
  );
}

function Quick() {
  return (
    <section className="quick">
      <div className="container">
        <a className="item" href="#boards">
          <div className="ico">📢</div>
          <div><strong>공지 안내</strong><span>모집/마감/알림</span></div>
        </a>
        <a className="item" href="#clubs">
          <div className="ico">👥</div>
          <div><strong>동아리 찾기</strong><span>관심 분야별 탐색</span></div>
        </a>
        <a className="item" href="#gallery">
          <div className="ico">📸</div>
          <div><strong>활동 사진</strong><span>현장 스냅보기</span></div>
        </a>
        <a className="item" href="mailto:yyfarmct@naver.com">
          <div className="ico">✉️</div>
          <div><strong>문의/협업</strong><span>yyfarmct@naver.com</span></div>
        </a>
      </div>
    </section>
  );
}

function Boards() {
  return (
    <section id="boards" className="section">
      <div className="container">
        <div className="grid" style={{gridTemplateColumns:"1fr 1fr"}}>
          <div>
            <div className="hd"><h2>공지사항</h2><span className="badge">Notice</span></div>
            <div className="board">
              <ul>
                {notices.map((n,i)=>(
                  <li key={i}>
                    <time>{n.date}</time>
                    <a href="#boards" title={n.title}>{n.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <div className="hd"><h2>행사/모임</h2><span className="badge">Events</span></div>
            <div className="board">
              <ul>
                {events.map((e,i)=>(
                  <li key={i}>
                    <time>{e.date}</time>
                    <a href="#boards" title={e.title}>{e.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Clubs() {
  return (
    <section id="clubs" className="section">
      <div className="container">
        <div className="hd"><h2>동아리</h2><span className="badge">Clubs</span></div>
        <div id="gallery" className="grid cards">
          {clubs.map(c=>(
            <article key={c.id} className="card" aria-label={c.nameKo}>
              <img className="thumb" src={c.cover} alt={c.nameKo}/>
              <div className="body">
                <div className="badge">{c.location}</div>
                <h3 style={{margin:"8px 0 4px",fontSize:18}}>{c.nameKo}</h3>
                <div style={{color:"var(--muted)",fontSize:14}}>{c.nameEn}</div>
                <div className="tags">
                  {c.tags.map((t,i)=><span key={i} className="badge">{t}</span>)}
                </div>
                {c.email && <div style={{marginTop:10,fontSize:14}}>
                  문의: <a href={`mailto:${c.email}`}>{c.email}</a>
                </div>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Callout(){
  return (
    <section id="contact" className="container section">
      <div className="callout">
        <div>
          <strong style={{fontSize:18}}>가입/협업 문의</strong><br/>
          yyfarmct@naver.com
        </div>
        <a className="btn primary" href="mailto:yyfarmct@naver.com">이메일 보내기</a>
      </div>
    </section>
  );
}

function Footer(){
  return (
    <footer className="footer">
      <div className="container inner">
        <div>© Yangyang Clubs. All rights reserved.</div>
        <div>본 사이트는 지역 동아리 홍보용으로 제작되었습니다.</div>
      </div>
    </footer>
  );
}

/** ---------- 페이지 ---------- */
export default function App(){
  return (
    <>
      <Topbar/>
      <GNB/>
      <Hero/>
      <Quick/>
      <section id="about" className="container section" style={{marginTop:8}}>
        <div className="hd"><h2>소개</h2><span className="badge">About</span></div>
        <p style={{margin:0,color:"var(--muted)"}}>
          강릉시 평생학습관 사이트의 정보구성(상단 유틸/대메뉴/공지 보드/패밀리 푸터)을
          참고해, 양양 동아리 소개·공지를 보기 쉽게 구성했습니다.
        </p>
      </section>
      <Boards/>
      <Clubs/>
      <Callout/>
      <Footer/>
    </>
  );
}
