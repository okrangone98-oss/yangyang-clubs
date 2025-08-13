// yangyang-clubs-complete/src/data/clubs.ts
export type Club = {
  id: string
  name_ko: string
  name_en: string
  members: number
  area_ko: string
  area_en: string
  summary_ko: string
  summary_en: string
  tags: string[]
  image: string // public/assets 경로 기준
  links?: { label: string; href: string }[]
}

export const clubs: Club[] = [
  {
    id: 'pooksurfer',
    name_ko: '푹서퍼 서핑클럽',
    name_en: 'Pooksurfer Surf Club',
    members: 58,
    area_ko: '양양군 전역(서피비치·인구·죽도)',
    area_en: 'Across Yangyang (Surfyy, Ingu, Jukdo)',
    summary_ko:
      '양양의 대표 서핑 커뮤니티. 주간 정기서핑, 바다 러닝, 비치클린과 초보자 환영 세션을 운영합니다.',
    summary_en:
      'Signature surfing community in Yangyang. Weekly surf sessions, ocean runs, beach cleanups, and a warm welcome for beginners.',
    tags: ['서핑', '바다 러닝', '환경수거'],
    image: '/assets/clubs-outdoor.jpg',
    links: [
      { label: 'Instagram', href: 'https://instagram.com' },
      { label: 'Email', href: 'mailto:hello@example.com' },
    ],
  },
  {
    id: 'muaz-crochet',
    name_ko: '무아뜨경(코바늘·새활용)',
    name_en: 'MuaTtGyeong (Crochet & Upcycling)',
    members: 25,
    area_ko: '양양읍·손양면',
    area_en: 'Yangyang-eup · Sonyang-myeon',
    summary_ko:
      '코바늘·직조로 생활소품을 만드는 업사이클 동아리. 장날 체험부스를 운영합니다.',
    summary_en:
      'Upcycling club making everyday items via crochet and weaving. Hosts hands-on booths on market days.',
    tags: ['업사이클', 'ESG', '핸드메이드'],
    image: '/assets/muaz-crochet.jpg',
    links: [{ label: 'Email', href: 'mailto:hello@example.com' }],
  },
  {
    id: 'ukulele',
    name_ko: '아름다운 통기타 세상',
    name_en: 'Beautiful Guitar World',
    members: 20,
    area_ko: '양양군',
    area_en: 'Yangyang-gun',
    summary_ko: '지역 공연과 버스킹을 준비하는 기타·우쿨렐레 커뮤니티.',
    summary_en:
      'Guitar & ukulele community performing and busking around town.',
    tags: ['음악', '버스킹'],
    image: '/assets/beautiful-guitar-world.jpg',
  },
]
