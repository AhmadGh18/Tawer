import { useEffect, useRef, useState } from 'react'

/**
 * Scroll-triggered reveal wrapper.
 * Adds `.in-view` once the element enters the viewport, which the CSS
 * `.reveal` / `.reveal-*` classes use to transition into place.
 *
 * Props:
 *   - variant: 'up' | 'left' | 'right' | 'scale'  (default: 'up')
 *   - delay:   ms to wait before the transition starts (good for stagger)
 *   - as:      element tag to render (default: 'div')
 *   - once:    only trigger once (default: true)
 */
export default function Reveal({
  children,
  as: Tag = 'div',
  variant = 'up',
  delay = 0,
  once = true,
  className = '',
  style,
  ...rest
}) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (typeof IntersectionObserver === 'undefined') {
      setShown(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          if (once) io.disconnect()
        } else if (!once) {
          setShown(false)
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    )
    io.observe(node)
    return () => io.disconnect()
  }, [once])

  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${variant} ${shown ? 'in-view' : ''} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
