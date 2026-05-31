import { useState } from 'react'
import { useLang } from '../i18n/LanguageContext.jsx'
import { WHATSAPP_URL, CONTACT_EMAIL } from '../content.js'
import Icon from './Icon.jsx'

export default function Footer() {
  const { t, lang } = useLang()
  const year = new Date().getFullYear()
  const [subscribed, setSubscribed] = useState(false)

  function handleSubscribe(e) {
    e.preventDefault()
    setSubscribed(true)
  }

  return (
    <footer className="relative overflow-hidden bg-violet-900 text-white/80">
      {/* Decorative orbs */}
      <div className="pointer-events-none absolute -top-32 -end-32 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -start-32 h-80 w-80 rounded-full bg-violet-400/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand + tagline */}
          <div className="md:col-span-4">
            <a href="#top" className="inline-flex items-center gap-2.5">
              <span className="brand-mark inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cta-gradient font-bold text-white shadow-soft">
                ط
              </span>
              <span className="text-base font-bold text-white">{t.brand.name}</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed">{t.footer.tagline}</p>

            <div className="mt-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                {t.footer.socialsTitle}
              </p>
              <ul className="mt-3 flex items-center gap-2">
                <SocialIcon name="whatsapp" href={WHATSAPP_URL} label="WhatsApp" />
                <SocialIcon name="instagram" href="#" label="Instagram" />
                <SocialIcon name="facebook" href="#" label="Facebook" />
                <SocialIcon name="tiktok" href="#" label="TikTok" />
                <SocialIcon name="mail" href={`mailto:${CONTACT_EMAIL}`} label="Email" />
              </ul>
            </div>
          </div>

          {/* Link columns */}
          <FooterCol
            title={t.footer.sections.explore.title}
            items={t.footer.sections.explore.items}
            className="md:col-span-2"
          />
          <FooterCol
            title={t.footer.sections.company.title}
            items={t.footer.sections.company.items}
            className="md:col-span-2"
          />

          {/* Newsletter */}
          <div className="md:col-span-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              {t.footer.newsletter.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">{t.footer.newsletter.body}</p>

            {subscribed ? (
              <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-3 text-sm font-medium text-white">
                <Icon name="check" size={14} strokeWidth={2.5} />
                <span>
                  {lang === 'en' ? "You're on the list. See you next week!" : 'تم الاشتراك. نراك الأسبوع المقبل!'}
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-5 flex flex-col gap-2 sm:flex-row">
                <label className="sr-only" htmlFor="newsletter-email">
                  {t.footer.newsletter.placeholder}
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder={t.footer.newsletter.placeholder}
                  className="min-w-0 flex-1 rounded-full border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 outline-none transition focus:border-white/50 focus:bg-white/15"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-violet-700 transition hover:-translate-y-0.5"
                >
                  {t.footer.newsletter.cta}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-5 py-5 text-xs text-white/50 sm:flex-row sm:items-center">
          <p>
            © {year} {t.brand.name}. {t.footer.rights}
          </p>
          <p className="opacity-70">{t.hero.tagline}</p>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, items, className = '' }) {
  return (
    <div className={className}>
      <h3 className="text-sm font-bold uppercase tracking-wider text-white">{title}</h3>
      <ul className="mt-4 space-y-2.5 text-sm">
        {items.map((item) => (
          <li key={item.label}>
            <a
              className="inline-flex items-center gap-1.5 text-white/70 transition hover:text-white"
              href={item.href}
            >
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

function SocialIcon({ name, href, label }) {
  return (
    <li>
      <a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel="noreferrer"
        aria-label={label}
        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10 hover:text-white"
      >
        <Icon name={name} size={16} />
      </a>
    </li>
  )
}
