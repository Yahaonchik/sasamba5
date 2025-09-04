import React, { useEffect, useRef, useState } from 'react'

export default function LazyRender({ children, rootMargin = '200px', minHeight = 0, className = '' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (visible) return
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      })
    }, { rootMargin })
    io.observe(el)
    return () => io.disconnect()
  }, [visible, rootMargin])

  return (
    <div ref={ref} className={className} style={minHeight ? { minHeight } : undefined}>
      {visible ? children : null}
    </div>
  )
}
