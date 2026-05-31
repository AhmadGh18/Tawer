import { useState } from 'react'
import { useLang } from '../i18n/LanguageContext.jsx'
import { CONTACT_EMAIL, WHATSAPP_URL } from '../content.js'
import Icon from './Icon.jsx'
import Reveal from './Reveal.jsx'

export default function Contact() {
  const { t, lang } = useLang()
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const subject = encodeURIComponent('Tawer Academy — new inquiry')
    const body = encodeURIComponent(
      `Name: ${data.get('name') || ''}\nEmail: ${data.get('email') || ''}\nLevel: ${data.get('level') || ''}\n\nMessage:\n${data.get('message') || ''}`,
    )
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="bg-cta-gradient text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:py-24 lg:grid-cols-2 lg:gap-16">
        <Reveal variant="left">
          <p className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-lavender-200">
            <span className="inline-flex h-7 w-9 items-center justify-center rounded-md bg-white/15 text-white">06</span>
            <span className="inline-block h-px w-6 bg-white/30" />
            <span>{t.contact.eyebrow}</span>
          </p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            {t.contact.heading}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-white/85 sm:text-base">{t.contact.sub}</p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-violet-700 shadow-pop transition hover:-translate-y-0.5 hover:bg-lavender-100 sm:text-base"
          >
            <Icon name="whatsapp" size={18} />
            <span>{t.contact.whatsapp}</span>
          </a>

          <ul className="mt-12 space-y-3 text-sm text-white/85">
            <li className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
                <Icon name="mail" size={16} />
              </span>
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white">
                {CONTACT_EMAIL}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
                <Icon name="pin" size={16} />
              </span>
              {lang === 'en' ? 'Online · Worldwide' : 'دورات أونلاين · حول العالم'}
            </li>
          </ul>
        </Reveal>

        <Reveal variant="right" delay={150} className="rounded-card bg-white p-6 text-ink shadow-pop sm:p-8">
          <h3 className="text-lg font-bold">{t.contact.formTitle}</h3>

          {sent ? (
            <div className="entrance mt-6 rounded-xl bg-lavender-100 p-5 text-violet-700">
              <p className="font-semibold">{t.contact.submit}</p>
              <p className="mt-1 text-sm">
                {lang === 'en'
                  ? "Your email client should open shortly. We'll reply within 24 hours."
                  : 'سيتم فتح بريدك الإلكتروني. سنرد عليك خلال ٢٤ ساعة.'}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-5 grid gap-4">
              <Field label={t.contact.name} name="name" placeholder={t.contact.placeholders.name} required />
              <Field
                label={t.contact.email}
                name="email"
                type="email"
                placeholder={t.contact.placeholders.email}
                required
              />
              <Field label={t.contact.level} name="level" placeholder={t.contact.placeholders.level} />
              <div>
                <label htmlFor="message" className="text-sm font-semibold text-ink">
                  {t.contact.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder={t.contact.placeholders.message}
                  className="mt-1.5 w-full rounded-xl border border-lavender-200 bg-paper-tint px-4 py-3 text-sm outline-none transition focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/15"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-cta-gradient px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-pop"
              >
                {t.contact.submit}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}

function Field({ label, name, type = 'text', placeholder, required }) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-semibold text-ink">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="mt-1.5 w-full rounded-xl border border-lavender-200 bg-paper-tint px-4 py-3 text-sm outline-none transition focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/15"
      />
    </div>
  )
}
