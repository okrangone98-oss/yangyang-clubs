
export type EventT = {
  id: string
  date: string
  title_ko: string
  title_en: string
  host: string
  place: string
  link: string
}

export const EVENTS: EventT[] = [
  { id: 'beachclean', date: '2025-09-05', title_ko: '비치클린 & 선셋 서핑', title_en: 'Beach Clean & Sunset Surf', host: '푹서퍼 서핑클럽', place: '서피비치', link: '#' },
  { id: 'salon', date: '2025-09-12', title_ko: '양양 쌀롱 버스킹·라이브드로잉', title_en: 'Yangyang Salon: Busking & Live Drawing', host: '양양 쌀롱', place: '남대천 산책로', link: '#' },
]
