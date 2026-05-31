import { useState } from 'react'
import { useLang } from '../i18n/LanguageContext.jsx'
import Icon from './Icon.jsx'
import Reveal from './Reveal.jsx'

export default function Services() {
  const { t } = useLang()
  const [openId, setOpenId] = useState(null)

  return (
    <section id="courses" className="bg-paper-tint">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:py-24">
        <Reveal className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-600">{t.services.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            {t.services.heading}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft sm:text-base">{t.services.sub}</p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((s, i) => {
            const isOpen = openId === s.id
            return (
              <Reveal
                as="article"
                key={s.id}
                delay={(i % 3) * 100}
                variant="up"
                className={`group relative flex flex-col rounded-card border bg-white p-6 shadow-soft transition ${
                  isOpen
                    ? 'border-violet-500 ring-2 ring-violet-500/15'
                    : 'border-lavender-200 hover:-translate-y-1 hover:border-violet-300 hover:shadow-pop'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cta-gradient text-white shadow-soft transition group-hover:scale-105 group-hover:rotate-3">
                    <Icon name={s.icon} size={22} strokeWidth={1.8} />
                  </span>
                  <h3 className="text-lg font-bold text-ink">{s.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{s.blurb}</p>

                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : s.id)}
                  className="mt-5 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-violet-600 transition hover:text-violet-500"
                  aria-expanded={isOpen}
                >
                  <span>{isOpen ? t.services.hide : t.services.learnMore}</span>
                  <Icon
                    name="chevron"
                    size={14}
                    className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {isOpen && (
                  <dl className="mt-5 space-y-4 border-t border-lavender-200 pt-5 text-sm">
                    {s.qa.map((qa, j) => (
                      <div
                        key={qa.q}
                        className="entrance"
                        style={{ animationDelay: `${j * 70}ms`, animationDuration: '420ms' }}
                      >
                        <dt className="font-semibold text-ink">{qa.q}</dt>
                        <dd className="mt-1 leading-relaxed text-ink-soft">{qa.a}</dd>
                      </div>
                    ))}
                  </dl>
                )}
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
