import { useLang } from '../i18n/LanguageContext.jsx'
import Icon from './Icon.jsx'

export default function ValueProp() {
  const { t } = useLang()

  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:py-24">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-600">{t.valueProp.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            {t.valueProp.heading}
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-ink-soft sm:text-base">{t.valueProp.body}</p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.valueProp.cards.map((card) => (
            <article
              key={card.title}
              className="group relative overflow-hidden rounded-card border border-lavender-200 bg-paper-tint p-7 shadow-soft transition hover:-translate-y-1 hover:border-violet-300 hover:shadow-pop"
            >
              <div className="absolute -end-12 -top-12 h-32 w-32 rounded-full bg-lavender-200/70 transition group-hover:scale-110" />
              <div className="relative">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cta-gradient text-white shadow-soft">
                  <Icon name={card.icon} size={22} strokeWidth={1.8} />
                </span>
                <h3 className="mt-4 text-lg font-bold text-ink">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{card.body}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          <article className="rounded-card border border-lavender-200 bg-paper-tint p-7 shadow-soft">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-white">
                <Icon name="clock" size={18} />
              </span>
              <h3 className="text-lg font-bold text-ink">{t.valueProp.visionTitle}</h3>
            </div>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{t.valueProp.visionBody}</p>
          </article>
          <article className="rounded-card border border-lavender-200 bg-paper-tint p-7 shadow-soft">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500 text-white">
                <Icon name="star" size={18} />
              </span>
              <h3 className="text-lg font-bold text-ink">{t.valueProp.missionTitle}</h3>
            </div>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{t.valueProp.missionBody}</p>
          </article>
        </div>
      </div>
    </section>
  )
}
