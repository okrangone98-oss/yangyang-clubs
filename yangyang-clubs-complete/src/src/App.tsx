
import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Globe, MapPin, Users, Filter, Mail, Link as LinkIcon, Instagram, CalendarDays } from 'lucide-react'
import { CLUBS, CATEGORIES } from './data/clubs'
import { EVENTS } from './data/events'
import { GALLERY } from './data/gallery'
// GitHub Pages용 정적 자산 경로 헬퍼
function asset(path: string) {
  const base = (import.meta as any).env?.BASE_URL || "/";
  const clean = path.startsWith("/") ? path.slice(1) : path;
  return `${base}${clean}`;
}

const t = {
  ko: {
    siteName: '양양 동아리 소개',
    tagline: '바다·숲·사람과 함께 만드는 로컬 커뮤니티',
    heroCta: '동아리 보기',
    searchPlaceholder: '동아리 이름, 키워드 검색',
    filters: '필터',
    category: '카테고리',
    language: '언어',
    all: '전체',
    clubs: '동아리',
    members: '명',
    location: '활동지역',
    more: '자세히',
    events: '이달의 행사',
    contact: '문의/참여',
    joinDesc: '참여 신청 또는 제휴/후원 문의는 이메일로 보내주세요.',
    emailUs: '이메일 보내기',
    mapTitle: '양양에서 활동 중',
    empty: '조건에 맞는 동아리가 없습니다.',
    footer: '© 2025 Yangyang Clubs. All rights reserved.',
    apply: '동아리 등록 신청',
    gallery: '활동 갤러리',
    adminNote: '모든 신규 등록은 관리자가 검토·승인합니다.',
  },
  en: {
    siteName: 'Clubs of Yangyang',
    tagline: 'Sea · Forest · People — Local communities that grow together',
    heroCta: 'Browse Clubs',
    searchPlaceholder: 'Search clubs or keywords',
    filters: 'Filters',
    category: 'Category',
    language: 'Language',
    all: 'All',
    clubs: 'Clubs',
    members: 'members',
    location: 'Location',
    more: 'Details',
    events: `This Month's Events`,
    contact: 'Contact / Join',
    joinDesc: 'For join requests, partnerships or sponsorships, reach us by email.',
    emailUs: 'Send Email',
    mapTitle: 'Active in Yangyang',
    empty: 'No clubs match your filters.',
    footer: '© 2025 Yangyang Clubs. All rights reserved.',
    apply: 'Apply to List Your Club',
    gallery: 'Activity Gallery',
    adminNote: 'All new submissions are reviewed and approved by an admin.',
  },
}

function pick(lang: 'ko'|'en', ko: string, en: string) { return lang === 'ko' ? ko : en }

