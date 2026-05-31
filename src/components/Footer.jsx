import { useLang } from '../i18n/LanguageContext.jsx'

export default function Footer() {
  const { t, lang } = useLang()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-violet-900 text-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-cta-gradient font-bold text-white">
              ط
            </span>
            <span className="text-base font-bold text-white">{t.brand.name}</span>
          </div>
          <p className="mt-3 max-w-sm text-sm leading-relaxed">{t.footer.tagline}</p>
          <p className="mt-4 text-xs text-white/50">{lang === 'en' ? 'طور · Tawer' : 'Tawer · طور'}</p>
        </div>

        <FooterCol title={t.footer.sections.explore.title} items={t.footer.sections.explore.items} />
        <FooterCol title={t.footer.sections.contact.title} items={t.footer.sections.contact.items} />
      </div>

      <div className="border-t border-white/10">
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

function FooterCol({ title, items }) {
  return (
    <div className="md:col-span-3">
      <h3 className="text-sm font-bold uppercase tracking-wider text-white">{title}</h3>
      <ul className="mt-4 space-y-2 text-sm">
        {items.map((item) => (
          <li key={item}>
            <a className="transition hover:text-white" href="#contact">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
