const asset = (file: string) => `${import.meta.env.BASE_URL}assets/${file}`;

export type Club = {
  slug: string;
  name: { ko: string; en: string };
  area: { ko: string; en: string };
  members: number;
  tags: string[];
  cover: string;
  desc: { ko: string; en: string };
  links?: { instagram?: string; email?: string };
  gallery?: string[]; // ← 추가
};

export const clubs: Club[] = [
  {
    slug: "pooksurfer",
    name: { ko: "동호문화기획단", en: "Pook Surfers" },
    area: { ko: "양양 동호해변 중심으로 활동", en: "Across Yangyang (Surfyy/Ingwoo/Jukdo)" },
    members: 10,
    tags: ["서핑","러닝","비치클린"],
    cover: asset("clubs-outdoor.jpg"),
    desc: {
      ko: "양양 동호 대표 커뮤니티. 주말 정기 러닝, 서핑, 비치클린, 팜투테이블, 요가등 다채로운 프로그램 운영.",
      en: "Yangyang’s surf community. Weekly sessions, ocean runs, beach clean-ups, beginner-friendly."
    },
    links: { instagram: "#", email: "yyfarmct@naver.com" },
    gallery: [asset("clubs-outdoor.jpg"), asset("festival-audience.jpg")]
  },
  {
    slug: "muaz-crochet",
    name: { ko: "무아뜨경(코바늘·새활용)", en: "Muaz Crochet (Upcycle)" },
    area: { ko: "양양에서 속초까지", en: "Yangyang-eup · Sonyang-myeon" },
    members: 3,
    tags: ["함께해요 의기양양 동아리"],
    cover: asset("muaz-crochet-outdoor.jpg"),
    desc: {
      ko: "코바늘·직조로 생활소품을 만드는 뜨개+청년+연결 동아리.",
      en: "Upcycling group crafting daily goods with crochet & weaving. Pop-up booth on market days."
    },
    links: { email: "yyfarmct@naver.com" },
    gallery: [asset("muaz-crochet-outdoor.jpg"), asset("sseumim-tea.jpg")]
  },
  {
    slug: "ukulele",
    name: { ko: "우쿨렐레 합주", en: "Ukulele Ensemble" },
    area: { ko: "양양읍", en: "Yangyang-eup" },
    members: 14,
    tags: ["음악","공연"],
    cover: asset("ukulele-ensemble.jpg"),
    desc: {
      ko: "학교 및 지역 마을 행사에서 합주와 공연을 진행합니다.",
      en: "Regular ensemble and small gigs at local parks and festivals."
    },
    gallery: [asset("ukulele-ensemble.jpg"), asset("beautiful-guitar-world.jpg")]
  },
  {
    slug: "beautiful-guitar",
    name: { ko: "아름다운 통기타 세상", en: "Beautiful Guitar World" },
    area: { ko: "서면", en: "Seomyeon" },
    members: 10,
    tags: ["음악","기타","공연"],
    cover: asset("beautiful-guitar-world.jpg"),
    desc: {
      ko: "통기타 동호회. 기초반·합주반 운영, 지역 행사 참여.",
      en: "Acoustic guitar club offering beginner & ensemble classes, performing at events."
    }
  },
  {
    slug: "drawing-yangyang",
    name: { ko: "야양그림", en: "Drawing Yangyang" },
    area: { ko: "구석구석 양양", en: "Every corner of Yangyang" },
    members: 17,
    tags: ["드로잉","야외스케치"],
    cover: asset("drawing-yangyang.jpg"),
    desc: {
      ko: "양양의 스토리를 담은 그림, 스케치, 전시 프로젝트를 진행합니다.",
      en: "Outdoor sketch sessions and small exhibitions."
    },
    gallery: [asset("drawing-yangyang.jpg"), asset("dure-workshop-2025-07.jpg")]
  }
];

export const clubMap = Object.fromEntries(clubs.map(c=>[c.slug, c])) as Record<string, Club>;

export type BoardItem = { title_ko: string; title_en: string; date: string; href?: string };

export const notices: BoardItem[] = [
  { title_ko: "2025 두레동아리 신규 가입 안내", title_en: "2025 New Club Enrollment", date: "2025-08-15" },
  { title_ko: "안전한 모임 가이드 배포",       title_en: "Safety Guide Released",   date: "2025-08-05" },
];

export const events: BoardItem[] = [
  { title_ko: "무아뜨경 업사이클 원데이 클래스", title_en: "Muaz Upcycling One-day Class", date: "2025-08-20" },
  { title_ko: "우쿨렐레 버스킹(양양읍 광장)",      title_en: "Ukulele Busking (Town Square)", date: "2025-08-24" },
  { title_ko: "야양그림 야외 스케치",             title_en: "Outdoor Sketch Meetup",        date: "2025-08-31" },
];

export const heroSlides = [
  {
    image: asset("festival-audience.jpg"),
    title_ko: "양양 동아리, 함께 만드는 즐거운 일상",
    title_en: "Clubs of Yangyang, Joyful Daily Life",
    subtitle_ko: "당신과 함께 할 양양 공동체",
    subtitle_en: "Weekly meetups, outdoor events, gigs and pop-ups. Join a welcoming community.",
    ctaHref: "#/club/pooksurfer",
    ctaLabel_ko: "자세히 보기", ctaLabel_en: "View Surf Club"
  },
  {
    image: asset("dure-workshop-2025-07.jpg"),
    title_ko: "업사이클·핸드메이드 워크숍",
    title_en: "Upcycling / Handmade Workshops",
    subtitle_ko: "함께 만드는 활기찬 양양",
    subtitle_en: "Create daily goods with local makers.",
    ctaHref: "#/club/muaz-crochet",
  },
  {
    image: asset("clubs-outdoor.jpg"),
    title_ko: "양양에서 만나는 커뮤니티",
    title_en: "Outdoor Communities",
    subtitle_ko: "양양을 넘어 함께해요!",
    subtitle_en: "Across Surfyy, Ingwoo, Jukdo and beyond.",
    ctaHref: "#/club/drawing-yangyang",
  }
];
