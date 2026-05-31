import { useEffect, useRef, useState } from 'react'
import { useLang } from '../i18n/LanguageContext.jsx'
import { testimonials } from '../content.js'
import Icon from './Icon.jsx'
import Reveal from './Reveal.jsx'
import SectionEyebrow from './SectionEyebrow.jsx'

export default function Testimonials() {
  const { t, lang } = useLang()

  return (
    <section id="testimonials" className="relative overflow-hidden bg-paper-tint">
      <div
        aria-hidden
        className="pointer-events-none absolute -end-32 bottom-0 h-72 w-72 rounded-full bg-violet-300/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:py-28">
        <Reveal className="max-w-3xl">
          <SectionEyebrow index={4}>{t.testimonials.eyebrow}</SectionEyebrow>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl md:text-5xl">
            {t.testimonials.heading}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft sm:text-base">{t.testimonials.sub}</p>
        </Reveal>

        {/* Mobile: horizontal scroll-snap carousel */}
        <MobileCarousel hint={lang === 'en' ? 'Swipe →' : '← اسحب'} lang={lang} />

        {/* Tablet & up: masonry */}
        <div className="mt-12 hidden gap-5 sm:block sm:columns-2 lg:columns-3 [column-fill:_balance]">
          {testimonials.map((s, i) => (
            <Reveal
              as="div"
              key={i}
              delay={(i % 3) * 100}
              variant="up"
              className="mb-5 block break-inside-avoid"
            >
              <TestimonialCard s={s} lang={lang} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function MobileCarousel({ hint, lang }) {
  const trackRef = useRef(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const cards = Array.from(track.querySelectorAll('[data-slide]'))
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
            const idx = Number(entry.target.dataset.slide)
            if (!Number.isNaN(idx)) setActive(idx)
          }
        })
      },
      { root: track, threshold: [0.6, 0.9] },
    )
    cards.forEach((c) => io.observe(c))
    return () => io.disconnect()
  }, [])

  function go(i) {
    const track = trackRef.current
    if (!track) return
    const slide = track.querySelector(`[data-slide="${i}"]`)
    if (slide) slide.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' })
  }

  return (
    <div className="sm:hidden">
      <div
        ref={trackRef}
        className="no-scrollbar mt-10 -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-5 px-5 pb-2"
      >
        {testimonials.map((s, i) => (
          <div
            key={i}
            data-slide={i}
            className="snap-start shrink-0 basis-[85%]"
          >
            <TestimonialCard s={s} lang={lang} />
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-1.5">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => go(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? 'w-6 bg-violet-600' : 'w-1.5 bg-lavender-300'
              }`}
            />
          ))}
        </div>
        <p className="text-[11px] font-medium uppercase tracking-wider text-ink-soft">{hint}</p>
      </div>
    </div>
  )
}

function TestimonialCard({ s, lang }) {
  return (
    <article className="relative overflow-hidden rounded-card border border-lavender-200 bg-white p-6 shadow-soft transition hover:-translate-y-0.5 hover:border-violet-300 hover:shadow-pop">
      <Icon
        name="quote"
        size={120}
        className="pointer-events-none absolute -end-4 -top-4 text-lavender-200/50"
      />

      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-1">
          {[0, 1, 2, 3, 4].map((i) => (
            <Icon key={i} name="star" size={13} filled className="text-violet-500" />
          ))}
        </div>
        <span className="rounded-md bg-lavender-100 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-violet-700">
          {s.code}
        </span>
      </div>

      <p
        lang={s.lang}
        dir={s.lang === 'ar' ? 'rtl' : 'ltr'}
        className={`relative mt-4 text-[14.5px] leading-relaxed text-ink/90 ${s.lang === 'ar' ? 'text-end' : ''}`}
        style={s.lang === 'ar' ? { fontFamily: 'var(--font-arabic)' } : undefined}
      >
        {s.quote}
      </p>

      <div className="relative mt-5 flex items-center gap-3 border-t border-lavender-200 pt-4">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cta-gradient text-sm font-bold text-white">
          {initial(s.name)}
        </span>
        <div className="min-w-0 flex-1 leading-tight">
          <div className="flex items-center gap-1.5">
            <p className="truncate text-sm font-bold text-ink">{s.name}</p>
            <span
              className="inline-flex h-4 w-4 flex-shrink-0 items-center justify-center text-violet-500"
              title={lang === 'en' ? 'Verified student' : 'طالب موثّق'}
            >
              <Icon name="verified" size={14} strokeWidth={2} />
            </span>
          </div>
          <p className="text-xs text-ink-soft">
            {s.age ? `${s.age} · ` : ''}
            {s.country}
            {s.role ? ` · ${s.role}` : ''}
          </p>
        </div>
      </div>
    </article>
  )
}

function initial(name) {
  return (name || '?')
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}
