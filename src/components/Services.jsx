import { useState } from 'react'
import { useLang } from '../i18n/LanguageContext.jsx'
import Icon from './Icon.jsx'
import Reveal from './Reveal.jsx'
import SectionEyebrow from './SectionEyebrow.jsx'

export default function Services() {
  const { t } = useLang()
  const [openId, setOpenId] = useState(null)

  return (
    <section id="courses" className="relative overflow-hidden bg-paper-tint">
      {/* Soft floating background blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute -end-32 top-32 h-72 w-72 rounded-full bg-violet-300/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:py-28">
        <Reveal className="max-w-3xl">
          <SectionEyebrow index={2}>{t.services.eyebrow}</SectionEyebrow>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl md:text-5xl">
            {t.services.heading}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft sm:text-base">{t.services.sub}</p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((s, i) => {
            const isOpen = openId === s.id
            return (
              <Reveal
                as="article"
                key={s.id}
                delay={(i % 3) * 100}
                variant="up"
                className={`group relative flex flex-col overflow-hidden rounded-card border bg-white p-6 shadow-soft transition ${
                  isOpen
                    ? 'border-violet-500 ring-2 ring-violet-500/15'
                    : 'border-lavender-200 hover:-translate-y-1 hover:border-violet-300 hover:shadow-pop'
                }`}
              >
                {/* Gradient corner decoration */}
                <div className="pointer-events-none absolute -end-12 -top-12 h-32 w-32 rounded-full bg-lavender-200/60 opacity-0 transition group-hover:scale-125 group-hover:opacity-100" />

                <div className="relative flex items-start gap-4">
                  <span className="inline-flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-cta-gradient text-white shadow-soft transition group-hover:scale-105 group-hover:rotate-3">
                    <Icon name={s.icon} size={26} strokeWidth={1.8} />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold leading-tight text-ink">{s.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{s.blurb}</p>
                  </div>
                </div>

                {/* Chips */}
                {s.chips && (
                  <ul className="relative mt-5 flex flex-wrap gap-1.5">
                    {s.chips.map((chip) => (
                      <li
                        key={chip.label}
                        className="inline-flex items-center gap-1.5 rounded-full border border-lavender-200 bg-lavender-100/60 px-2.5 py-1 text-[11.5px] font-semibold text-violet-700"
                      >
                        <Icon name={chip.icon} size={11} strokeWidth={2} />
                        <span>{chip.label}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : s.id)}
                  className="relative mt-5 inline-flex items-center gap-1.5 self-start rounded-full border border-violet-300/50 bg-white px-3 py-1.5 text-[12.5px] font-semibold text-violet-700 transition hover:border-violet-500 hover:bg-lavender-100"
                  aria-expanded={isOpen}
                >
                  <span>{isOpen ? t.services.hide : t.services.learnMore}</span>
                  <Icon
                    name="chevron"
                    size={13}
                    className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {isOpen && (
                  <dl className="relative mt-5 space-y-4 border-t border-lavender-200 pt-5 text-sm">
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
