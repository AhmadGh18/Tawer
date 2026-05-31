import { useLang } from '../i18n/LanguageContext.jsx'
import Icon from './Icon.jsx'
import Reveal from './Reveal.jsx'

export default function FAQ() {
  const { t } = useLang()

  return (
    <section id="faq" className="bg-white">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:py-24">
        <Reveal className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-600">{t.faq.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            {t.faq.heading}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft sm:text-base">{t.faq.sub}</p>
        </Reveal>

        <Reveal
          variant="up"
          delay={100}
          className="mt-10 divide-y divide-lavender-200 overflow-hidden rounded-card border border-lavender-200 bg-paper-tint shadow-soft"
        >
          {t.faq.items.map((item, i) => (
            <details key={i} className="group">
              <summary className="flex items-center justify-between gap-4 px-6 py-5 text-start transition hover:bg-white">
                <span className="text-[15px] font-semibold text-ink sm:text-base">{item.q}</span>
                <span className="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-lavender-100 text-violet-600 transition duration-300 group-open:rotate-45 group-open:bg-violet-600 group-open:text-white">
                  <Icon name="plus" size={14} />
                </span>
              </summary>
              <div className="px-6 pb-5 text-[14.5px] leading-relaxed text-ink-soft">{item.a}</div>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
