import { useEffect, useState } from 'react'
import { useLang } from '../i18n/LanguageContext.jsx'
import { WHATSAPP_URL } from '../content.js'
import Icon from './Icon.jsx'

export default function Navbar() {
  const { t, lang, toggle } = useLang()
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('top')

  const links = [
    { href: '#services', id: 'services', label: t.nav.services },
    { href: '#courses', id: 'courses', label: t.nav.courses },
    { href: '#pricing', id: 'pricing', label: t.nav.pricing },
    { href: '#testimonials', id: 'testimonials', label: t.nav.testimonials },
    { href: '#faq', id: 'faq', label: t.nav.faq },
    { href: '#contact', id: 'contact', label: t.nav.contact },
  ]

  // Track which section is currently in view
  useEffect(() => {
    const ids = ['top', ...links.map((l) => l.id)]
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (!sections.length || typeof IntersectionObserver === 'undefined') return
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <header className="sticky top-0 z-40 border-b border-lavender-200/70 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:py-4">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="brand-mark inline-flex h-9 w-9 items-center justify-center rounded-xl bg-cta-gradient font-bold text-white shadow-soft">
            ط
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-[15px] font-bold text-violet-700">{t.brand.name}</span>
            <span className="text-[11px] text-ink-soft">{lang === 'en' ? 'طور' : 'Tawer'}</span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 text-sm font-medium text-ink/80 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                className="nav-link py-1 transition-colors hover:text-violet-600"
                href={l.href}
                data-active={active === l.id ? 'true' : 'false'}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={toggle}
            aria-label="Toggle language"
            className="inline-flex items-center gap-1.5 rounded-full border border-lavender-300 bg-white px-3 py-1.5 text-sm font-semibold text-violet-700 transition hover:border-violet-400 hover:text-violet-600"
          >
            <Icon name="globe" size={14} />
            <span>{t.nav.toggle}</span>
          </button>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center rounded-full bg-cta-gradient px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:shadow-pop hover:-translate-y-0.5 sm:inline-flex"
          >
            {t.nav.cta}
          </a>

          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-lavender-300 text-violet-700 lg:hidden"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? 'close' : 'menu'} size={18} />
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-lavender-200/70 bg-white lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                    active === l.id ? 'bg-lavender-100 text-violet-700' : 'text-ink/80 hover:bg-lavender-100'
                  }`}
                >
                  <span>{l.label}</span>
                  {active === l.id && (
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-violet-600" />
                  )}
                </a>
              </li>
            ))}
            <li className="pt-1">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="block rounded-lg bg-cta-gradient px-3 py-2.5 text-center text-sm font-semibold text-white"
              >
                {t.nav.cta}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
