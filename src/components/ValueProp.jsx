import { useLang } from '../i18n/LanguageContext.jsx'
import Icon from './Icon.jsx'
import Reveal from './Reveal.jsx'
import SectionEyebrow from './SectionEyebrow.jsx'

export default function ValueProp() {
  const { t, lang } = useLang()
  const [first, second, third] = t.valueProp.cards

  return (
    <section id="services" className="relative overflow-hidden bg-white">
      {/* Subtle background dotted pattern */}
      <div
        aria-hidden
        className="bg-dots pointer-events-none absolute inset-0 opacity-50"
        style={{
          maskImage:
            'radial-gradient(ellipse 60% 50% at 80% 0%, black 30%, transparent 75%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:py-28">
        <Reveal className="max-w-3xl">
          <SectionEyebrow index={1}>{t.valueProp.eyebrow}</SectionEyebrow>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl md:text-5xl">
            {t.valueProp.heading}
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-ink-soft sm:text-base">{t.valueProp.body}</p>
        </Reveal>

        {/* Bento grid — one large featured card + two supporting cards */}
        <div className="mt-12 grid gap-5 lg:grid-cols-3 lg:auto-rows-fr">
          {/* Featured (spans 2 cols on lg) */}
          <Reveal
            as="article"
            variant="up"
            className="group relative col-span-1 overflow-hidden rounded-card border border-lavender-200 bg-gradient-to-br from-paper-tint to-lavender-100 p-7 shadow-soft sm:p-9 lg:col-span-2 lg:row-span-2 lg:p-10"
          >
            {/* Decorative orb */}
            <div className="pointer-events-none absolute -end-20 -top-20 h-72 w-72 rounded-full bg-violet-400/20 blur-3xl transition group-hover:scale-110" />
            <div className="pointer-events-none absolute -start-16 -bottom-20 h-60 w-60 rounded-full bg-violet-300/30 blur-3xl" />

            {/* Big number label */}
            <span className="text-[80px] font-extrabold leading-none tracking-tighter text-violet-200/80 sm:text-[110px]">
              01
            </span>

            <div className="relative -mt-6 max-w-md sm:-mt-8">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-cta-gradient text-white shadow-pop transition group-hover:scale-105 group-hover:rotate-3">
                <Icon name={first.icon} size={26} strokeWidth={1.8} />
              </span>
              <h3 className="mt-5 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">{first.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft sm:text-base">{first.body}</p>

              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  lang === 'en' ? 'Free consultation' : 'استشارة مجانية',
                  lang === 'en' ? 'Goal-mapped plan' : 'خطة وفق هدفك',
                  lang === 'en' ? 'Dedicated instructor' : 'مدرّس مخصّص',
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-full border border-violet-300/60 bg-white/80 px-3 py-1 text-[12px] font-semibold text-violet-700"
                  >
                    <Icon name="check" size={12} strokeWidth={2.6} />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Supporting card 1 */}
          <BentoCard item={second} number="02" delay={120} />

          {/* Supporting card 2 */}
          <BentoCard item={third} number="03" delay={240} />
        </div>

        {/* Vision + Mission — single quote-style spotlight */}
        <Reveal
          variant="scale"
          delay={120}
          className="mt-12 overflow-hidden rounded-card bg-cta-gradient text-white shadow-pop"
        >
          <div className="relative grid gap-8 px-7 py-10 sm:px-12 sm:py-14 lg:grid-cols-12 lg:gap-12">
            {/* Decorative quote glyph */}
            <Icon
              name="quote"
              size={120}
              className="pointer-events-none absolute -top-4 -end-4 text-white/10"
            />
            <Icon
              name="quote"
              size={80}
              className="pointer-events-none absolute bottom-2 start-2 -scale-x-100 text-white/10"
            />

            <div className="relative lg:col-span-7">
              <SpotlightHeading icon="clock" title={t.valueProp.visionTitle} />
              <p className="mt-3 text-lg leading-relaxed text-white/90 sm:text-xl">{t.valueProp.visionBody}</p>
            </div>

            <div className="relative lg:col-span-5 lg:border-s lg:border-white/15 lg:ps-12">
              <SpotlightHeading icon="star" title={t.valueProp.missionTitle} />
              <p className="mt-3 text-[15px] leading-relaxed text-white/85 sm:text-base">{t.valueProp.missionBody}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function BentoCard({ item, number, delay = 0 }) {
  return (
    <Reveal
      as="article"
      variant="up"
      delay={delay}
      className="group relative overflow-hidden rounded-card border border-lavender-200 bg-paper-tint p-7 shadow-soft transition hover:-translate-y-1 hover:border-violet-300 hover:shadow-pop"
    >
      <span className="absolute end-5 top-5 text-3xl font-extrabold text-lavender-200">{number}</span>
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cta-gradient text-white shadow-soft transition group-hover:scale-105 group-hover:rotate-3">
        <Icon name={item.icon} size={22} strokeWidth={1.8} />
      </span>
      <h3 className="mt-4 text-lg font-bold text-ink">{item.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.body}</p>
    </Reveal>
  )
}

function SpotlightHeading({ icon, title }) {
  return (
    <div className="flex items-center gap-3">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur">
        <Icon name={icon} size={18} />
      </span>
      <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-white/85">{title}</h3>
    </div>
  )
}
