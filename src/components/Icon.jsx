const paths = {
  // Brand / nav
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    </>
  ),
  close: <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />,
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />,
  check: <path d="M5 12l4 4 10-10" strokeLinecap="round" strokeLinejoin="round" />,
  chevron: <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />,
  plus: <path d="M12 5v14M5 12h14" strokeLinecap="round" />,
  sparkle: (
    <>
      <path d="M12 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5z" strokeLinejoin="round" />
      <path d="M19 14l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" strokeLinejoin="round" />
    </>
  ),

  // Trust / hero chips
  shield: (
    <>
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  liveDot: <circle cx="12" cy="12" r="4" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  star: <path d="M12 2l2.39 4.84L20 8l-4 3.9.94 5.5L12 14.77 7.06 17.4 8 11.9 4 8l5.61-1.16L12 2z" strokeLinejoin="round" />,
  layers: (
    <>
      <path d="M12 3l9 5-9 5-9-5 9-5z" strokeLinejoin="round" />
      <path d="M3 13l9 5 9-5M3 18l9 5 9-5" strokeLinejoin="round" />
    </>
  ),

  // Value props
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
    </>
  ),
  globeAlt: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18" />
    </>
  ),
  clockAlt: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v6l4 2" strokeLinecap="round" />
    </>
  ),

  // Services
  users: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20c1-3.5 3.5-5 6-5s5 1.5 6 5" strokeLinecap="round" />
      <circle cx="17" cy="9" r="2.6" />
      <path d="M15 14.5c2-.3 4 .8 5 3.5" strokeLinecap="round" />
    </>
  ),
  child: (
    <>
      <circle cx="12" cy="7" r="3" />
      <path d="M6 21c.5-4 3-6 6-6s5.5 2 6 6" strokeLinecap="round" />
      <path d="M9 6.5c1-1 2-1 3-1s2 0 3 1" strokeLinecap="round" />
    </>
  ),
  graduation: (
    <>
      <path d="M2 9l10-4 10 4-10 4L2 9z" strokeLinejoin="round" />
      <path d="M6 11v5c2 1.5 4 2.2 6 2.2s4-.7 6-2.2v-5" strokeLinecap="round" />
      <path d="M22 9v5" strokeLinecap="round" />
    </>
  ),
  speak: (
    <>
      <path d="M4 5h12a3 3 0 013 3v6a3 3 0 01-3 3H9l-5 4V8a3 3 0 013-3z" strokeLinejoin="round" />
      <path d="M8 10h7M8 13h4" strokeLinecap="round" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2" />
      <path d="M3 12h18" />
    </>
  ),
  wand: (
    <>
      <path d="M14 4l6 6-12 12-6-6L14 4z" strokeLinejoin="round" />
      <path d="M11 7l6 6" />
      <path d="M19 3l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" strokeLinejoin="round" />
    </>
  ),

  // Contact
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 7 9-7" strokeLinejoin="round" />
    </>
  ),
  pin: (
    <>
      <path d="M12 22s-7-7-7-12a7 7 0 0114 0c0 5-7 12-7 12z" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  whatsapp: (
    <path
      d="M20.52 3.48A11.78 11.78 0 0 0 12.07 0C5.55 0 .26 5.29.26 11.81c0 2.08.55 4.11 1.59 5.9L0 24l6.45-1.69a11.8 11.8 0 0 0 5.62 1.43h.01c6.51 0 11.81-5.29 11.81-11.81 0-3.15-1.23-6.12-3.37-8.45zM12.08 21.7h-.01a9.86 9.86 0 0 1-5.02-1.38l-.36-.21-3.83 1 1.02-3.73-.23-.38a9.85 9.85 0 0 1-1.5-5.18c0-5.43 4.42-9.85 9.86-9.85 2.63 0 5.1 1.03 6.96 2.89a9.79 9.79 0 0 1 2.88 6.97c0 5.43-4.42 9.86-9.77 9.87zm5.4-7.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.46-.15-.66.15-.2.3-.76.97-.93 1.17-.17.2-.34.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.9-2.18-.24-.58-.48-.5-.66-.51l-.56-.01c-.2 0-.5.07-.76.37s-1 .98-1 2.38 1.02 2.76 1.17 2.96c.15.2 2.02 3.09 4.91 4.33.69.3 1.22.47 1.64.6.69.22 1.31.19 1.81.12.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.27-.2-.57-.35z"
      fill="currentColor"
      stroke="none"
    />
  ),

  // Quote
  quote: (
    <path
      d="M7 7h5v5H9c0 2 1 3 3 3v2c-3 0-5-2-5-5V7zm9 0h5v5h-3c0 2 1 3 3 3v2c-3 0-5-2-5-5V7z"
      fill="currentColor"
      stroke="none"
    />
  ),
}

export default function Icon({ name, size = 18, className = '', strokeWidth = 1.8, ...rest }) {
  const node = paths[name]
  if (!node) return null
  const isFilled = name === 'whatsapp' || name === 'quote'
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={isFilled ? 'currentColor' : 'none'}
      stroke={isFilled ? undefined : 'currentColor'}
      strokeWidth={isFilled ? undefined : strokeWidth}
      aria-hidden="true"
      className={className}
      {...rest}
    >
      {node}
    </svg>
  )
}
