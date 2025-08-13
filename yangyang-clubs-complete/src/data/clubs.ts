// src/data/clubs.ts
export type Club = {
  slug: string;
  name: { ko: string; en: string };
  members?: string;
  area?: string;
  tags: string[];
  image: string;            // /assets/파일명.jpg
  summary: { ko: string; en: string };
};

export const CLUBS: Club[] = [
  {
    slug: "drawing-yangyang",
    name: { ko: "야양그림", en: "Drawing Yangyang" },
    members: "25+",
    area: "구석구석 양양",
    tags: ["드로잉", "전시", "야외부스"],
    image: "/assets/drawing-yangyang.jpg",
    summary: {
      ko: "양양 드로잉/그림 커뮤니티. 장날 체험부스와 전시/모임을 진행합니다.",
      en: "Drawing community in Yangyang. Pop-up booths and casual meetups."
    }
  },
  {
    slug: "ukulele-ensemble",
    name: { ko: "우쿨렐레 합주", en: "Ukulele Ensemble" },
    members: "20+",
    area: "양양읍",
    tags: ["음악", "공연", "합주"],
    image: "/assets/ukulele-ensemble.jpg",
    summary: {
      ko: "우쿨렐레로 함께 연주하고 공연합니다.",
      en: "We play ukulele together and sometimes perform."
    }
  },
  {
    slug: "beautiful-guitar-world",
    name: { ko: "아름다운 통기타 세상", en: "Beautiful Guitar World" },
    members: "15+",
    area: "양양군 전역",
    tags: ["음악", "기타", "공연"],
    image: "/assets/beautiful-guitar-world.jpg",
    summary: {
      ko: "기타를 좋아하는 사람들의 모임. 초보자도 환영!",
      en: "Guitar lovers’ group. Beginners welcome!"
    }
  },
  {
    slug: "muaz-crochet",
    name: { ko: "무아뜨경(코바늘·새활용)", en: "Muaz Crochet (Upcycling)" },
    members: "25+",
    area: "양양읍·손양면",
    tags: ["업사이클", "핸드메이드", "ESG"],
    image: "/assets/muaz-crochet-outdoor.jpg",
    summary: {
      ko: "코바늘과 직조로 생활소품을 만드는 업사이클 동아리.",
      en: "Upcycling club making daily goods with crochet & weaving."
    }
  },
  {
    slug: "sseumim-sewing",
    name: { ko: "스밈(바느질·재봉)", en: "Sseumim Sewing" },
    members: "20+",
    area: "양양읍",
    tags: ["핸드메이드", "교육", "수공예"],
    image: "/assets/sseumim-sewing.jpg",
    summary: {
      ko: "바느질/재봉 스터디와 소품 만들기 워크숍.",
      en: "Sewing study & small goods workshops."
    }
  },
  {
    slug: "sseumim-tea",
    name: { ko: "스밈(티타임)", en: "Sseumim Tea" },
    members: "10+",
    area: "양양읍",
    tags: ["티타임", "소모임", "휴식"],
    image: "/assets/sseumim-tea.jpg",
    summary: {
      ko: "차 마시며 담소 나누는 편안한 소모임.",
      en: "Casual tea time & chat."
    }
  }
];
