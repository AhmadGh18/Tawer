import { useLang } from '../i18n/LanguageContext.jsx'
import { testimonials } from '../content.js'
import Icon from './Icon.jsx'

export default function Testimonials() {
  const { t } = useLang()

  return (
    <section id="testimonials" className="bg-paper-tint">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:py-24">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-600">{t.testimonials.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            {t.testimonials.heading}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft sm:text-base">{t.testimonials.sub}</p>
        </div>

        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 [column-fill:_balance]">
          {testimonials.map((s, i) => (
            <article
              key={i}
              className="mb-5 break-inside-avoid rounded-card border border-lavender-200 bg-white p-6 shadow-soft"
            >
              <Icon name="quote" size={28} className="text-violet-300" />

              <p
                lang={s.lang}
                dir={s.lang === 'ar' ? 'rtl' : 'ltr'}
                className={`mt-3 text-[14.5px] leading-relaxed text-ink/90 ${s.lang === 'ar' ? 'text-end' : ''}`}
                style={s.lang === 'ar' ? { fontFamily: 'var(--font-arabic)' } : undefined}
              >
                {s.quote}
              </p>

              <div className="mt-5 flex items-center justify-between gap-3 border-t border-lavender-200 pt-4">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cta-gradient text-sm font-bold text-white">
                    {initial(s.name)}
                  </span>
                  <div className="leading-tight">
                    <p className="text-sm font-bold text-ink">{s.name}</p>
                    <p className="text-xs text-ink-soft">
                      {s.age ? `${s.age} · ` : ''}
                      {s.country}
                      {s.role ? ` · ${s.role}` : ''}
                    </p>
                  </div>
                </div>
                <span className="rounded-md bg-lavender-100 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-violet-700">
                  {s.code}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
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
