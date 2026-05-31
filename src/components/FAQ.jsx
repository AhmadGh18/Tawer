import { useLang } from '../i18n/LanguageContext.jsx'
import { WHATSAPP_URL } from '../content.js'
import Icon from './Icon.jsx'
import Reveal from './Reveal.jsx'
import SectionEyebrow from './SectionEyebrow.jsx'

export default function FAQ() {
  const { t } = useLang()
  // Split into two columns for lg+ to use horizontal space and reduce scroll
  const items = t.faq.items
  const half = Math.ceil(items.length / 2)
  const colA = items.slice(0, half)
  const colB = items.slice(half)

  return (
    <section id="faq" className="relative overflow-hidden bg-white">
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:py-28">
        <Reveal className="max-w-3xl">
          <SectionEyebrow index={5}>{t.faq.eyebrow}</SectionEyebrow>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl md:text-5xl">
            {t.faq.heading}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft sm:text-base">{t.faq.sub}</p>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-2 lg:gap-5">
          <FAQColumn items={colA} startIndex={0} />
          <FAQColumn items={colB} startIndex={colA.length} />
        </div>

        {/* Rescue CTA card */}
        <Reveal
          variant="up"
          delay={150}
          className="mt-10 overflow-hidden rounded-card border border-lavender-200 bg-gradient-to-br from-paper-tint to-lavender-100 p-7 shadow-soft sm:p-9"
        >
          <div className="relative flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4 sm:items-center">
              <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-cta-gradient text-white shadow-soft">
                <Icon name="whatsapp" size={22} />
              </span>
              <div>
                <h3 className="text-lg font-bold text-ink sm:text-xl">{t.faq.rescue.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">{t.faq.rescue.body}</p>
              </div>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-cta-gradient px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-pop sm:flex-shrink-0"
            >
              <span>{t.faq.rescue.cta}</span>
              <Icon
                name="arrowRight"
                size={14}
                className="rtl:rotate-180 transition group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5"
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function FAQColumn({ items, startIndex }) {
  return (
    <Reveal variant="up" className="space-y-3">
      {items.map((item, i) => (
        <details
          key={i}
          className="group rounded-2xl border border-lavender-200 bg-paper-tint shadow-soft transition open:border-violet-400/60 open:shadow-pop"
        >
          <summary className="flex items-center justify-between gap-4 px-5 py-4 text-start transition hover:bg-white">
            <div className="flex items-center gap-3 min-w-0">
              <span className="inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md bg-lavender-200 text-[11px] font-bold text-violet-700">
                {String(startIndex + i + 1).padStart(2, '0')}
              </span>
              <span className="text-[15px] font-semibold leading-snug text-ink sm:text-base">{item.q}</span>
            </div>
            <span className="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-lavender-100 text-violet-600 transition duration-300 group-open:rotate-45 group-open:bg-violet-600 group-open:text-white">
              <Icon name="plus" size={14} />
            </span>
          </summary>
          <div className="px-5 pb-5 ps-14 text-[14.5px] leading-relaxed text-ink-soft">{item.a}</div>
        </details>
      ))}
    </Reveal>
  )
}
