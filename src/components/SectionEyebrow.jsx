/**
 * Reusable section eyebrow with a numeric prefix for visual wayfinding.
 * Renders "01 ·  EYEBROW LABEL"
 */
export default function SectionEyebrow({ index, children }) {
  return (
    <p className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-violet-600">
      <span className="inline-flex h-7 w-9 items-center justify-center rounded-md bg-lavender-200 text-violet-700">
        {String(index).padStart(2, '0')}
      </span>
      <span className="inline-block h-px w-6 bg-violet-400/60" />
      <span>{children}</span>
    </p>
  )
}
