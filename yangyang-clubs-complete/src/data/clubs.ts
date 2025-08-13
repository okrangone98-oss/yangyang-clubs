
export type Club = {
  id: string
  name_ko: string
  name_en: string
  category: 'sports'|'culture'|'community'|'education'|'environment'
  location: string
  languages: Array<'ko'|'en'>
  members: number
  tags: string[]
  desc_ko: string
  desc_en: string
  cover?: string
  links?: { instagram?: string; website?: string; email?: string }
}

export const CATEGORIES = [
  { id: 'all', ko: '전체', en: 'All' },
  { id: 'sports', ko: '스포츠', en: 'Sports' },
  { id: 'culture', ko: '문화/예술', en: 'Culture/Arts' },
  { id: 'community', ko: '공동체', en: 'Community' },
  { id: 'education', ko: '교육', en: 'Education' },
  { id: 'environment', ko: '환경', en: 'Environment' },
] as const

export const CLUBS: Club[] = [
  {
    id: 'pooksurfer',
    name_ko: '푹서퍼 서핑클럽',
    name_en: 'Pook Surfer Club',
    category: 'sports',
    location: '양양군 전역(서피비치·인구·죽도)',
    languages: ['ko','en'],
    members: 58,
    tags: ['서핑','바다 러닝','환경수거'],
    desc_ko: '양양의 대표 서핑 커뮤니티. 주간 정기서핑, 바다 러닝, 비치클린과 초보자 환영 세션을 운영합니다.',
    desc_en: 'A welcoming surf community in Yangyang. Weekly surf sessions, beach runs and beach clean-ups. Beginners friendly.',
    cover: '/assets/clubs-outdoor.jpg',
    links: { instagram: 'https://instagram.com/slowbukbunri', email: 'contact@yangyangclubs.org' },
  },
  {
    id: 'muaz',
    name_ko: '무아뜨경(코바늘·새활용)',
    name_en: 'Muazicyeong Crochet (Upcycling)',
    category: 'environment',
    location: '양양읍·손양면',
    languages: ['ko'],
    members: 25,
    tags: ['업사이클','ESG','핸드메이드'],
    desc_ko: '코바늘·직조로 생활소품을 만드는 업사이클 동아리. 장날 체험부스를 운영합니다.',
    desc_en: 'Upcycling crochet club making daily goods; runs pop-up experience booths in local markets.',
    cover: '/assets/muaz-crochet.jpg',
    links: { email: 'green@yangyangclubs.org' },
  },
  {
    id: 'guitar',
    name_ko: '아름다운 통기타 세상',
    name_en: 'Beautiful Guitar World',
    category: 'culture',
    location: '양양 전역',
    languages: ['ko'],
    members: 18,
    tags: ['통기타','버스킹','공연'],
    desc_ko: '통기타 앙상블과 지역 공연 참여, 주민과 함께하는 무대 운영',
    desc_en: 'Acoustic guitar ensemble performing on local stages and community events',
    cover: '/assets/beautiful-guitar-world.jpg',
    links: { email: 'music@yangyangclubs.org' },
  },
  {
    id: 'drawingyy',
    name_ko: '야양그림(드로잉)',
    name_en: 'Drawing Yangyang',
    category: 'culture',
    location: '양양읍',
    languages: ['ko'],
    members: 20,
    tags: ['드로잉','라이브드로잉','전시'],
    desc_ko: '드로잉 워크숍과 라이브드로잉 참여, 전시 운영',
    desc_en: 'Drawing workshops, live drawing participation and exhibitions',
    cover: '/assets/drawing-yangyang.jpg',
    links: { email: 'art@yangyangclubs.org' },
  },
  {
    id: 'ukulele',
    name_ko: '우리 광정 왔어요(우쿨렐레)',
    name_en: 'Ukulele Ensemble',
    category: 'culture',
    location: '양양군',
    languages: ['ko'],
    members: 16,
    tags: ['우쿨렐레','공연','앙상블'],
    desc_ko: '우쿨렐레 합주와 마을축제 공연 참여',
    desc_en: 'Ukulele ensemble performing at village festivals and events',
    cover: '/assets/ukulele-ensemble.jpg',
    links: { email: 'ukulele@yangyangclubs.org' },
  },
]
