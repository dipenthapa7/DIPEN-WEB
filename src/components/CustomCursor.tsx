import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLDivElement>(null)
  const [label, setLabel] = useState('')
  const [ringClass, setRingClass] = useState('')
  const pos = useRef({ x: 0, y: 0 })
  const ringPos = useRef({ x: 0, y: 0 })
  // Magnetic target: when hovering an interactive element the ring eases
  // toward that element's center rather than the raw pointer position.
  const magnet = useRef<{ x: number; y: number } | null>(null)
  const raf = useRef<number>(0)

  useEffect(() => {
    // Skip entirely on touch devices — no custom cursor, native cursor stays.
    if (window.matchMedia('(pointer: coarse)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
    }

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const project = target.closest('[data-cursor="project"]') as HTMLElement | null
      const hover = target.closest('a, button, [data-cursor="hover"]') as HTMLElement | null

      if (project) {
        setRingClass('is-project')
        setLabel('VIEW PROJECT')
        magnet.current = null
      } else if (hover) {
        setRingClass('is-hovering')
        setLabel('')
        // Small targets get a magnetic pull toward their center.
        const r = hover.getBoundingClientRect()
        magnet.current =
          r.width < 260 && r.height < 120
            ? { x: r.left + r.width / 2, y: r.top + r.height / 2 }
            : null
      } else {
        setRingClass('')
        setLabel('')
        magnet.current = null
      }
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)

    let running = document.visibilityState !== 'hidden'
    const loop = () => {
      const dot = dotRef.current
      const ring = ringRef.current
      const lbl = labelRef.current

      if (dot && ring) {
        dot.style.left = pos.current.x + 'px'
        dot.style.top = pos.current.y + 'px'

        // Ring eases toward pointer, or toward the magnet target when set.
        const tx = magnet.current
          ? pos.current.x + (magnet.current.x - pos.current.x) * 0.35
          : pos.current.x
        const ty = magnet.current
          ? pos.current.y + (magnet.current.y - pos.current.y) * 0.35
          : pos.current.y

        ringPos.current.x += (tx - ringPos.current.x) * 0.16
        ringPos.current.y += (ty - ringPos.current.y) * 0.16
        ring.style.left = ringPos.current.x + 'px'
        ring.style.top = ringPos.current.y + 'px'

        if (lbl) {
          lbl.style.left = ringPos.current.x + 'px'
          lbl.style.top = ringPos.current.y + 'px'
        }
      }

      if (running) raf.current = requestAnimationFrame(loop)
    }

    const onVisibilityChange = () => {
      const shouldRun = document.visibilityState !== 'hidden'
      if (shouldRun === running) return
      running = shouldRun
      if (running) raf.current = requestAnimationFrame(loop)
      else cancelAnimationFrame(raf.current)
    }

    if (running) raf.current = requestAnimationFrame(loop)
    document.addEventListener('visibilitychange', onVisibilityChange)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      document.removeEventListener('visibilitychange', onVisibilityChange)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className={`cursor-dot ${ringClass}`} aria-hidden />
      <div ref={ringRef} className={`cursor-ring ${ringClass}`} aria-hidden />
      {label && (
        <div ref={labelRef} className="cursor-label visible" aria-hidden>
          {label}
        </div>
      )}
    </>
  )
}
