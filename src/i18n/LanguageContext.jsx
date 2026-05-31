import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { content } from '../content.js'

const LanguageContext = createContext(null)
const STORAGE_KEY = 'tawer-lang'

function readInitialLang() {
  if (typeof window === 'undefined') return 'en'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return stored === 'ar' ? 'ar' : 'en'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(readInitialLang)

  useEffect(() => {
    const html = document.documentElement
    html.lang = lang
    html.dir = lang === 'ar' ? 'rtl' : 'ltr'
    html.classList.toggle('font-arabic', lang === 'ar')
    window.localStorage.setItem(STORAGE_KEY, lang)
  }, [lang])

  const toggle = useCallback(() => {
    setLang((prev) => (prev === 'en' ? 'ar' : 'en'))
  }, [])

  const value = useMemo(() => {
    const t = content[lang]
    return { lang, t, toggle, isRTL: lang === 'ar' }
  }, [lang, toggle])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used inside <LanguageProvider>')
  return ctx
}
