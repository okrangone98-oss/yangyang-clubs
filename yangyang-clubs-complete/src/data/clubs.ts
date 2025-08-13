const asset = (file:string) => `${import.meta.env.BASE_URL}assets/${file}`;

export type Club = {
  slug: string;
  name: { ko: string; en: string };
  area: { ko: string; en: string };
  members: number;
  tags: string[];
  cover: string;
  desc: { ko: string; en: string };
  links?: { instagram?: string; email?: string };
};

export const clubs: Club[] = [
  {
    slug: "pooksurfer",
    name: { ko: "푹서퍼 서핑클럽", en: "Pook Surfers" },
    area: { ko: "양양군 전역(서피비치·인구·죽도)", en: "Across Yangyang (Surfyy/Ingwoo/Jukdo)" },
    members: 58,
    tags: ["서핑","바다 러닝","환경수거"],
    cover: asset("clubs-outdoor.jpg"),
    desc: {
      ko: "양양의 대표 서핑 커뮤니티. 주간 정기서핑, 바다 러닝, 비치클린과 초보자 환영 세션 운영.",
      en: "Yangyang’s surf community. Weekly sessions, ocean runs, beach clean-ups, beginner-friendly."
    },
    links: { instagram: "#", email: "yyfarmct@naver.com" }
  },
  {
    slug: "muaz-crochet",
    name: { ko: "무아뜨경(코바늘·새활용)", en: "Muaz Crochet (Upcycle)" },
    area: { ko: "양양읍·손양면", en: "Yangyang-eup · Sonyang-myeon" },
    members: 25,
    tags: ["업사이클","ESG","핸드메이드"],
    cover: asset("muaz-crochet-outdoor.jpg"),
    desc: {
      ko: "코바늘·직조로 생활소품을 만드는 업사이클 동아리. 장날 체험부스 운영.",
      en: "Upcycling group crafting daily goods with crochet & weaving. Pop-up booth on market days."
    },
    links: { email: "yyfarmct@naver.com" }
  },
  {
    slug: "ukulele",
    name: { ko: "우쿨렐레 합주", en: "Ukulele Ensemble" },
    area: { ko: "양양읍", en: "Yangyang-eup" },
    members: 18,
    tags: ["음악","공연"],
    cover: asset("ukulele-ensemble.jpg"),
    desc: {
      ko: "근린 공원과 마을행사에서 정기 합주와 공연을 진행합니다.",
      en: "Regular ensemble and small gigs at local parks and festivals."
    }
  },
  {
    slug: "beautiful-guitar",
    name: { ko: "아름다운 통기타 세상", en: "Beautiful Guitar World" },
    area: { ko: "서면", en: "Seomyeon" },
    members: 21,
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
    members: 16,
    tags: ["드로잉","야외스케치"],
    cover: asset("drawing-yangyang.jpg"),
    desc: {
      ko: "야외 스케치와 전시 프로젝트를 진행합니다.",
      en: "Outdoor sketch sessions and small exhibitions."
    }
  }
];

export const clubMap = Object.fromEntries(clubs.map(c=>[c.slug, c])) as Record<string, Club>;