export default function App() {
  const [lang, setLang] = useState<'ko'|'en'>('ko')
  const [q, setQ] = useState('')
  const [cat, setCat] = useState('all')
  const [langFilter, setLangFilter] = useState<'all'|'ko'|'en'>('all')

  const dict = t[lang]

  const filtered = useMemo(() => {
    const text = q.trim().toLowerCase()
    return CLUBS.filter((c) => {
      const hitQuery = !text ? true :
        [c.name_ko, c.name_en, c.desc_ko, c.desc_en, c.tags.join(' '), c.location]
          .filter(Boolean).join(' ').toLowerCase().includes(text)
      const hitCat = cat === 'all' ? true : c.category === cat
      const hitLang = langFilter === 'all' ? true : c.languages.includes(langFilter)
      return hitQuery && hitCat && hitLang
    })
  }, [q, cat, langFilter])

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5" />
            <span className="font-semibold">{dict.siteName}</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang(lang === 'ko' ? 'en' : 'ko')}
              className="px-3 py-1 border rounded-lg text-sm hover:bg-slate-100"
              aria-label={lang === 'ko' ? 'Switch to English' : '한국어로 보기'}
            >
              {lang === 'ko' ? 'EN' : 'KR'}
            </button>
            <a href="#clubs" className="px-3 py-1.5 rounded-lg bg-slate-900 text-white text-sm"> {dict.heroCta} </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1545732517-5f3bfcbd36f5?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-25" />
        <div className="max-w-6xl mx-auto px-4 py-16 sm:py-24">
          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            {dict.siteName}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
            className="mt-3 text-lg sm:text-xl text-slate-700">
            {dict.tagline}
          </motion.p>
          <div className="mt-6 max-w-xl">
            <div className="flex items-center gap-2">
              <input
                className="flex-1 rounded-lg border px-3 py-2 text-sm"
                placeholder={dict.searchPlaceholder}
                value={q}
                onChange={(e) => setQ(e.target.value)}
              />
              <button className="px-3 py-2 rounded-lg border">
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="border-t bg-white/60">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-slate-100 border"><Filter className="w-4 h-4"/> {dict.filters}</span>

          {/* Category */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-slate-600 w-20">{dict.category}</span>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((c) => (
                <button key={c.id}
                  className={`px-3 py-1.5 rounded-lg text-sm border ${cat===c.id ? 'bg-slate-900 text-white' : 'bg-white hover:bg-slate-100'}`}
                  onClick={() => setCat(c.id)}>
                  {pick(lang, c.ko, c.en)}
                </button>
              ))}
            </div>
          </div>

          {/* Language */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-slate-600 w-16">{dict.language}</span>
            <div className="flex gap-2">
              {['all','ko','en'].map((l) => (
                <button key={l}
                  className={`px-3 py-1.5 rounded-lg text-sm border ${langFilter===l ? 'bg-slate-900 text-white' : 'bg-white hover:bg-slate-100'}`}
                  onClick={() => setLangFilter(l as any)}>
                  {l==='all' ? pick(lang, '전체','All') : l.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clubs List */}
      <section id="clubs" className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex items-end justify-between mb-4">
          <h2 className="text-2xl font-bold">{dict.clubs}</h2>
        </div>
        {filtered.length === 0 ? (
          <p className="text-slate-600">{dict.empty}</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((c) => (
              <div key={c.id} className="rounded-2xl border bg-white shadow-sm p-4 space-y-3">
                {c.cover && <img src={c.cover} alt={pick(lang, c.name_ko, c.name_en)} className="w-full h-36 object-cover rounded-xl" />}
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-semibold">{pick(lang, c.name_ko, c.name_en)}</h3>
                  <div className="flex items-center gap-1">
                    {c.languages.map((l) => (<span key={l} className="text-[10px] border rounded px-1.5 py-0.5">{l.toUpperCase()}</span>))}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Users className="w-4 h-4" /> {c.members} {pick(lang,'명','members')}
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <MapPin className="w-4 h-4" /> {c.location}
                </div>
                <p className="text-slate-700 text-sm">{pick(lang, c.desc_ko, c.desc_en)}</p>
                <div className="flex flex-wrap gap-2">
                  {c.tags.map((tag) => (<span key={tag} className="text-xs bg-slate-100 border rounded-full px-2 py-1">#{tag}</span>))}
                </div>
                <div className="flex gap-2 pt-2">
                  {c.links?.website && (<a className="px-2 py-1.5 border rounded text-sm inline-flex items-center gap-1" href={c.links.website} target="_blank" rel="noreferrer"><LinkIcon className="w-4 h-4"/>Website</a>)}
                  {c.links?.instagram && (<a className="px-2 py-1.5 border rounded text-sm inline-flex items-center gap-1" href={c.links.instagram} target="_blank" rel="noreferrer"><Instagram className="w-4 h-4"/>Instagram</a>)}
                  {c.links?.email && (<a className="px-2 py-1.5 rounded text-sm bg-slate-900 text-white inline-flex items-center gap-1" href={`mailto:${c.links.email}`}><Mail className="w-4 h-4"/>Email</a>)}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Events */}
      <section className="bg-white border-t">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <h2 className="text-2xl font-bold flex items-center gap-2"><CalendarDays className="w-6 h-6" /> {dict.events}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {EVENTS.map((e) => (
              <div key={e.id} className="rounded-2xl border bg-white shadow-sm p-4 space-y-2">
                <h3 className="font-semibold">{pick(lang, e.title_ko, e.title_en)}</h3>
                <div className="text-sm text-slate-700">📅 {new Date(e.date).toLocaleDateString(lang === 'ko' ? 'ko-KR' : 'en-US', { dateStyle: 'medium' })}</div>
                <div className="text-sm text-slate-700">👥 {e.host}</div>
                <div className="text-sm text-slate-700">📍 {e.place}</div>
                <div><a className="underline text-sm" href={e.link} target="_blank" rel="noreferrer">Link</a></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-white border-t">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <h2 className="text-2xl font-bold">{dict.gallery}</h2>
          <p className="text-sm text-slate-600 mt-1">{dict.adminNote}</p>
          <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {GALLERY.map((g) => (
              <figure key={g.src} className="rounded-2xl overflow-hidden border bg-slate-50">
                <img src={g.src} alt={pick(lang, g.ko, g.en)} className="w-full h-56 object-cover"/>
                <figcaption className="px-3 py-2 text-sm text-slate-700">{pick(lang, g.ko, g.en)}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <h2 className="text-2xl font-bold flex items-center gap-2"><MapPin className="w-6 h-6" /> {dict.mapTitle}</h2>
          <div className="mt-4 rounded-2xl overflow-hidden shadow-sm border">
            <iframe
              title="Yangyang Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3244.930212533136!2d128.6203!3d38.0733"
              width="100%"
              height="360"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-slate-50 border-t">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <h2 className="text-2xl font-bold">{dict.contact}</h2>
          <p className="mt-2 text-slate-700">{dict.joinDesc}</p>
          <p className="mt-1 text-xs text-slate-500">{dict.adminNote}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <a className="px-3 py-2 rounded bg-slate-900 text-white text-sm" href="mailto:hello@yangyangclubs.org?subject=%5BJoin%5D%20Yangyang%20Club%20Inquiry">{dict.emailUs}</a>
            <a className="px-3 py-2 rounded border text-sm" target="_blank" rel="noreferrer" href="https://forms.gle/your-google-form">{dict.apply}</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white/70">
        <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-slate-600">
          {dict.footer}
        </div>
      </footer>
    </div>
  )
}
