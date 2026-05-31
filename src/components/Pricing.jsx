import { useLang } from '../i18n/LanguageContext.jsx'
import { WHATSAPP_URL } from '../content.js'

export default function Pricing() {
  const { t } = useLang()

  return (
    <section id="pricing" className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:py-24">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-600">{t.pricing.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            {t.pricing.heading}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft sm:text-base">{t.pricing.sub}</p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.pricing.items.map((p) => (
            <article
              key={p.name}
              className={`relative flex flex-col rounded-card p-6 transition ${
                p.highlight
                  ? 'bg-cta-gradient text-white shadow-pop lg:-translate-y-3 lg:scale-[1.03]'
                  : 'border border-lavender-200 bg-paper-tint text-ink shadow-soft'
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 start-6 rounded-full bg-lavender-200 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-violet-700">
                  {t.pricing.popular}
                </span>
              )}
              <h3 className={`text-base font-bold ${p.highlight ? 'text-white' : 'text-ink'}`}>{p.name}</h3>
              <p className={`mt-1 text-xs ${p.highlight ? 'text-white/80' : 'text-ink-soft'}`}>{p.hours}</p>
              <div className="mt-5 flex items-baseline gap-1">
                <span className={`text-4xl font-extrabold ${p.highlight ? 'text-white' : 'text-violet-700'}`}>
                  {p.price}
                </span>
                <span className={`text-xs ${p.highlight ? 'text-white/80' : 'text-ink-soft'}`}>
                  {t.pricing.perCourse}
                </span>
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className={`mt-6 inline-flex items-center justify-center rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                  p.highlight
                    ? 'bg-white text-violet-700 hover:bg-lavender-100'
                    : 'bg-violet-600 text-white hover:bg-violet-500'
                }`}
              >
                {t.pricing.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
