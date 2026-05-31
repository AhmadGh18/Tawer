import { useLang } from '../i18n/LanguageContext.jsx'
import { WHATSAPP_URL } from '../content.js'
import Icon from './Icon.jsx'
import Reveal from './Reveal.jsx'
import SectionEyebrow from './SectionEyebrow.jsx'

export default function Pricing() {
  const { t } = useLang()

  return (
    <section id="pricing" className="relative overflow-hidden bg-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -start-24 top-24 h-64 w-64 rounded-full bg-violet-300/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:py-28">
        <Reveal className="max-w-3xl">
          <SectionEyebrow index={3}>{t.pricing.eyebrow}</SectionEyebrow>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl md:text-5xl">
            {t.pricing.heading}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft sm:text-base">{t.pricing.sub}</p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:items-stretch">
          {t.pricing.items.map((p, i) => (
            <Reveal
              as="article"
              key={p.name}
              delay={i * 110}
              variant={p.highlight ? 'scale' : 'up'}
              className={`group relative flex flex-col rounded-card transition lg:items-stretch ${
                p.highlight
                  ? 'shine-on-hover bg-cta-gradient text-white shadow-pop lg:scale-[1.04] lg:-translate-y-2 hover:lg:-translate-y-4'
                  : 'border border-lavender-200 bg-paper-tint text-ink shadow-soft hover:-translate-y-1 hover:border-violet-300 hover:shadow-pop'
              }`}
            >
              {p.highlight && (
                <div className="absolute inset-x-0 -top-4 flex justify-center">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-violet-700 shadow-soft">
                    <Icon name="sparkle" size={11} className="text-violet-500" />
                    {t.pricing.popular}
                  </span>
                </div>
              )}

              <div className={`flex flex-col gap-1 px-6 pt-7 ${p.highlight ? '' : ''}`}>
                <h3 className={`text-base font-bold ${p.highlight ? 'text-white' : 'text-ink'}`}>{p.name}</h3>
                <p className={`text-xs font-medium ${p.highlight ? 'text-white/80' : 'text-ink-soft'}`}>
                  {p.hours}
                </p>
              </div>

              <div className="px-6 pt-4">
                <div className="flex items-baseline gap-1">
                  <span
                    className={`text-[42px] font-extrabold leading-none tracking-tight ${
                      p.highlight ? 'text-white' : 'text-violet-700'
                    }`}
                  >
                    {p.price}
                  </span>
                  <span className={`text-xs ${p.highlight ? 'text-white/80' : 'text-ink-soft'}`}>
                    {t.pricing.perCourse}
                  </span>
                </div>
                <p
                  className={`mt-1 text-[11.5px] font-medium ${
                    p.highlight ? 'text-white/75' : 'text-ink-soft/80'
                  }`}
                >
                  ≈ {p.perHour} {t.pricing.perHour}
                </p>
              </div>

              <ul className="mt-5 flex-1 space-y-2.5 px-6 pb-6">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[13.5px]">
                    <span
                      className={`mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${
                        p.highlight ? 'bg-white/20 text-white' : 'bg-lavender-100 text-violet-600'
                      }`}
                    >
                      <Icon name="check" size={11} strokeWidth={2.6} />
                    </span>
                    <span className={p.highlight ? 'text-white/90' : 'text-ink-soft'}>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="px-6 pb-7">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold transition ${
                    p.highlight
                      ? 'bg-white text-violet-700 hover:-translate-y-0.5 hover:bg-lavender-100'
                      : 'bg-violet-600 text-white hover:-translate-y-0.5 hover:bg-violet-500'
                  }`}
                >
                  <Icon name="whatsapp" size={14} />
                  <span>{p.highlight ? t.pricing.ctaHighlight : t.pricing.cta}</span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
