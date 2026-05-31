import { useLang } from '../i18n/LanguageContext.jsx'
import { WHATSAPP_URL } from '../content.js'
import Icon from './Icon.jsx'

export default function Hero() {
  const { t, lang } = useLang()

  return (
    <section id="top" className="bg-hero-gradient relative isolate overflow-hidden">
      {/* Decorative orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-float-slow absolute -top-20 start-1/3 h-72 w-72 rounded-full bg-violet-400/25 blur-3xl" />
        <div className="animate-float-slower absolute top-1/3 -end-24 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="animate-float-slow absolute bottom-0 -start-24 h-72 w-72 rounded-full bg-lavender-300/50 blur-3xl" />
      </div>

      {/* Soft grid texture */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.18]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(106,13,173,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(106,13,173,0.08) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, black 40%, transparent 80%)',
        }}
      />

      {/* Floating context badges — give the hero depth without data overload */}
      <FloatingContextCards lang={lang} t={t} />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-5 pt-16 pb-20 text-center sm:pt-24 sm:pb-28">
        <span
          className="entrance inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-white/70 px-3.5 py-1.5 text-[11px] font-bold tracking-[0.18em] uppercase text-violet-700 backdrop-blur"
          style={{ animationDelay: '0ms' }}
        >
          <Icon name="sparkle" size={12} />
          {t.hero.tagline}
        </span>

        <h1
          className="entrance mt-7 text-5xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-6xl md:text-7xl"
          style={{ animationDelay: '120ms' }}
        >
          {t.hero.headingLead}{' '}
          <span className="text-gradient relative inline-block">
            {t.hero.headingHighlight}
            <svg
              aria-hidden
              viewBox="0 0 220 14"
              preserveAspectRatio="none"
              className="draw-line absolute -bottom-2 start-0 h-3 w-full text-violet-500"
            >
              <path
                d="M2 9 C 60 2, 160 14, 218 5"
                pathLength="1"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>

        <p
          className="entrance mt-4 text-sm font-medium text-violet-600/80 sm:text-base"
          style={{ animationDelay: '260ms' }}
          lang={lang === 'en' ? 'ar' : 'en'}
          dir={lang === 'en' ? 'rtl' : 'ltr'}
        >
          {t.hero.taglineAr}
        </p>

        <p
          className="entrance mt-6 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg"
          style={{ animationDelay: '380ms' }}
        >
          {t.hero.subheading}
        </p>

        <div
          className="entrance mt-9 flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
          style={{ animationDelay: '500ms' }}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center gap-2 rounded-full bg-cta-gradient px-7 py-4 text-sm font-semibold text-white shadow-pop transition hover:-translate-y-0.5 sm:text-base"
          >
            <span>{t.hero.ctaPrimary}</span>
            <Icon
              name="arrowRight"
              size={16}
              className="rtl:rotate-180 transition group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5"
            />
          </a>
          <a
            href="#courses"
            className="inline-flex items-center gap-2 rounded-full border border-violet-400/40 bg-white/80 px-7 py-4 text-sm font-semibold text-violet-700 backdrop-blur transition hover:border-violet-500 hover:bg-white sm:text-base"
          >
            {t.hero.ctaSecondary}
          </a>
        </div>

        <ul
          className="entrance mt-10 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-ink-soft"
          style={{ animationDelay: '640ms' }}
        >
          {t.hero.trust.map((item) => (
            <li key={item.label} className="inline-flex items-center gap-2">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-violet-100 text-violet-600">
                <Icon name={item.icon} size={12} strokeWidth={2.2} />
              </span>
              <span className="font-medium">{item.label}</span>
            </li>
          ))}
        </ul>

        {/* Social proof bar */}
        <div
          className="entrance mt-14 inline-flex flex-col items-center gap-4 rounded-2xl border border-lavender-200 bg-white/80 px-6 py-4 backdrop-blur sm:flex-row sm:gap-6 sm:py-3"
          style={{ animationDelay: '780ms' }}
        >
          <AvatarGroup codes={t.hero.socialProof.countries} />
          <div className="h-px w-12 bg-lavender-200 sm:h-8 sm:w-px" />
          <div className="flex flex-col items-center gap-0.5 sm:items-start">
            <Stars rating={t.hero.socialProof.rating} />
            <p className="text-[12px] font-medium text-ink-soft">{t.hero.socialProof.ratingLabel}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stars({ rating }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5 text-violet-500">
        {[0, 1, 2, 3, 4].map((i) => (
          <Icon
            key={i}
            name="star"
            size={14}
            filled
            className="animate-twinkle"
            style={{ animationDelay: `${i * 120}ms` }}
          />
        ))}
      </div>
      <span className="text-sm font-bold text-ink">{rating}</span>
    </div>
  )
}

function AvatarGroup({ codes }) {
  const colors = [
    'from-violet-500 to-violet-600',
    'from-violet-400 to-violet-500',
    'from-violet-300 to-violet-400',
    'from-violet-500 to-violet-700',
  ]
  return (
    <div className="flex items-center -space-x-2 rtl:space-x-reverse">
      {codes.map((code, i) => (
        <span
          key={code + i}
          className={`inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br ${colors[i % colors.length]} text-[10px] font-bold text-white shadow-soft`}
        >
          {code}
        </span>
      ))}
    </div>
  )
}

function FloatingContextCards({ lang, t }) {
  // Position decorative cards around the hero — subtle, suggest the product
  // visually without becoming a data wall.
  const cards = t.hero.floatingCards
  // hidden on small screens, shown from md up
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 hidden md:block">
      <FloatCard
        item={cards[0]}
        className="left-[4%] top-[18%] -rotate-6"
        delay={900}
      />
      <FloatCard
        item={cards[1]}
        className="right-[6%] top-[26%] rotate-3"
        delay={1050}
      />
      <FloatCard
        item={cards[2]}
        className="left-[7%] bottom-[24%] rotate-3"
        delay={1200}
      />
      <FloatCard item={cards[3]} className="right-[5%] bottom-[30%] -rotate-3" delay={1350} />
      <FloatCard item={cards[4]} className="left-[14%] bottom-[10%] rotate-6" delay={1500} />
    </div>
  )
}

function FloatCard({ item, className = '', delay = 0 }) {
  const base =
    'absolute entrance inline-flex items-center gap-2 rounded-2xl border border-lavender-200 bg-white/95 px-3 py-2 text-xs font-semibold text-violet-700 shadow-soft backdrop-blur'

  if (item.kind === 'level') {
    return (
      <div className={`${base} ${className}`} style={{ animationDelay: `${delay}ms` }}>
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-cta-gradient text-[10px] font-bold text-white">
          {item.label}
        </span>
        <span className="text-[11px] text-ink-soft">CEFR</span>
      </div>
    )
  }

  if (item.kind === 'live') {
    return (
      <div className={`${base} ${className}`} style={{ animationDelay: `${delay}ms` }}>
        <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-500">
          <span className="live-pulse absolute inset-0 rounded-full text-violet-500" />
        </span>
        <span>{item.label}</span>
      </div>
    )
  }

  return (
    <div className={`${base} ${className}`} style={{ animationDelay: `${delay}ms` }}>
      <Icon name={item.icon} size={14} className="text-violet-600" />
      <span>{item.label}</span>
    </div>
  )
}
