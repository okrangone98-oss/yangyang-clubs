import React, { useMemo, useState } from 'react'
import { clubs as rawClubs, Club } from './data/clubs'

type Lang = 'ko' | 'en'

export default function App() {
  const [lang, setLang] = useState<Lang>('ko')
  const [q, setQ] = useState('')

  const clubs = useMemo(() => {
    const keyword = q.trim().toLowerCase()
    if (!keyword) return rawClubs
    return rawClubs.filter((c) => {
      const hay =
        `${c.name_ko} ${c.name_en} ${c.summary_ko} ${c.summary_en} ${c.tags.join(' ')}`.toLowerCase()
      return hay.includes(keyword)
    })
  }, [q])

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* 헤더 */}
      <header className="max-w-5xl mx-auto px-4 py-6 flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-semibold">Clubs of Yangyang</h1>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang('ko')}
            className={`px-3 py-1 rounded-full border ${lang === 'ko' ? 'bg-gray-900 text-white' : 'bg-white'}`}
          >
            KO
          </button>
          <button
            onClick={() => setLang('en')}
            className={`px-3 py-1 rounded-full border ${lang === 'en' ? 'bg-gray-900 text-white' : 'bg-white'}`}
          >
            EN
          </button>
        </div>
      </header>

      {/* 서브헤드 */}
      <section className="max-w-5xl mx-auto px-4">
        <p className="text-gray-600 mb-4">
          {lang === 'ko'
            ? '양양의 동아리/커뮤니티를 한 곳에서 찾고 참여하세요.'
            : 'Find and join Yangyang’s clubs and communities.'}
        </p>

        <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <div className="text-sm text-gray-500">
            {lang === 'ko'
              ? `총 ${rawClubs.length}개 동아리`
              : `${rawClubs.length} clubs`}
          </div>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={lang === 'ko' ? '검색: 이름/태그/설명' : 'Search: name/tags/summary'}
            className="w-full md:w-80 border rounded-lg px-3 py-2"
          />
        </div>
      </section>

      {/* 카드 그리드 */}
      <main className="max-w-5xl mx-auto px-4 py-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {clubs.map((c) => (
          <ClubCard key={c.id} c={c} lang={lang} />
        ))}
      </main>

      {/* 푸터 */}
      <footer className="max-w-5xl mx-auto px-4 py-10 text-sm text-gray-500">
        {lang === 'ko' ? (
          <>
            <p>사진은 <code>public/assets</code>에 두고, 파일명은 영문으로 올려주세요.</p>
            <p>GitHub Pages 배포가 끝난 후 새로고침(Ctrl+F5)하면 최신이 보입니다.</p>
          </>
        ) : (
          <>
            <p>Place images in <code>public/assets</code> with English file names.</p>
            <p>After deployment, refresh (Ctrl+F5) to see updates.</p>
          </>
        )}
      </footer>
    </div>
  )
}

function ClubCard({ c, lang }: { c: Club; lang: Lang }) {
  return (
    <article className="border rounded-xl overflow-hidden shadow-sm bg-white">
      <img
        src={c.image}
        alt={lang === 'ko' ? c.name_ko : c.name_en}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1">
          {lang === 'ko' ? c.name_ko : c.name_en}
        </h3>
        <div className="text-xs text-gray-500 mb-2">
          {lang === 'ko' ? `${c.members} 명 · ${c.area_ko}` : `${c.members} members · ${c.area_en}`}
        </div>
        <p className="text-sm text-gray-700 mb-3">
          {lang === 'ko' ? c.summary_ko : c.summary_en}
        </p>
        <div className="flex flex-wrap gap-2 mb-3">
          {c.tags.map((t) => (
            <span key={t} className="text-xs bg-gray-100 px-2 py-1 rounded-full">
              #{t}
            </span>
          ))}
        </div>
        {c.links && c.links.length > 0 && (
          <div className="flex gap-3">
            {c.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm underline text-gray-700 hover:text-black"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}
